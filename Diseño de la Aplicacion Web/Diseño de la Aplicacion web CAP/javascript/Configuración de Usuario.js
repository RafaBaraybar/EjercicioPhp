document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("user-settings-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Recoger los valores de los campos
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const birthdate = document.getElementById("birthdate").value;
        const role = document.getElementById("role").value;
        const profilePicture = document.getElementById("profile-picture").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Aquí puedes enviar los datos al servidor o hacer el procesamiento necesario
        // Por ahora, simplemente mostraremos los datos en la consola
        console.log("Nombre:", firstName);
        console.log("Apellido:", lastName);
        console.log("Fecha de Nacimiento:", birthdate);
        console.log("Rol:", role);
        console.log("Foto de Perfil:", profilePicture);
        console.log("Correo Electrónico:", email);
        console.log("Contraseña:", password);

        alert("Cambios guardados correctamente");
    });
});
