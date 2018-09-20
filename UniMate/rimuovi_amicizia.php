<?php
session_start();
$nome = $_SESSION['nome'];
$friend = $_SESSION['friend'];
include "connect_db.php";
$sql = "DELETE FROM Amici WHERE user1 = '$nome' AND user2 = '$friend' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);$sql = "DELETE FROM Log WHERE user = '$nome' AND tipo = 'amicizia' ";$con = mysqli_connect($host, $user, $password, $db);$result = mysqli_query($con, $sql);

?>