<!DOCTYPE html>
<html>
    <style>
        table, th, td {
            border: 1px solid black;
        }
    </style>
    <body>
        <h1>Tabla de Estudiantes</h1>



        <?php
        include '../modelo/Estudiante.php';


        $estudiante = Estudiante::obtenerEstudiante();

        echo "<table>";
        echo "<tr>";
        echo "<th>Id</th>";
        echo "<th>Nombre</th>";
        echo "<th>Apellido</th>";
        echo "<th>Fecha Nac</th>";
        echo "<th>Mail</th>";
        echo "<th>Accion 1</th>";
        echo "<th>Accion 2</th>";
        echo "</tr>";


        for ($i = 0;$i < count($estudiante); $i++) {
            echo "<tr>";
            echo "<td>"  . $estudiante[$i]->getId()  . "</td>";
            echo "<td>"  . $estudiante[$i]->getNombre()  . "</td>";
            echo "<td>"  . $estudiante[$i]->getApellido()  . "</td>";
            echo "<td>"  . $estudiante[$i]->getFechaNac()  . "</td>"; 
            echo "<td>"  . $estudiante[$i]->getMail()  . "</td>";


            echo "<td>  <a href=\"controlador_mant_estudiante_editar.php\">Editar</a>  </td>";
            echo "<td>  <a href=\"controlador_mant_estudiante_borrar.php?id=".$estudiante[$i]->getId()."\">Eliminar</a>  </td>";
            echo "<td>  </td>";

            echo "</tr>";
            
        }

        echo "</table>";
        ?>
    </body>
</html>