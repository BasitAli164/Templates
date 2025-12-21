let progress = document.querySelector(".progress");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let circle = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circle.forEach((cir, idx) => {
    if (idx < currentActive) {
      cir.classList.add("active");
    } else {
      cir.classList.remove("active");
    }

    let actives = document.querySelectorAll(".active");
    progress.style.width =
      ((actives.length - 1) / (cir.length - 1)) * 100 + "%";

    if (currentActive == 1) {
      prev.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  });
}
