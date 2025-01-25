// Manejo del formulario de registro
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar recargar la página
  
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
  
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
      if (data.success) {
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        // Opcional: redirigir a la página de inicio de sesión
        window.location.href = '/home.html';
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Hubo un problema al registrar. Intenta de nuevo.');
    }
  });
  
  // Manejo del formulario de inicio de sesión
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar recargar la página
  
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (data.success) {
        alert('Inicio de sesión exitoso. Bienvenido.');
        // Opcional: redirigir a la página principal de la aplicación
        window.location.href = '/dashboard.html';
      } else {
        alert('Credenciales inválidas. Verifica tu correo y contraseña.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Hubo un problema al iniciar sesión. Intenta de nuevo.');
    }
  });