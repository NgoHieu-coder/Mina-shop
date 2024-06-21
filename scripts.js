const submitEmailBtn = document.getElementById("submitEmail");
const emailInput = document.getElementById("email");
const emailAlert = document.getElementById("alertEmail");
const menu = document.getElementById("nav__menu");
const openButton = document.getElementById("navToggle");
const menuIcon = document.querySelector("#navToggle i");
console.log(menu);
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
