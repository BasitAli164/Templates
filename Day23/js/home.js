window.addEventListener("DOMContentLoaded", () => {
  // ========== Logout logic or code ===========
  const logOutBtn = document.getElementById("logoutBtn");
  const bookingBtn=document.getElementById("bookTableBtn")
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    window.location.replace("../index.html");
  }
  logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("userData");
    window.location.replace("../index.html");
  });

  // ========== Logout logic or code ===========

  // ========== Booking Btn logic or code ===========
  bookingBtn.addEventListener("click",()=>{
    window.location.assign("../pages/bookingform.html")
  })



});
