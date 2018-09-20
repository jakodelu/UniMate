<?php
session_start();
include "connect_db.php";

$nome = $_SESSION['nome'];
$receiver = $_SESSION['friend'];
$msg = $_POST['msg'];

$sql = "INSERT INTO Messaggi (mittente, destinatario, testo) VALUES ('$nome', '$receiver', '$msg')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$sql = "SELECT id FROM Messaggi WHERE mittente = '$nome' AND  destinatario = '$receiver' AND  testo = '$msg' ORDER BY stamp DESC";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$row = mysqli_fetch_array($result);
$id_msg = $row[0];

$sql = "INSERT INTO Log (user, tipo, id_messaggio) VALUES ('$nome', 'send_msg', '$id_msg')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

mysqli_close($con);
?>