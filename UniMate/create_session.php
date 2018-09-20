<?php
session_start();
$json = $_POST['json'];

$_SESSION['ricerca'] = $json;
echo "Sessione Ricerca Creata."
?>