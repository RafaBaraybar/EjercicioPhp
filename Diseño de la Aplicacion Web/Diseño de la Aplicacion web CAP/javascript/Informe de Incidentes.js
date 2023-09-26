// Supongamos que tienes una lista de incidentes en un arreglo 'incidentes'.
// Cada incidente es un objeto con propiedades 'nombre', 'fecha', y otros detalles.

const incidentes = [
    { nombre: "Robo", fecha: "2023-09-01", detalles: "Detalles del incidente 1" },
    { nombre: "Cumpleaño del Rafa el 1º", fecha: "2023-10-19", detalles: "Festejaron su cumpleaño en la clase 2" },
    { nombre: "Vandalismo", fecha: "2018-12-05", detalles: "Detalles del incidente 3" },
    { nombre: "Violacion", fecha: "2010-09-05", detalles: "Detalles del incidente 4" },
    { nombre: "Desacato", fecha: "2017-03-15", detalles: "Detalles del incidente 5" },
    { nombre: "Distorsion en clase", fecha: "2021-05-05", detalles: "Detalles del incidente 6" },

    // Agrega más incidentes aquí
];

const searchForm = document.getElementById("search-form");
const resultsDiv = document.getElementById("results");
const downloadButton = document.getElementById("download-button");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const searchName = document.getElementById("incident-name").value;
    const searchDate = document.getElementById("incident-date").value;

    const filteredIncidents = incidentes.filter(incident => {
        return incident.nombre.toLowerCase().includes(searchName.toLowerCase()) &&
               incident.fecha === searchDate;
    });

    displayResults(filteredIncidents);
});

function displayResults(incidents) {
    let html = "<h2>Resultados:</h2>";

    if (incidents.length === 0) {
        html += "<p>No se encontraron incidentes.</p>";
    } else {
        incidents.forEach(incident => {
            html += `<p><strong>Nombre:</strong> ${incident.nombre}</p>`;
            html += `<p><strong>Fecha:</strong> ${incident.fecha}</p>`;
            html += `<p><strong>Detalles:</strong> ${incident.detalles}</p>`;
            html += "<hr>";
        });
    }

    resultsDiv.innerHTML = html;
}

// Agrega lógica para generar el informe PDF aquí usando una librería como jsPDF.
// Ejemplo:
downloadButton.addEventListener("click", function () {
    const doc = new jsPDF();
    doc.text("Informe de Incidentes", 10, 10);
    // Agrega contenido al informe PDF aquí
    doc.save("Informe_Incidentes.pdf");
});
