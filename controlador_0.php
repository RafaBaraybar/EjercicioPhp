
<?php
//http://localhost/ejemplos_php/controlador/controlador_0.php?
//nombre=gabriel
if (isset($_GET['nom']) && isset($_GET['edad'])) {    
    
    $nombre = $_GET['nom'];
    $edad   = $_GET['edad'];
    if($edad>=18){
        echo "¡Usted es mayor de edad ";
    }
    else {
        echo "¡Usted es menor de edad, ";
    }

    echo "¡Hola, " . htmlspecialchars($nombre) . "! Bienvenido a nuestra página web.";
    echo "¡Tu edad es " . htmlspecialchars($edad) . "! años"; 
} else {
    
    echo "Por favor, ingrese su nombre en la URL.";
}
?>