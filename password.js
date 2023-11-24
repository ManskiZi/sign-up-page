// Get references to the password input field and error paragraph
const txtPassword = document.getElementById("password");
const pPasswordError = document.getElementById("pwError");

// Function to handle password input changes
function passwordChanged() {
  // Get the entered password
  const password = txtPassword.value;

  // Validate the password
  const passwordIsGood = validatePassword(password);

  // Update the error message based on password validity
  if (passwordIsGood) {
    pPasswordError.innerText = "Password is valid.";
  } else {
    pPasswordError.innerText =
      "Minimum eight characters, at least one letter, one number, and one special character.";
  }
}

// Add an event listener to the password input field to detect input changes
txtPassword.addEventListener("input", passwordChanged);

// Function to validate the password using a regular expression pattern
function validatePassword(pw) {
  const pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return pattern.test(pw);
}
