// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cargarRegistrosButton = document.getElementById("cargarRegistros");
    const registrosContainer = document.getElementById("registrosContainer");
    const searchInput = document.getElementById("searchInput");

    cargarRegistrosButton.addEventListener("click", cargarRegistros);

    // Función para cargar registros (simulación)
    function cargarRegistros() {
        // Aquí puedes cargar tus registros de incidentes desde una fuente de datos
        // y mostrarlos en el registrosContainer.
        // Por ahora, simularemos algunos registros de ejemplo.
        const registrosEjemplo = [
            "Incidente 1: Descripción del incidente 1",
            "Incidente 2: Descripción del incidente 2",
            "Incidente 3: Descripción del incidente 3",
            // ... Agrega más registros aquí
        ];

        // Limpia el contenido anterior
        registrosContainer.innerHTML = "";

        // Filtra los registros según la búsqueda
        const searchTerm = searchInput.value.toLowerCase();
        const registrosFiltrados = registrosEjemplo.filter(registro => registro.toLowerCase().includes(searchTerm));

        // Muestra los registros en el contenedor
        if (registrosFiltrados.length > 0) {
            registrosFiltrados.forEach(registro => {
                const p = document.createElement("p");
                p.textContent = registro;
                registrosContainer.appendChild(p);
            });
        } else {
            const mensaje = document.createElement("p");
            mensaje.textContent = "No se encontraron incidentes.";
            registrosContainer.appendChild(mensaje);
        }
    }
});
