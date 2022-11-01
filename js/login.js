// Get the DOM elements
const showPasswordBtn = document.querySelector(
  ".access-form .show-password-btn"
);
const passwordInput = document.querySelector(
  ".access-form input[type='password']"
);

// Change type of password input element
showPasswordBtn.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type");
  if (type === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});
