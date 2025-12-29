// get all element through their id

const inputText = document.getElementById("textInput");
const addBtn = document.getElementById("addBtn");
const textList = document.getElementById("textList");

// define the data structure to store data

const stores = JSON.parse(localStorage.getItem("todo")) || [];

// bind all events
addBtn.addEventListener("click", addTask);
inputText.addEventListener("keypress", (e) => {
  if (e.key == "Enter") addTask();
});

// define the method
function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(stores));
}

function addTask() {
  const text = inputText.value.trim();
  if (text) {
    const newData = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: Date.now(),
    };

    stores.unshift(newData);
    render();
    saveToLocalStorage();
    inputText.value = "";
    inputText.focus();
    console.log(stores);
  }
}

function render() {
    textList.innerHTML=""
    stores.forEach((todo)=>{
        const listItem=document.createElement('li');
        
    })

}

render()
