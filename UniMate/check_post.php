<?php
session_start();
include "connect_db.php";
$response = array();
$nome = $_SESSION['nome'];

$sql = "SELECT * FROM Log WHERE user = '$nome' AND tipo != 'send_msg' ORDER BY stamp DESC";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

while($row = mysqli_fetch_array($result)){
	$tipo = $row[2];
	$stamp = $row[6];
	$id_action = "";
	$info = "";
	
	if($tipo == "create_event" || $tipo == "part_event" || $tipo == "voto_event"){
		$id_action = $row[4];
			
		$sql = "SELECT nome, categoria FROM Eventi WHERE id = '$id_action' ";
		$con = mysqli_connect($host, $user, $password, $db);
		$result_action = mysqli_query($con, $sql);
		$row_action = mysqli_fetch_array($result_action);
		
		$info = "<b>" . $row_action[0] . "</b> (" . $row_action[1] . ")";		
	}
	else{
		$id_action = $row[3];
		
		$sql = "SELECT user2 FROM Amici WHERE id = '$id_action' ";
		$con = mysqli_connect($host, $user, $password, $db);
		$result_amico= mysqli_query($con, $sql);
		$amico = mysqli_fetch_array($result_amico);
		
		$sql = "SELECT nome, cognome, categoria FROM Utenti WHERE matricola = '$amico[0]' OR piva = '$amico[0]' ";
		$con = mysqli_connect($host, $user, $password, $db);
		$result_action = mysqli_query($con, $sql);
		$row_action = mysqli_fetch_array($result_action);
		
		$info = "<b>" . $row_action[0] . " " .  $row_action[1] . "</b> (" . $row_action[2] . ")";
	}
  
	array_push($response, array("info"=>$info , "stamp"=>$stamp, "tipo"=>$tipo));
}
	


echo json_encode(array("server_response"=> $response));

mysqli_close($con);
?>