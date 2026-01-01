window.addEventListener("DOMContentLoaded", () => {
  // Get all element which are required through their ids;

  const addUser = document.getElementById("addUser");
  const inputFields = {
    userName: document.getElementById("username"),
    userEmail: document.getElementById("useremail"),
    userPassword: document.getElementById("userpassword"),
  };

  // Make or Create a data structure for store data into local storage

  const dataStorage = JSON.parse(localStorage.getItem("users")) || [];
  console.log("dataStorage", localStorage);

  // Bind All eventListner

  addUser.addEventListener("submit", addUserFun);
  inputFields.userName.addEventListener("keypress", (e) => {
    if (e.key == "Enter") addUserFun();
  });
  inputFields.userEmail.addEventListener("keypress", (e) => {
    if (e.key == "Enter") addUserFun();
  });
  inputFields.userPassword.addEventListener("keypress", (e) => {
    if (e.key == "Enter") addUserFun();
  });

  // now create all function which are required

  //? this is a util function
  function saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(dataStorage));
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
        id:Math.random().toFixed(4)*10,
        name: userName,
        email: userEmail,
        password: userPassword,
        createdAt: Date.now(),
      };


      // save into data structure
      dataStorage.unshift(newData)
      saveToLocalStorage();
      renderUI();
      console.log("User Add Successfully in localStorage")



    } catch (error) {
      console.error("Error during add user:", error);
    }
  }


  const renderUI=function(){
    const fragment=document.createDocumentFragment();
    if(dataStorage.length===0){
      const listItem=document.createElement("li");
      listItem.textContent="There is no data yet";
      listItem.className="notData"
      fragment.appendChild(listItem)
    }
  }
});
