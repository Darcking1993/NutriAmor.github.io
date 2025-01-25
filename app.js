document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  const loginForm = document.querySelector(".login");
  const registerForm = document.querySelector(".register");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      loginForm.classList.toggle("active");
      registerForm.classList.toggle("active");
    });
  });
});