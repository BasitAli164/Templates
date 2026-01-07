window.addEventListener("DOMContentLoaded",()=>{
    // ====== auth logic start form here ====
  const logOutBtn = document.getElementById("logoutBtn");
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("user Data", userData);

  if (!userData) {
    window.location.replace("../index.html");
  }

  logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("userData");
    window.location.replace("../index.html");
  });

  // ====== auth logic end form here ====
})