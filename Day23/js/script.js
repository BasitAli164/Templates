window.addEventListener("DOMContentLoaded", () => {
  // get all element

  //! Login page logic
  const loginBtn = document.getElementById("loginBtn");
  const userName = document.getElementById("username");
  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password");

  // write a regix
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // create data structure for storing data

  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  // function

  function saveUserInLocalStorage() {
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  loginBtn.addEventListener("submit", (e) => {
    try {
      e.preventDefault();
      let name = userName.value.trim();
      let email = userEmail.value.trim();
      let password = userPassword.value.trim();

      if (!name || !isNaN(name)) {
        throw new Error("Username must be a string and cannot be only numbers");
      }

      if (!email || !emailRegex.test(email)) {
        throw new Error("Please enter a valid email address");
      }
      if (!password || password.length < 5) {
        throw new Error("Password must be at least 5 characters long");
      }

      const data = {
        id: Date.now(),
        username: name,
        useremail: email,
        userpassword: password,
        createdAt: new Date(),
      };

      userData.push(data);

      
      saveUserInLocalStorage();
      loginBtn.reset();
      window.location.replace("home.html")
    } catch (error) {
      console.error("Facing error on login time", error);
    }
  });
});
