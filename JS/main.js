const menu = document.getElementById("menu");
const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", () => {
  //   menu.classList.toggle("hidden");
  //   menu.classList.toggle("flex");
  menu.classList.toggle("translate-x-[-150%]");
  menu.classList.toggle("translate-x-0");
});
