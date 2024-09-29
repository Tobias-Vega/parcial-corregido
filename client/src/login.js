import './style.css';

const $form = document.getElementById('login-form');

$form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData($form);
    const entries = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('http://localhost:4321/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entries),
        credentials: "include"
      })

      if (response.ok) {
        const data = await response.json();
        window.location.href = "/index.html"
      } else {
        const error = await response.json()
        alert(`Error: ${error.message}`)
      }
    } catch (error) {
    console.error('Error de conexión:', error);
    alert('No se pudo conectar al servidor')
  }
});
