<?php
session_start();
include "connect_db.php";
$user = $_POST['user'];

$_SESSION['friend'] = $user;

$sql = "SELECT Nome, Cognome FROM Utenti WHERE matricola = '$user' OR piva = '$user'";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$row = mysqli_fetch_array($result);

$string = $row[0] . " " . $row[1];

echo $string;

mysqli_close($con);
?>