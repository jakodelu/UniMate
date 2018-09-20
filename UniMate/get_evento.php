<?php
session_start();
include "connect_db.php";

$id_evento = $_GET['id_evento'];
$nome = $_SESSION['nome'];

$sql = "SELECT * FROM Eventi WHERE id = '$id_evento'";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$response = array();

$row = mysqli_fetch_array($result);

$identificativo = $row[8];

$sql_identificativo = "SELECT * FROM Utenti WHERE matricola = '$identificativo' OR piva = '$identificativo'";
$con_identificativo = mysqli_connect($host, $user, $password, $db);
$result_identificativo = mysqli_query($con_identificativo, $sql_identificativo);
$row_identificativo = mysqli_fetch_array($result_identificativo);

$first = substr($identificativo, 0, 1);

if($first == "s" or $first == "S"){
	$nome_proprietario = $row_identificativo[0] . " " . $row_identificativo[1] . " (Studente)"; 
}
elseif($first == "p" or $first == "P"){
	$nome_proprietario = $row_identificativo[0] . " " . $row_identificativo[1] . " (Docente)";
}
else{
	$nome_proprietario = $row_identificativo[0] . " (Azienda)";
}

$sql = "SELECT COUNT(*) FROM Log WHERE user = '$nome' AND tipo = 'part_event' AND id_evento = '$id_evento' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$row_part = mysqli_fetch_array($result);

$num = $row_part[0];
$part = "";
if($num > 0 ){$part = "part";}
else{$part = "no_part";}

$mine = "";
if($identificativo == $nome){$mine = "mine";}
else{$mine = "no_mine";}

$sql = "SELECT COUNT(*) FROM Log WHERE tipo = 'part_event' AND id_evento = '$id_evento' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$row_numpart = mysqli_fetch_array($result);
	
	array_push($response, array("nome"=>$row[1], "categoria"=>$row[2], "lat"=>$row[3], "lon"=>$row[4], "data"=>$row[5], 
	"orario"=>$row[6], "descrizione"=>$row[7], "proprietario"=>$nome_proprietario, "indirizzo"=>$row[9],
    "citta"=>$row[10], "num_votanti"=>$row[11], "media_voto"=>$row[12], "part"=>$part, "mine"=>$mine, "numpart"=>$row_numpart[0]));

echo json_encode(array("server_response"=> $response));


mysqli_close($con);
?>