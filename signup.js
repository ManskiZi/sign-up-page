// Get references to HTML elements
const signUpButton = document.querySelector("button");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");

// Function to validate the sign-up form
function validateSignUp() {
  // Get the entered email and password
  const emailText = email.value;
  const isNotEmpty = emailText !== "";
  const passwordText = password.value;

  // Validate the password using a regular expression pattern
  const passwordIsGood = validatePassword(passwordText);

  // Update the message based on the validation results
  if (isNotEmpty && passwordIsGood) {
    // Display a success message in green
    message.style.color = "green";
    message.innerText = "Welcome!";
  } else {
    // Display an error message in red
    message.style.color = "red";
    message.innerText = "Email missing or incorrect password";
  }
}

// Add an event listener to the sign-up button to trigger validation
signUpButton.addEventListener("click", validateSignUp);

// Function to validate the password using a regular expression pattern
function validatePassword(pw) {
  const pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return pattern.test(pw);
}
