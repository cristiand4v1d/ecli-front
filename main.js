document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        const loginData = {
            username: username,
            password: password
        };

        // Enviar datos al API de inicio de sesión
        fetch('https://ecli.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Suponiendo que la respuesta contiene la URL del perfil del usuario
                    console.log(data.token)
                    localStorage.setItem('token', JSON.stringify(data.token));

                    window.location.href = 'profile.html';
                } else {
                    console.log('Inicio de sesión fallido'); // Manejar inicio de sesión fallido
                }


                // Aquí puedes manejar la respuesta del API después del inicio de sesión
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;
        const nombre = document.getElementById("register-nombre").value;
        const genero = document.getElementById("register-genero").value;
        const edad = document.getElementById("register-edad").value;
        const busca = document.getElementById("register-busca").value;

        const registerData = {
            nombre: nombre,
            genero: genero,
            edad: edad,
            estado: "activo",
            password: password,
            username: username,
            busca: busca
        };

        // Enviar datos al API de registro
        fetch('https://ecli.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })
            .then(response => response.json())
            .then(data => {
                // Aquí puedes manejar la respuesta del API después del registro
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});