const data = [
  {
    title: "HTML",
    description: "HTML stands for Hyper Text Markup Language",
    img: "../image/cat-1.png",
  },
  {
    title: "Frontend",
    description: "HTML stands for Hyper Text Markup Language",
    img: "../image/cat-2.png",
  },
  {
    title: "Backend",
    description: "HTML stands for Hyper Text Markup Language",
    img: "../image/cat-3.png",
  },
  {
    title: "JavaScript",
    description: "HTML stands for Hyper Text Markup Language",
    img: "../image/cat-1.png",
  },
  {
    title: "Python",
    description: "HTML stands for Hyper Text Markup Language",
    img: "../image/cat-3.png",
  },
  {
    title: "CSS",
    description: "HTML stands for Hyper Text Markup Language",
    img: "../image/cat-2.png",
  },
];

const box = document.querySelector(".container");

data.forEach((item) => {
  box.innerHTML += `
    <div class="card">
            <img src='${item.img}' alt="Prodcut-Image">
            <h1>${item.title}</h1>
            <p>${item.description}</p>
            <div class="btn">
                <button>Learn More</button>
                <button>Pay</button>
            </div>
        </div>
        `
});
