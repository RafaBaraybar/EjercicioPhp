// Función para cerrar sesión
function logout() {
    // Aquí puedes agregar la lógica de cierre de sesión, como eliminar las cookies o limpiar la sesión.
    alert("Sesión cerrada. Debes volver a iniciar sesión para acceder.");
    window.location.href = "login.html"; // Redirigir a la página de inicio de sesión
}

// Función para eliminar la cuenta
function deleteAccount() {
    // Aquí puedes agregar la lógica para eliminar la cuenta del usuario.
    var confirmDelete = confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.");

    if (confirmDelete) {
        // Aquí puedes realizar la eliminación de la cuenta, como enviar una solicitud al servidor.
        alert("Tu cuenta ha sido eliminada.");
        window.location.href = "signup.html"; // Redirigir a la página de registro
    }
}

// Asociar las funciones a los botones
document.getElementById("logout-btn").addEventListener("click", logout);
document.getElementById("delete-account-btn").addEventListener("click", deleteAccount);
