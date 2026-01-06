window.addEventListener("DOMContentLoaded", () => {
  // ========== Logout logic or code ===========
  const logOutBtn = document.getElementById("logoutBtn");
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    window.location.replace("../index.html");
  }
  logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("userData");
    window.location.replace("../index.html");
  });
  

  // ========== Logout logic or code ===========
});
