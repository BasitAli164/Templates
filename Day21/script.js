window.addEventListener("DOMContentLoaded", () => {
  // Get all element which are required through their ids;

  const addUser = document.getElementById("addUser");
  const inputFields = {
    userName: document.getElementById("username"),
    userEmail: document.getElementById("useremail"),
    userPassword: document.getElementById("userpassword"),
  };
  const listItemArea = document.getElementById("listItem");

  // Make or Create a data structure for store data into local storage

  let dataStorage = JSON.parse(localStorage.getItem("students")) || [];

  // Bind All eventListner

  addUser.addEventListener("submit", addUserFun);

  // now create all function which are required

  //? this is a util function
  function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(dataStorage));
  }

  function addUserFun(e) {
    try {
      // first prevent default to prevent reload or refresh whole page on each click of btn
      e.preventDefault();

      // get all values of the input fields and store them into new variable for validation
      const userName = inputFields.userName.value.trim();
      const userEmail = inputFields.userEmail.value.trim();
      const userPassword = inputFields.userPassword.value.trim();

      // validation
      if (!userName) {
        throw new Error("User name is missing");
      }

      if (!userEmail) {
        throw new Error("Eamil is missing");
      }
      if (!userPassword) {
        throw new Error("Password is missing");
      } else if (userPassword.length <= 5) {
        throw new Error("Password must be more than 5 character");
      }

      // create new object and save that in local Storage with help of our data structure

      const newData = {
        id:Date.now(),
        name: userName,
        email: userEmail,
        password: userPassword,
        createdAt: new Date(),
      };

      // save into data structure
      dataStorage.unshift(newData);
      renderUI();
      console.log("User Add Successfully in localStorage");
      addUser.reset();
    } catch (error) {
      console.error("Error during add user:", error);
    }
  }

  const renderUI = function () {
    const fragment = document.createDocumentFragment();
    if (dataStorage.length === 0) {
      const li = document.createElement("li");
      li.textContent = "There is no data yet";
      fragment.appendChild(li);
    } else {
      dataStorage.forEach((user) => {
        const li = createElements(user);
        fragment.appendChild(li);
      });
    }

    listItemArea.innerHTML = "";
    listItemArea.appendChild(fragment);
    saveToLocalStorage();
    attachTaskEventListeners();
  };

  function createElements(user) {
    const li = document.createElement("li");
    li.dataset.id = user.id;
    li.className = "listItem";

    li.innerHTML = `
    <div class="box">
    <div class="left">
    <p>
    ${user.name}<br/>
    ${user.email}<br/>  
    ${user.password}<br/>
    
    </p>
    </div>
    <div class="right">
    <button class="editBtn">Edit</button>
    <button class="delBtn">Delete</button>
    </div>
    </div>
    
    `;

    return li;
  }

  function attachTaskEventListeners() {
    document
      .querySelectorAll(".delBtn")
      .forEach(
        btn => btn.addEventListener("click", delUser)
      );
  }

  function delUser(e) {
    const id = parseInt(e.target.closest(".listItem").dataset.id);
    dataStorage = dataStorage.filter((t) => t.id !== id);
    renderUI();
  }
  renderUI();
});
