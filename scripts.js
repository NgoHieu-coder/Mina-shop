const submitEmailBtn = document.getElementById("submitEmail");
const emailInput = document.getElementById("email");
const menu = document.getElementById("nav__menu");
const openButton = document.getElementById("navToggle");
const menuIcon = document.querySelector("#navToggle i");
const dropdown = document.getElementById("dropdown");
const subNavList = document.getElementById("subNavList");
const subnav = document.querySelector(".subnav");
const cartBox = document.querySelector(".cartBox");
const navCart = document.querySelector(".navCart");
const cartIcon = document.querySelector(".nav__shop");
const closeIcon = document.querySelector(".fa-xmark");
const overlay = document.querySelector(".cartBox-overlay");
console.log(subNavList);

//EMAIL INPUT
if (emailInput) {
  submitEmailBtn.addEventListener("click", function () {
    const email = emailInput.value;
    if (email.length === 0) {
      emailInput.placeholder = "Email is required!";
      alert("Email is required!");
    }
  });

  emailInput.addEventListener("input", function (e) {
    const email = e.target.value;
    if (email.length > 0) {
      emailInput.placeholder = "";
    }
  });
}

// MENU BAR
openButton.addEventListener("click", () => {
  cartBox.classList.remove("active");
  overlay.style.display = "none";
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  if (menu.style.display === "block") {
    menuIcon.classList.remove("fa-bars", "nav__burger");
    menuIcon.classList.add("fa-xmark", "nav__close");
  } else {
    menuIcon.classList.add("fa-bars", "nav__burger");
    menuIcon.classList.remove("fa-xmark", "nav__close");
  }
});

// NAV MENU RESPONSIVE
if (window.innerWidth < 730) {
  // SUBMENU
  subNavList.addEventListener("click", function () {
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

  // CART BOX
  cartIcon.onclick = () => {
    cartBox.classList.toggle("active");
    menu.style.display = "none";
    menuIcon.classList.add("fa-bars", "nav__burger");
    menuIcon.classList.remove("fa-xmark", "nav__close");
    if (cartBox.classList.contains("active")) {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  };
}

// CART BOX
navCart.onclick = () => {
  cartBox.classList.toggle("active");
  if (cartBox.classList.contains("active")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
};

closeIcon.onclick = () => {
  cartBox.classList.remove("active");
  overlay.style.display = "none";
};

window.onscroll = () => {
  cartBox.classList.remove("active");
  overlay.style.display = "none";
};

//ANIMATION SCROLL DOWN
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 20;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//FORM REGISTER - Page Contact
const usernameEle = document.getElementById("username");
const emailEle = document.getElementById("email-user");
const messageEle = document.getElementById("message");

const SubmitContact = document.getElementById("Submit-contact");
const inputEles = document.querySelectorAll(".Input");

SubmitContact.addEventListener("click", function () {
  Array.from(inputEles).map((ele) => ele.classList.remove("success", "error"));
  let isValid = checkValidate();

  if (isValid) {
    alert("Successfully");
  }
});

function checkValidate() {
  let usernameValue = usernameEle.value;
  let emailValue = emailEle.value;
  let messageValue = messageEle.value;

  let isCheck = true;

  if (usernameValue == "") {
    setError(usernameEle, "This field is required");
    isCheck = false;
  } else {
    setSuccess(usernameEle);
  }

  if (emailValue == "") {
    setError(emailEle, "This field is required");
    isCheck = false;
  } else if (!isEmail(emailValue)) {
    setError(emailEle, "Please enter a valid email address");
    isCheck = false;
  } else {
    setSuccess(emailEle);
  }

  if (messageValue == "") {
    setError(messageEle, "This field is required");
    isCheck = false;
  } else {
    setSuccess(messageEle);
  }

  return isCheck;
}

function setSuccess(ele) {
  ele.parentNode.classList.add("success");
}

function setError(ele, message) {
  let parentEle = ele.parentNode;
  parentEle.classList.add("error");
  parentEle.querySelector("small").innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
