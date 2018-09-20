<?php
session_start();

$nome = $_SESSION['nome'];
$event_id = $_SESSION['evento'];

include "connect_db.php";

$sql = "DELETE FROM Log WHERE user = '$nome' AND tipo = 'part_event' AND id_evento = '$event_id' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

?>