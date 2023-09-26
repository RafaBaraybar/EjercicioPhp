const incidentForm = document.getElementById('incident-form');
const incidentList = document.getElementById('incident-list');

incidentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('incident-name').value;
    const date = document.getElementById('incident-date').value;
    const severity = document.getElementById('incident-severity').value;
    const description = document.getElementById('incident-description').value;

    const incidentItem = document.createElement('div');
    incidentItem.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Nivel de Gravedad:</strong> ${severity}</p>
        <p><strong>Descripción:</strong> ${description}</p>
        <button onclick="deleteIncident(this)">Eliminar</button>
        <button onclick="downloadPDF()">Descargar PDF</button>
    `;

    incidentList.appendChild(incidentItem);
    incidentForm.reset();
});

function deleteIncident(button) {
    const incidentItem = button.parentNode;
    incidentList.removeChild(incidentItem);
}

function downloadPDF() {
    // Lógica para generar y descargar un PDF aquí
    alert('Descargar PDF no implementado en este ejemplo');
}
