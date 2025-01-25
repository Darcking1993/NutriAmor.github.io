document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  const loginForm = document.querySelector(".form-container.login");
  const registerForm = document.querySelector(".form-container.register");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (loginForm.classList.contains("active")) {
        // Si el formulario de inicio de sesión está activo, mostramos el de registro
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
      } else {
        // Si el formulario de registro está activo, mostramos el de inicio de sesión
        registerForm.classList.remove("active");
        loginForm.classList.add("active");
      }
    });
  });
});
