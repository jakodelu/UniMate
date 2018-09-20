<?php
session_start();

$media = $_POST['media'];
$votanti = $_POST['votanti'];
$id_evento = $_POST['id_evento'];
$nome = $_SESSION['nome'];
include "connect_db.php";

$sql = "SELECT COUNT(*) FROM Log WHERE user = '$nome' AND tipo = 'voto_event' AND id_evento = '$id_evento'";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);

if ($row[0] < 1){

$sql = "UPDATE Eventi SET num_votanti = '$votanti', media_voto = '$media' WHERE id = '$id_evento' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$sql = "INSERT INTO Log (user, tipo, id_evento) VALUES ('$nome', 'voto_event', '$id_evento')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$sql = "SELECT proprietario FROM Eventi WHERE id = '$id_evento' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);

$proprietario_evento = $row[0];

$sql = "INSERT INTO Notifiche (user, categoria, id_evento) VALUES ('$proprietario_evento', 'voto_event', '$id_evento')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

echo "si";

}

else{
	echo "no";
}



mysqli_close($con);
?>