// Datos del Usuario (se puede remplazar con datos reales)
const usuario = {
    nombre: "Rafa",
    apellido: "Baraybar",
    cedula: "55296248",
    cargo: "Director",

};

// Funcion donde se puede actualizar los elementos HTML con los datos personal del usuario
function actualizarPerfil() {
    document.getElementById("nombre").textContent = usuario.nombre;
    document.getElementById("apellido").textContent = usuario.apellido;
    document.getElementById("cedula").textContent = "Cedula: " + usuario.cedula;
    document.getElementById("cargo").textContent = "Cargo: " + usuario.cargo;
    
}

// Boton editar datos personal del usuario
document.getElementById("editar-btn").addEventListener("click", function () {
    // Aca se puede agregar para editar los dastos personal del usuario
    alert("Editar datos personales");
});

// Se cargaran los datos del usuario al cargar la nueva pagina
actualizarPerfil();