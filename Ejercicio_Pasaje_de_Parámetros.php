<?php
// Obtén los parámetros de la solicitud
$parametro1 = $_GET['parametro1'];
$parametro2 = $_GET['parametro2'];

// Realiza las acciones necesarias con los parámetros recibidos
// Por ejemplo, puedes imprimir los valores en la pantalla
echo "Parámetro 1: " . $parametro1 . "<br>";
echo "Parámetro 2: " . $parametro2 . "<br>"; 
    $resultado = $parametro1 + $parametro2;
    echo "El resultado de la suma es:". $resultado;

?>
