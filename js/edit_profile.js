// edit_profile.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("editProfileForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const description = document.getElementById("description").value.trim();
    const profileImage = document.getElementById("profileImage").files[0];

    if (!fullName || !email || !description) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.endsWith("@dlsu.edu.ph")) {
      alert("Email must be a valid DLSU address.");
      return;
    }

    const updatedProfile = {
      name: fullName,
      email: email,
      description: description,
      image: profileImage ? profileImage.name : "default-profile.png"
    };

    console.log("Profile Updated:", updatedProfile);
    alert("Profile updated successfully! (Simulated)");

    // Simulate redirect back to profile page
    window.location.href = "profile.html";
  });
});
