<?php
session_start();
$nome = $_SESSION['nome'];
$nome_foto = $_SESSION['foto'];
include "connect_db.php";
$foto = $nome_foto . ".jpeg";


$sql = "UPDATE Utenti SET foto = '$foto' WHERE matricola = '$nome' OR piva = '$nome'";

$con = mysqli_connect($host, $user, $password, $db);

$result = mysqli_query($con, $sql);
?>
