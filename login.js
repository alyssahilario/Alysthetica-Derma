document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".login-box button");
    const firstnameInput = document.querySelector(".login-box input[type='text']");
    const passwordInput = document.querySelector(".login-box input[type='password']");
  
    loginButton.addEventListener("click", function() {
      const enteredFirstName = firstnameInput.value.trim();
      const enteredPassword = passwordInput.value.trim();
  
      const registeredFirstName = localStorage.getItem("registeredFirstName");
      const registeredPassword = localStorage.getItem("registeredPassword");
  
      if (enteredFirstName === registeredFirstName && enteredPassword === registeredPassword) {
        alert("Login Successful!");
      } else {
        alert("Invalid username or password. Please try again.");
      }

   /* I did not include the Sign up function for this Login Page */

    });
  });
  