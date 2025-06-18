document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const userType = document.getElementById("userType").value;

    if (!email.endsWith("@dlsu.edu.ph")) {
      alert("Please use a valid DLSU email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (!userType) {
      alert("Please select a user type.");
      return;
    }

    const newUser = {
      email: email,
      password: password,
      userType: userType
    };

    console.log("Registered User:", newUser);
    alert("Registration successful! (Simulated)");

    registerForm.reset();
    window.location.href = "login.html";
  });
});
