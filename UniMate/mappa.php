<?php
session_start();
$nome = $_SESSION['nome'];
include "connect_db.php";

$sql = "SELECT * FROM Eventi";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);
$response = array();

while($row = mysqli_fetch_array($result))
{
	$id_evento = $row[0];
	$sql = "SELECT COUNT(*) FROM Log WHERE id_evento = '$id_evento' AND tipo = 'part_event' AND user = '$nome'";
	$con = mysqli_connect($host, $user, $password, $db);
	$result_log = mysqli_query($con, $sql);
	$row_log = mysqli_fetch_array($result_log);
	
	if($row_log[0] > 0 || $row[8] == $nome){
		$partecipa = "si";
	}
	else{
		$partecipa = "no";
	}	
	
	array_push($response, array("id"=>$row[0],"nome"=>$row[1], "categoria"=>$row[2], "latitudine"=>$row[3], "longitudine"=>$row[4], "data"=>$row[5], 
	"orario"=>$row[6], "descrizione"=>$row[7], "proprietario"=>$nome_proprietario, "indirizzo"=>$row[9],
    "citta"=>$row[10], "num_votanti"=>$row[11], "media_voto"=>$row[12], "partecipa"=>$partecipa));
}

echo json_encode(array("server_response"=> $response));

mysqli_close($con);

?>