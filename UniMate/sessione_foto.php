<?php
session_start();
$foto = $_POST['num'];

$_SESSION['foto'] = $foto;
echo $foto;
?>