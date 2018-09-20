<?php
session_start();
include "connect_db.php";
$response = array();
$nome = $_SESSION['nome'];

$sql = "SELECT * FROM Messaggi WHERE mittente = '$nome' OR destinatario = '$nome' ORDER BY stamp DESC";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

while($row = mysqli_fetch_array($result)){
	if($row[1] == $nome){
		$tipo = "inviato";
		$user = $row[2];
	}
	else{
		$tipo = "ricevuto";
		$user = $row[1];
	}
	
	if($row[4] == null && $tipo == "ricevuto"){
		$sql = "UPDATE Messaggi SET visualizzato = 'si' WHERE id = '$row[0]' ";
		$con = mysqli_connect($host, $user, $password, $db);
		$result_update = mysqli_query($con, $sql);
	}
	
	$sql = "SELECT foto, nome, cognome FROM Utenti WHERE matricola = '$user' OR piva = '$user'";
	$con = mysqli_connect($host, $user, $password, $db);
	$result_foto = mysqli_query($con, $sql);
	$row_foto = mysqli_fetch_array($result_foto);
	
	$nome_user = $row_foto[1] . " " . $row_foto[2];
  
	array_push($response, array("id"=>$row[0], "tipo"=>$tipo, "user"=>$user, "nome"=>$nome_user, "msg"=>$row[3], "foto"=>$row_foto[0], "stamp"=>$row[5]));
}
	


echo json_encode(array("server_response"=> $response));

mysqli_close($con);
?>