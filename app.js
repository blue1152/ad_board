// toggle menu
const input = document.getElementById("action__input_1");
const toggleMenu = (event) => {
  const menu = document.getElementById("action__menu_1");
  menu.classList.toggle("hidden");
};
input.addEventListener("click", toggleMenu);
// close menu
const closeMenu = (event) => {
  const menu = document.getElementById("action__menu_1");
  menu.classList.add("hidden");
};
document.body.addEventListener("mouseup", closeMenu);
// dark mode
const darkModeToggle = document.getElementById("dark__mode__toggle");
const darkModeToggleHandler = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
darkModeToggle.addEventListener("change", darkModeToggleHandler);
// table row color
const table = document.querySelector("div.main__table__wrapper");
table.addEventListener("click", function (e) {
  if (e.target.checked == true) {
    e.target.parentElement.parentElement.classList.add("table__check");
  } else {
    e.target.parentElement.parentElement.classList.remove("table__check");
  }
});
// table row filter
const checkBoxIcon = document.querySelector("img.checkbox__icon");
checkBoxIcon.addEventListener("click", function () {
  const tableRow = document.querySelectorAll("tr.table__row");
  for (let i = 0; i < tableRow.length; i++) {
    if (!tableRow[i].classList.contains("table__check")) {
      tableRow[i].classList.toggle("table__check--noshow");
    }
  }
});
