document.addEventListener("DOMContentLoaded", () => {
    const URL = 'https://jsonplaceholder.typicode.com/users';

    // Obtener el formulario
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        // Crear un objeto con los datos
        const data = {
            Nombre: nombre,
            Apellido: apellido,
            FechaNacimiento: fechaNacimiento
        };

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Respuesta del servidor:", responseData);
            } else {
                console.error("Error en la solicitud:", response.statusText);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    });
});