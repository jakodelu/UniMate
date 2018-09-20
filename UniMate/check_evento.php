<?php
session_start();
include "connect_db.php";

$proprietario_evento = $_SESSION['nome'];
$tipo_evento = $_POST['tipo_evento'];
$nome_evento = $_POST['nome_evento'];
$latitudine_evento = $_POST['latitudine_evento'];
$longitudine_evento = $_POST['longitudine_evento'];
$data_evento = $_POST['data_evento'];
$orario_evento = $_POST['orario_evento'];
$descrizione_evento = $_POST['descrizione_evento'];
$indirizzo_evento = $_POST['indirizzo_evento'];
$citta_evento = $_POST['citta_evento'];

$sql = "INSERT INTO Eventi (nome, categoria, lat, lon, data, orario, descrizione, proprietario, indirizzo, citta, num_votanti, media_voto) VALUES ('$nome_evento', '$tipo_evento', '$latitudine_evento', $longitudine_evento, '$data_evento', '$orario_evento', '$descrizione_evento', '$proprietario_evento', '$indirizzo_evento', '$citta_evento', '0', '0')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$sql = "SELECT id FROM Eventi WHERE nome = '$nome_evento' AND  categoria = '$tipo_evento' AND  lat = '$latitudine_evento' AND  lon = '$longitudine_evento' AND 
									data = '$data_evento' AND  orario = '$orario_evento' AND  descrizione = '$descrizione_evento' AND 
									proprietario = '$proprietario_evento' AND  indirizzo = '$indirizzo_evento' AND  citta = '$citta_evento' AND 
									num_votanti = '0' AND  media_voto = '0' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$row = mysqli_fetch_array($result);
$id_evento = $row[0];

$sql = "INSERT INTO Log (user, tipo, id_evento) VALUES ('$proprietario_evento', 'create_event', '$id_evento')";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

mysqli_close($con);
?>