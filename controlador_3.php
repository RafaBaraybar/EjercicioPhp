<?php
session_start();
$_SESSION["nombre"] = "Rafael";
echo $_SESSION["nombre"];
echo "<br>" . "id de session" . session_id();

?>