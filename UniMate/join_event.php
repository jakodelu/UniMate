<?php
session_start();

$nome = $_SESSION['nome'];
$event_id = $_SESSION['evento'];
$categoria = "amicizia";

include "connect_db.php";

$sql = "SELECT proprietario FROM Eventi WHERE id = '$event_id' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);

$proprietario_evento = $row[0];

$sql = "INSERT INTO Notifiche (user, categoria, id_evento) VALUES ('$proprietario_evento', 'part_event', '$event_id')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$sql = "INSERT INTO Log (user, tipo, id_evento) VALUES ('$nome', 'part_event', '$event_id')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

?>