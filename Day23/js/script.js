window.addEventListener("DOMContentLoaded", () => {
  // get all element

  //! Login page logic
  const loginBtn = document.getElementById("loginBtn");
  const userName = document.getElementById("username");
  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password");

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

      if (!name) {
        throw new Error("Name is required");
      }
      if (!email) {
        throw new Error("Email is required");
      }
      if (!password) {
        throw new Error("Password is required");
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
    } catch (error) {
      console.error("Facing error on login time", error);
    }
  });
});
