document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  const sampleUsers = [
    { email: "john.cruz@dlsu.edu.ph", password: "john123", userType: "student" },
    { email: "daniel.reyes@dlsu.edu.ph", password: "daniel123", userType: "student" },
    { email: "anna.delacruz@dlsu.edu.ph", password: "anna123", userType: "student" },
    { email: "lucas.tan@dlsu.edu.ph", password: "lucas123", userType: "technician" },
    { email: "maria.santos@dlsu.edu.ph", password: "maria123", userType: "technician" }
  ];

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;
    const userType = document.getElementById("userType").value;

    const foundUser = sampleUsers.find(
      user => user.email === email && user.password === password && user.userType === userType
    );

    if (!foundUser) {
      alert("Invalid email or password.");
      return;
    }

    if (rememberMe) {
      const rememberData = {
        ...foundUser,
        rememberUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 21) 
      };
      localStorage.setItem("rememberedUser", JSON.stringify(rememberData));
    }

    alert("Login successful!");

    if (foundUser.userType === "student") {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "technician.html";
    }
  });
});
