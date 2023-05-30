<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        
        th, td {
            text-align: left;
            padding: 8px;
            border: 1px solid black;
        }
        
        th {
            background-color: #dddddd;
        }
    </style>
</head>
<body>
 
<?php
// Conexión a la base de datos
$servername = "nombre_servidor";
$username = "nombre_usuario";
$password = "contraseña";
$dbname = "nombre_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta a la base de datos
$sql = "SELECT columna1, columna2, columna3 FROM tabla";
$result = $conn->query($sql);

// Verificar si hay resultados
if ($result->num_rows > 0) {
    // Mostrar los datos en una tabla
    echo "<table>";
    echo "<tr><th>Columna 1</th><th>Columna 2</th><th>Columna 3</th></tr>";
    
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["columna1"] . "</td>";
        echo "<td>" . $row["columna2"] . "</td>";
        echo "<td>" . $row["columna3"] . "</td>";
        echo "</tr>";
    }
    
    echo "</table>";
} else {
    echo "No se encontraron resultados.";
}

// Cerrar la conexión
$conn->close();
?>
 
</body>
</html>
