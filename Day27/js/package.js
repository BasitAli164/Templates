// Get package name from URL
const urlParams = new URLSearchParams(window.location.search);
const packageName = urlParams.get("name") || "Unknown Package";

const packageNameEl = document.getElementById("packageName");
const packageDescriptionEl = document.getElementById("packageDescription");
const versionsEl = document.getElementById("versions");

// Sample package data
const packageData = {
  react: { description: "A JavaScript library for building UI", versions: ["18.2.0", "18.1.0", "17.0.2"] },
  express: { description: "Fast, unopinionated, minimalist web framework", versions: ["4.18.2", "4.17.1"] },
  lodash: { description: "A modern JavaScript utility library", versions: ["4.17.21", "4.17.20"] },
};

const pkg = packageData[packageName.toLowerCase()] || { description: "No description", versions: [] };

packageNameEl.textContent = packageName;
packageDescriptionEl.textContent = pkg.description;

// Display versions
pkg.versions.forEach(v => {
  const vEl = document.createElement("div");
  vEl.textContent = v;
  versionsEl.appendChild(vEl);
});

// Install button click
document.getElementById("installBtn").addEventListener("click", () => {
  alert(`npm install ${packageName}`);
});
