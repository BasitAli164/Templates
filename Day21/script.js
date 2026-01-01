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
  inputFields.userName.addEventListener("keypress",(e)=>{
    if(e.key=="Enter") addUserFun();
  })
  inputFields.userEmail.addEventListener("keypress",(e)=>{
    if(e.key=="Enter") addUserFun();
  })
  inputFields.userPassword.addEventListener("keypress",(e)=>{
    if(e.key=="Enter") addUserFun();
  })


  // now create all function which are required 



  //? this is a util function 
  function saveToLocalStorage(){
    localStorage.setItem("users",JSON.stringify(dataStorage))
  }
});
