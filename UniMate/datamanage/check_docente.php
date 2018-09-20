<?php
include "connect_db.php";
$nome_docente = $_POST['nome_docente'];
$cognome_docente = $_POST['cognome_docente'];
$indirizzo_docente = $_POST['indirizzo_docente'];
$civ_docente = $_POST['civ_docente'];
$citta_docente = $_POST['citta_docente'];
$cap_docente = $_POST['cap_docente'];
$mail_docente = $_POST['mail_docente'];
$tel_docente = $_POST['tel_docente'];
$matricola_docente = $_POST['matricola_docente'];
$password_docente = $_POST['password_docente'];
$conferma_password_docente = $_POST['conferma_password_docente'];
$universita_docente = $_POST['universita_docente'];



if (!$connessione->query("INSERT INTO Docente (nome, cognome, matricola, password, universita, indirizzo, civ, citta, cap, mail, phone) VALUES 
('$nome_docente','$cognome_docente','$matricola_docente','$password_docente', '$universita_docente', '$indirizzo_docente', '$civ_docente', '$citta_docente', '$cap_docente', '$mail_docente', '$tel_docente')")) {
  echo "Errore della query: " . $connessione->error . ".";
}else{
  echo "Inserimenti effettuati correttamente.";
}
$connessione->close();
?>
















