/* Created by Tivotal */

let toggleBtn = document.querySelector(".toggleBtn");
let header = document.querySelector(".header");

toggleBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});
