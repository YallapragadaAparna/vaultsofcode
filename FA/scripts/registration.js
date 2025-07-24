document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("Register", function (event) {
    event.preventDefault(); // Prevent page reload
    alert("Registration successful");
    form.reset(); // Optional: reset the form after successful registration
  });
});

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strength = document.getElementById("strengthIndicator");

  let strengthValue = "Weak";
  let color = "red";

  if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[\W]/.test(password)) {
    strengthValue = "Strong";
    color = "green";
  } else if (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
    strengthValue = "Medium";
    color = "orange";
  }

  strength.innerText = strengthValue;
  strength.style.color = color;
}
