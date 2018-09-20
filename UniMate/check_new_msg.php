<?php
session_start();
include "connect_db.php";
$response = array();
$nome = $_SESSION['nome'];

$sql = "SELECT COUNT(*) FROM Messaggi WHERE destinatario = '$nome' AND visualizzato IS NULL";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$row = mysqli_fetch_array($result);
 echo $row[0];

mysqli_close($con);
?>