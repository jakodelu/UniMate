<?php
session_start();
$azione = $_POST['azione'];
$_SESSION['azione'] = $azione;
?>