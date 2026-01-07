window.addEventListener("DOMContentLoaded", () => {
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

  // ====== contact form  logic end form here ====

  const contactForm = document.querySelector("#contactform");
  const name = document.querySelector("#name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const contactData = JSON.parse(localStorage.getItem("contactData")) || [];

  function saveContactDataInLocalStorage() {
    localStorage.setItem("contactData", JSON.stringify(contactData));
  }

  contactForm.addEventListener("submit", (e) => {
    try {
      e.preventDefault();
      const customerName = name.value.trim();
      if (!customerName || !isNaN(customerName)) {
        alert("Name must be a string and cannot be only numbers' ");
        return;
      }
      const customerEmail = email.value.trim();
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!customerEmail || !emailRegex.test(customerEmail)) {
        alert("Please enter a valid email address' ");
        return;
      }
      const customerMessage = message.value.trim();

      const newData = {
        id: Date.now(),
        createdAt: new Date(),
        name: customerName,
        email: customerEmail,
        message: customerMessage,
      };

      contactData.push(newData);
      console.log(newData);
      saveContactDataInLocalStorage();
      contactForm.reset();
      name.focus();
    } catch (error) {
      console.error(
        "Facing error during contacting through contact form",
        error
      );
    }
  });
});
