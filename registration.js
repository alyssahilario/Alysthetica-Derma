document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const genderButtons = document.querySelectorAll(".gender-buttons button");
    let selectedGender = ""; 

    genderButtons.forEach(button => {
      button.addEventListener("click", function() {
        genderButtons.forEach(btn => btn.classList.remove("active"));
        
        this.classList.add("active");
  
        selectedGender = this.textContent;
      });
    });
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const firstName = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const password = form.querySelector('input[type="password"]').value;
  
      localStorage.setItem("registeredFirstName", firstName);
      localStorage.setItem("registeredEmail", email);
      localStorage.setItem("registeredPassword", password);
      localStorage.setItem("registeredGender", selectedGender);
  
      window.location.href = "login.html";
    });
  });
  