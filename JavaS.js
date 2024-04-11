
  function validatePassword(event) {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("errorMessage");
    let confirmPwd = document.getElementById("confirmPassword")

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords don't match!";
      errorMessage.style.color = "red";
      confirmPwd.type = 'text'
      confirmPwd.value = '';
      confirmPwd.type = 'password'
      passwordInput.focus();
      return false; // Prevent form submission if passwords don't match
    } else {
      errorMessage.innerHTML = ""; // Clear any previous error message
      return true;
    }
  }

  // Attach the validation function to the form's submit event
  document.getElementById("myForm").addEventListener("submit", validatePassword);
