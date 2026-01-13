// Sample packages data
const packages = [
  { name: "react", description: "A JavaScript library for building UI" },
  { name: "express", description: "Fast, unopinionated, minimalist web framework" },
  { name: "lodash", description: "A modern JavaScript utility library" },
];

// Populate packages dynamically
const packagesContainer = document.getElementById("packages");

packages.forEach(pkg => {
  const card = document.createElement("div");
  card.className = "package-card";
  card.innerHTML = `
    <h3>${pkg.name}</h3>
    <p>${pkg.description}</p>
    <a href="package.html?name=${pkg.name}">View</a>
  `;
  packagesContainer.appendChild(card);
});

// Search functionality
document.getElementById("searchBtn").addEventListener("click", () => {
  const search = document.getElementById("search").value.toLowerCase();
  packagesContainer.innerHTML = "";
  packages
    .filter(pkg => pkg.name.includes(search))
    .forEach(pkg => {
      const card = document.createElement("div");
      card.className = "package-card";
      card.innerHTML = `
        <h3>${pkg.name}</h3>
        <p>${pkg.description}</p>
        <a href="package.html?name=${pkg.name}">View</a>
      `;
      packagesContainer.appendChild(card);
    });
});
