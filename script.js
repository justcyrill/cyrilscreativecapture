// Elements
const form = document.getElementById("checkout-form");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closepopup");

// Submit Form
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop real submission
    popup.classList.add("open");
  });
}

// Close Popup
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    popup.classList.remove("open");
  });
}