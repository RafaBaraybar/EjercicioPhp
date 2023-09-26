document.addEventListener("DOMContentLoaded", function() {
    // Simulación de datos de usuario (puedes reemplazar esto con datos reales desde tu backend)
    const usuario = {
        nombre: "Rafa",
        apellido: "Baraybar 1º",
        cargo: "Director"
    };

    // Actualizar la información del perfil en la página
    document.getElementById("nombreApellido").textContent = `${usuario.nombre} ${usuario.apellido}`;
    document.getElementById("cargo").textContent = usuario.cargo;
});
