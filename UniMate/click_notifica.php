<?php
session_start();
$nome = $_SESSION['nome'];
$id = $_POST['id'];

include "connect_db.php";

$sql = "SELECT * FROM Notifiche WHERE id = '$id' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$row = mysqli_fetch_array($result);
				
$id_amicizia = $row[5];
$id_evento = $row[4];

if($id_evento == null){	
	$sql = "SELECT user1 FROM Amici WHERE id = '$id_amicizia'";
	$con = mysqli_connect($host, $user, $password, $db);
	$result_amici = mysqli_query($con, $sql);
	
	$row_amici = mysqli_fetch_array($result_amici);

	$user = $row_amici[0];
	
	$_SESSION['friend'] = $user;
	
	echo "amicizia";
}
else{	
	$_SESSION['evento'] = $id_evento;
	
	echo "evento";
}

mysqli_close($con);

?>