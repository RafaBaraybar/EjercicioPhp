const incidentForm = document.getElementById('incident-form');
const incidentTable = document.getElementById('incident-table');

incidentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('incident-name').value;
    const date = document.getElementById('incident-date').value;
    const severity = document.getElementById('incident-severity').value;

    // Crear una nueva fila en la tabla
    const newRow = incidentTable.querySelector('tbody').insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${date}</td>
        <td>${severity}</td>
        <td>
            <button class="btn-edit" onclick="editIncident(this)">Editar</button>
            <button class="btn-delete" onclick="deleteIncident(this)">Eliminar</button>
        </td>
    `;

    // Limpiar el formulario
    incidentForm.reset();
});

function editIncident(button) {
    const row = button.closest('tr');
    const name = row.cells[0].textContent;
    const date = row.cells[1].textContent;
    const severity = row.cells[2].textContent;

    document.getElementById('incident-name').value = name;
    document.getElementById('incident-date').value = date;
    document.getElementById('incident-severity').value = severity;

    // Eliminar la fila editada
    row.remove();
}

function deleteIncident(button) {
    const row = button.closest('tr');
    row.remove();
}
