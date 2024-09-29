import "./style.css";

const $registerForm = document.getElementById('register-form');

$registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData($registerForm);

    const entries = Object.fromEntries(formData.entries());

    console.log(entries);
    
    try {
        const response = await fetch('http://localhost:4321/auth/sign-up', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entries),
            credentials: "include"
        });
        if(response.ok) {
            window.location.href = "/pages/login.html"
        } else {
            const error = await response.json()
            alert (`Error: ${error.message}`)
        }
    } catch (error) {
        console.error('Error de conexión:', error)
        alert('No se pudo conectar al servidor. Por favor, intentelo de nuevo más tarde.')
    }
})
