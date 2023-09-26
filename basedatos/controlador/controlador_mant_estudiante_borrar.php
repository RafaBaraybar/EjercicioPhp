<?php
    include '../modelo/estudiante.php';


    if (isset($_GET['id'])){
        $id = $_GET['id'];

        Estudiante::borrarEstudiante($id);
        echo "se Borra el estudiante con id " .$id;

        echo "<td>  <a href=\"controlador_6.php\">Volver</a> </td>";


    }
?>    