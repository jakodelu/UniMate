<?php
session_start();
$nome = $_SESSION['nome'];
$friend = $_SESSION['friend'];
$categoria = "amicizia";

include "connect_db.php";

$sql = "INSERT INTO Amici (user1, user2) VALUES ('$nome', '$friend')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$sql = "SELECT id FROM Amici WHERE user1 = '$nome' AND user2 = '$friend' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$row = mysqli_fetch_array($result);
$id_amicizia = $row[0];

$sql = "INSERT INTO Notifiche (user, categoria, id_amicizia) VALUES ('$friend', '$categoria', '$id_amicizia')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);$sql = "INSERT INTO Log (user, tipo, id_amicizia) VALUES ('$nome', 'amicizia', '$id_amicizia')";$con = mysqli_connect($host, $user, $password, $db);$result = mysqli_query($con, $sql);



?>