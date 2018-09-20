<?php
include "connect_db.php";
$nome_azienda = $_POST['nome_azienda'];
$indirizzo_azienda = $_POST['indirizzo_azienda'];
$civ_azienda = $_POST['civ_azienda'];
$citta_azienda = $_POST['citta_azienda'];
$cap_azienda = $_POST['cap_azienda'];
$sitoweb_azienda = $_POST['sitoweb_azienda'];
$mail_azienda = $_POST['mail_azienda'];
$tel_azienda = $_POST['tel_azienda'];
$piva_azienda = $_POST['piva_azienda'];
$password_azienda = $_POST['password_azienda'];
$conferma_password_azienda = $_POST['conferma_password_azienda'];



if (!$connessione->query("INSERT INTO Azienda (nome, piva, password, indirizzo, civ, citta, cap, mail, phone, sitoweb) VALUES 
('$nome_azienda','$piva_azienda','$password_azienda', '$indirizzo_azienda', '$civ_azienda', '$citta_azienda',
	'$cap_azienda', '$mail_azienda', '$tel_azienda', '$sitoweb_azienda')")) {
  echo "Errore della query: " . $connessione->error . ".";
}else{
  echo "Inserimenti effettuati correttamente.";
}
$connessione->close();
?>
















