// const numbersArray = [1, 2, 3, 4, 5]
// const number = 3

// if (numbersArray.includes(number)) {
//   console.log("The number is in the array.")
// }let usernameField = document.getElementById('username');


//  FORM VALIDATION
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerModal");
  const submitButton = form.querySelector(".btn-primary");

  submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default form submission

      let isValid = true;

      // Clear previous error messages
      document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));

      // Validation logic
      function showError(input, message) {
          const errorDiv = input.nextElementSibling;
          errorDiv.textContent = message;
          errorDiv.style.color = "red";
      }

      // First Name Validation
      const firstName = document.getElementById("firstname");
      const firstnamePattern = /^[a-zA-z]+$/; //allows only leters
      
      if (firstName.value.trim() === "") {
          showError(firstName, "First name is required.");
          isValid = false;
      }else if (!firstnamePattern.test(firstName.value.trim())) {
        showError(firstName, "invalid input");
        isValid = false;
      }

      // Last Name Validation
      const lastName = document.getElementById("lastname");
      const lastnamePattern = /^[a-zA-Z]+$/; //allows only letters

      if (lastName.value.trim() === "") {
          showError(lastName, "Last name is required.");
          isValid = false;
      }else if(!lastnamePattern.test(lastName.value.trim())){
        showError(lastName, "invalid input")
        isValid = false;
      }

      // Email Validation
      const email = document.getElementById("email");
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email.value.trim())) {
          showError(email, "Enter a valid email address.");
          isValid = false;
      }

      // Phone Number Validation
      const phone = document.getElementById("phone");
      const phonePattern = /^[0-9]{10,15}$/;
      if (!phonePattern.test(phone.value.trim())) {
          showError(phone, "Enter a valid phone number (10-15 digits).");
          isValid = false;
      }

      // Description Validation
      const info = document.getElementById("info");
      if (info.value.trim() === "") {
          showError(info, "Please provide a description.");
          isValid = false;
      }

      // If all fields are valid, allow form submission
      if (isValid) {
          alert("Form submitted successfully!");
      }
  });
});

    
   
     