document.addEventListener('DOMContentLoaded', function () {
    const incidentForm = document.getElementById('incident-form');
    const incidentList = document.getElementById('incident-list');

    incidentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('incident-name').value;
        const date = document.getElementById('incident-date').value;
        const severity = document.getElementById('incident-severity').value;
        const report = document.getElementById('incident-report').value;

        // Aquí puedes agregar código para guardar los datos en una estructura de datos o en una base de datos.

        // Luego, puedes mostrar el incidente registrado en la lista.
        const incidentItem = document.createElement('div');
        incidentItem.className = 'incident-item';
        incidentItem.innerHTML = `
            <h3>${name}</h3>
            <p>Fecha: ${date}</p>
            <p>Nivel de Gravedad: ${severity}</p>
            <p>Informe: ${report}</p>
            <button class="edit-button">Editar</button>
            <button class="delete-button">Eliminar</button>
            <button class="pdf-button">Descargar PDF</button>
        `;

        incidentList.appendChild(incidentItem);

        // Limpia el formulario
        incidentForm.reset();
    });

    // Puedes agregar más código aquí para manejar las acciones de editar, eliminar y descargar PDF.
});
