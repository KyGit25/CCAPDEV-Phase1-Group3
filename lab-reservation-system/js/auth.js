// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Check credentials (in a real app, this would be server-side)
            const user = sampleData.users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Store user session (in a real app, use proper session management)
                localStorage.setItem('currentUser', JSON.stringify(user));
                if (rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                }
                
                // Redirect based on user type
                if (user.type === 'student') {
                    window.location.href = '../views/dashboard/student.html';
                } else {
                    window.location.href = '../views/dashboard/technician.html';
                }
            } else {
                alert('Invalid email or password');
            }
        });
    }
    
    // Registration form submission
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        // Toggle between student and technician registration
        const studentBtn = document.getElementById('studentBtn');
        const technicianBtn = document.getElementById('technicianBtn');
        const studentIdField = document.getElementById('studentIdField');
        
        if (studentBtn && technicianBtn) {
            studentBtn.addEventListener('click', function() {
                studentBtn.classList.add('active');
                technicianBtn.classList.remove('active');
                studentIdField.style.display = 'block';
            });
            
            technicianBtn.addEventListener('click', function() {
                technicianBtn.classList.add('active');
                studentBtn.classList.remove('active');
                studentIdField.style.display = 'none';
            });
        }
        
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            const isStudent = studentBtn.classList.contains('active');
            const studentId = isStudent ? document.getElementById('studentId').value : null;
            
            // Basic validation
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (isStudent && !studentId) {
                alert('Please enter your student ID');
                return;
            }
            
            // Check if email already exists
            if (sampleData.users.some(u => u.email === email)) {
                alert('Email already registered');
                return;
            }
            
            // Create new user (in a real app, this would be sent to server)
            const newUser = {
                id: sampleData.users.length + 1,
                email: email,
                password: password,
                type: isStudent ? 'student' : 'technician',
                name: name,
                studentId: isStudent ? studentId : null,
                profilePic: isStudent ? 'assets/profile' + (sampleData.users.filter(u => u.type === 'student').length + 1) + '.jpg' : 'assets/tech' + (sampleData.users.filter(u => u.type === 'technician').length + 1) + '.jpg',
                description: isStudent ? 'DLSU student' : 'Lab technician',
                reservations: []
            };
            
            sampleData.users.push(newUser);
            
            // For demo, log the new user
            console.log('New user registered:', newUser);
            
            alert('Registration successful! Please login.');
            window.location.href = 'login.html';
        });
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('rememberMe');
            window.location.href = '../../index.html';
        });
    }
    
    // Check if user is logged in for protected pages
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const protectedPages = [
        'dashboard/student.html',
        'dashboard/technician.html',
        'reservation/',
        'profile/'
    ];
    
    const currentPath = window.location.pathname;
    const isProtectedPage = protectedPages.some(page => currentPath.includes(page));
    
    if (isProtectedPage && !currentUser) {
        window.location.href = '../auth/login.html';
    }
});
