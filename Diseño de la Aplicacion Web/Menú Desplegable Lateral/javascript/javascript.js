// Función para abrir el menú lateral
function openNav() {
    document.querySelector(".sidenav").style.left = "0";
    document.querySelector(".main").style.marginLeft = "250px";
}

// Función para cerrar el menú lateral
function closeNav() {
    document.querySelector(".sidenav").style.left = "-250px";
    document.querySelector(".main").style.marginLeft = "0";
}

// Función para mostrar/ocultar el menú desplegable
function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Agregar eventos a los elementos
document.querySelector(".dropbtn").addEventListener("click", toggleDropdown);



