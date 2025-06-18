document.addEventListener("DOMContentLoaded", function () {
  console.log("Lab Reservation System Loaded");

  const sampleUsers = [
    { name: "John Cruz", email: "john.cruz@dlsu.edu.ph" },
    { name: "Maria Santos", email: "maria.santos@dlsu.edu.ph" },
    { name: "Daniel Reyes", email: "daniel.reyes@dlsu.edu.ph" },
    { name: "Anna Dela Cruz", email: "anna.delacruz@dlsu.edu.ph" },
    { name: "Lucas Tan", email: "lucas.tan@dlsu.edu.ph" }
  ];

  console.log("Sample Users:", sampleUsers);

  function rememberUser(user) {
    localStorage.setItem("rememberedUser", JSON.stringify(user));
  }

  function getRememberedUser() {
    const user = localStorage.getItem("rememberedUser");
    return user ? JSON.parse(user) : null;
  }

  const remembered = getRememberedUser();
  if (remembered) {
    console.log(`Welcome back, ${remembered.name}`);
  }
});
