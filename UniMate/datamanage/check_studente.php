<?php
include "connect_db.php";
$nome_studente = $_POST['nome_studente'];
$cognome_studente = $_POST['cognome_studente'];
$indirizzo_studente = $_POST['indirizzo_studente'];
$civ_studente = $_POST['civ_studente'];
$citta_studente = $_POST['citta_studente'];
$cap_studente = $_POST['cap_studente'];
$mail_studente = $_POST['mail_studente'];
$tel_studente = $_POST['tel_studente'];
$matricola_studente = $_POST['matricola_studente'];
$password_studente = $_POST['password_studente'];
$conferma_password_studente = $_POST['conferma_password_studente'];
$universita_studente = $_POST['universita_studente'];
$facolta_studente = $_POST['facolta_studente'];
$corso_studente = $_POST['corso_studente'];



if (!$connessione->query("INSERT INTO Studente (nome, cognome, matricola, password, universita, facolta, corso, indirizzo, civ, citta, cap, mail, phone) VALUES 
('$nome_studente','$cognome_studente','$matricola_studente','$password_studente', '$universita_studente', '$facolta_studente',
 '$corso_studente', '$indirizzo_studente', '$civ_studente', '$citta_studente', '$cap_studente', '$mail_studente', '$tel_studente')")) {
  echo "Errore della query: " . $connessione->error . ".";
}else{
  echo "Inserimenti effettuati correttamente.";
}
$connessione->close();
?>
















