// Nav variables

let toggleButton = document.getElementById("toggle-btn-id");
let navbarLinks = document.getElementById("navbar-links-id");

// Slider Variables

let radioBtn = document.querySelectorAll("[id=rb]");
let sliderId = document.getElementById("sliderId");

// Slider buttons changing style

sliderId.addEventListener("mousedown", (e) => {
  switch (sliderId.style.left) {
    case "0%":
      sliderId.style.left = "-100%";
      radioBtn[1].checked = true;
      break;
    case "-100%":
      sliderId.style.left = "-200%";
      radioBtn[2].checked = true;
      break;
    case "-200%":
      sliderId.style.left = "0%";
      radioBtn[0].checked = true;
      break;
    default:
      sliderId.style.left = "-100%";
  }
});

for (i = 0; i < radioBtn.length; i++) {
  radioBtn[i].onclick = function () {
    console.log(this.value);
    let newValue = this.value - 1;
    if (newValue == 0) {
      sliderId.style.left = "0%";
      radioBtn[0].checked = true;
    } else {
      sliderId.style.left = "-" + newValue + "00%";
    }
  };
}

// Nav events

toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});
