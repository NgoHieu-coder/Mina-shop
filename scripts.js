const submitEmailBtn = document.getElementById("submitEmail");
const emailInput = document.getElementById("email");
const emailAlert = document.getElementById("alertEmail");
const menu = document.getElementById("nav__menu");
const openButton = document.getElementById("navToggle");
const menuIcon = document.querySelector("#navToggle i");
const dropdown = document.getElementById("dropdown");
const subNavList = document.getElementById("subNavList");
const subnav = document.querySelector(".subnav");
const dropdownItems = document.querySelector(".dropdownItem");
console.log(subnav);
openButton.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  if (menu.style.display === "block") {
    menuIcon.classList.remove("fa-bars", "nav__burger");
    menuIcon.classList.add("fa-xmark", "nav__close");
  } else {
    menuIcon.classList.add("fa-bars", "nav__burger");
    menuIcon.classList.remove("fa-xmark", "nav__close");
  }
});

submitEmailBtn.addEventListener("click", function () {
  const email = emailInput.value;
  if (email.length === 0) {
    submitEmailBtn.style.transform = "translateY(10px)";
    emailAlert.style.opacity = "1";
  }
});

emailInput.addEventListener("input", function (e) {
  const email = e.target.value;
  if (email.length > 0) {
    submitEmailBtn.style.transform = "translateY(0)";
    emailAlert.style.opacity = "0";
  }
});

dropdownItems.addEventListener("click", function () {
  if (subnav.style.maxHeight === "0px" || subnav.style.maxHeight === "") {
    subnav.style.maxHeight = "1000px";
    dropdown.style.transform = "rotate(180deg)";
    subNavList.style.borderLeft = "3px solid rgb(111, 23, 135";
  } else {
    subnav.style.maxHeight = "0px";
    dropdown.style.transform = "rotate(0deg)";
    subNavList.style.borderLeft = "none";
  }
  console.log(subnav.style.maxHeight);
});
