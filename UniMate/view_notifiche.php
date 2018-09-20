<?php
session_start();
$nome = $_SESSION['nome'];

include "connect_db.php";

$sql = "SELECT * FROM Notifiche WHERE user = '$nome' AND visualizzato IS NULL ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

while($row = mysqli_fetch_array($result)){
				
	$id_notifica = $row[0];
	
	$sql = "UPDATE Notifiche SET visualizzato = 'si' WHERE id = '$id_notifica' ";
	$con = mysqli_connect($host, $user, $password, $db);
	$result_notifiche = mysqli_query($con, $sql);
	
}

mysqli_close($con);



?>