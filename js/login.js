// login.js

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  // Sample users (should match those used in register simulation)
  const sampleUsers = [
    { email: "john.cruz@dlsu.edu.ph", password: "john123", userType: "student" },
    { email: "maria.santos@dlsu.edu.ph", password: "maria123", userType: "technician" }
  ];

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;
    const userType = document.getElementById("userType").value;

    const foundUser = sampleUsers.find(
      user => user.email === email && user.password === password
    );

    if (!foundUser) {
      alert("Invalid email or password.");
      return;
    }

    if (rememberMe) {
      const rememberData = {
        ...foundUser,
        rememberUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 21) // 3 weeks
      };
      localStorage.setItem("rememberedUser", JSON.stringify(rememberData));
    }

    alert("Login successful!");

    // Redirect based on user type
    if (foundUser.userType === "student") {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "technician.html";
    }
  });
});
