// get all required Element with its id

let userName = document.getElementById("userName");
let fName = document.getElementById("fName");
let userAge = document.getElementById("UserAge");
let addUserForm = document.getElementById("addUser");
let userList = document.getElementById("userList");

// set a data structure to store data

let users = JSON.parse(localStorage.getItem("user")) || [];

// savefunction for saving new user in localStorage

function saveToLocalStoarge() {
  localStorage.setItem("user", JSON.stringify(users));
}

// handle data

addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = userName.value.trim();
  let age = userAge.valueAsNumber;
  let father = fName.value.trim();
  if (!name) {
    throw new Error("User name is not give");
  }
  if (!age || age > 120 || age < 0) {
    throw new Error(
      "User age is not give | Age must be Less than 0 | Age must be Greater than 120"
    );
  }
  if (!father) {
    throw new Error("User F name is not give");
  }

  users.push({ name, father, age });
  saveToLocalStoarge();

  addUserForm.reset();
});

function render() {
  userList.innerHTML = "";

  users.forEach((user, index) => {
    let box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
        <p>
        S#: ${index} <br>
        userName: ${user.name} <br>
        fatherName: ${user.father} <br>
        userAge: ${user.age}        
        </p>
        <button onclick="handleEdit(${index})">Edit</button>
        <button class="delBtn" onclick="handleDelete(${index})">Delete</button>
        `;

    userList.appendChild(box);
  });

  saveToLocalStoarge();
}

function handleDelete(index) {
  users.splice(index, 1);
  render();
}

function handleEdit(index) {
  let newUserName = prompt(
    "Do you want to update your name",
    users[index].name
  );
  let newUserAge = prompt("Do you want to update your age", users[index].age);
  let newFathername = prompt(
    "Do you want to update your father name",
    users[index].father
  );

  if (newUserName !== null && newUserName.trim() !== "") {
    users[index].name = newUserName.trim();
  }
  if (newUserAge !== null && newUserAge.trim() !== "") {
    users[index].age = Number(newUserAge);
  }
  if (newFathername !== null && newFathername.trim() !== "") {
    users[index].father = newFathername.trim();
  }

  render();
}

render();


// <script>
// // get all required Element with its id

// let userName = document.getElementById("userName");
// let fName = document.getElementById("fName");
// let userAge = document.getElementById("UserAge");
// let addUserForm = document.getElementById("addUser");
// let userList = document.getElementById("userList");

// // ===== Map Data Structure =====

// // Load from localStorage → convert array back to Map
// let users = new Map(
//   JSON.parse(localStorage.getItem("usersMap")) || []
// );

// // Save Map → convert to array first
// function saveToLocalStorage() {
//   localStorage.setItem("usersMap", JSON.stringify([...users]));
// }

// // handle form submit
// addUserForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let name = userName.value.trim();
//   let age = userAge.valueAsNumber;
//   let father = fName.value.trim();

//   if (!name) throw new Error("User name is not given");
//   if (!age || age > 120 || age < 0)
//     throw new Error("Invalid Age");
//   if (!father) throw new Error("Father name is not given");

//   // unique key for each user
//   const id = Date.now().toString();

//   // Map set()
//   users.set(id, { name, father, age });

//   saveToLocalStorage();
//   addUserForm.reset();
//   render();
// });

// // render function
// function render() {
//   userList.innerHTML = "";

//   let index = 1;

//   users.forEach((user, id) => {
//     let box = document.createElement("div");
//     box.className = "box";

//     box.innerHTML = `
//       <p>
//         S#: ${index++} <br>
//         userName: ${user.name} <br>
//         fatherName: ${user.father} <br>
//         userAge: ${user.age}
//       </p>
//       <button onclick="handleEdit('${id}')">Edit</button>
//       <button onclick="handleDelete('${id}')">Delete</button>
//     `;

//     userList.appendChild(box);
//   });

//   saveToLocalStorage();
// }

// // delete user
// function handleDelete(id) {
//   users.delete(id);       // Map delete()
//   render();
// }

// // edit user
// function handleEdit(id) {
//   let user = users.get(id);   // Map get()

//   let newUserName = prompt("Update name", user.name);
//   let newUserAge = prompt("Update age", user.age);
//   let newFathername = prompt("Update father name", user.father);

//   if (newUserName !== null && newUserName.trim() !== "")
//     user.name = newUserName.trim();

//   if (newUserAge !== null && newUserAge.trim() !== "")
//     user.age = Number(newUserAge);

//   if (newFathername !== null && newFathername.trim() !== "")
//     user.father = newFathername.trim();

//   // Map update — just set again
//   users.set(id, user);

//   render();
// }

// render();
// </script>
