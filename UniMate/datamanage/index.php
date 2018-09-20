<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Data Manager - Index</title>
<link href="style.css" rel="stylesheet" type="text/css" />
<script src="https://code.jquery.com/jquery-3.1.1.min.js" type="text/javascript"></script>
</head>

<body>
<table id="main_table">
<tr><td id="td_logo"></td></tr>
<tr><td>
<p>Seleziona la tua categoria</p>
<p><form name="form1">
<p><select name="campo_principale" size="1" onChange="check();"></p>
<option>-- Seleziona una Categoria</option>
<option value="1">Studente</option>
<option value="2">Docente</option>
<option value="3">Azienda</option>
</select>
</form></p>
</td></tr>



<tr id="studente"><td class="td_selezione">
<p>Hai selezionato <b>Studente</b>:</p>
<p id="errore_studente_id" class="errore"></p>
<form method="post" name="form_studente">
<p><input name="nome_studente" id="nome_studente_id" type="text" placeholder="Nome" size="25">&ensp;&ensp;<input name="cognome_studente" id="cognome_studente_id"  type="text" placeholder="Cognome" size="25"></p>
<p><input name="indirizzo_studente" id="indirizzo_studente_id"  type="text" placeholder="Indirizzo" size="47">&ensp;&ensp;<input name="civ_studente" id="civ_studente_id" maxlength="5"  type="text" placeholder="Civ" size="3"></p>
<p>
<input name="citta_studente" id="citta_studente_id" type="text" size="40" placeholder="Città"  list="list_studente">
<datalist id="list_studente">
<?php
$comuni = file("comuni.txt");
$numero_comuni = count($comuni);

for($i = 0; $i < $numero_comuni; $i++){
$taglia_comune = str_replace(";","", $comuni[$i]);
?><option value=" <?php echo $taglia_comune; ?>"><?php echo $taglia_comune; ?> </option><?php
}
?>
</datalist>
&ensp;&ensp;<input name="cap_studente" id="cap_studente_id" type="text" placeholder="Cap" maxlength="5" size="9"></p>
<p>
<select name="campo_principale_studente" id="campo_principale_studente_id"  size="1" onChange="aggiornaOpzioni();">
<option >-- Scegli Università</option>
</select>
</p>
<p>
<select name="campo_der_studente" id="campo_der_studente_id"  size="1" onChange="aggiornaOpzioni_1();">
<option>-- Scegli Facoltà</option>
</select>
</p>
<p>
<select name="campo_der_1_studente" id="campo_der_1_studente_id"  size="1">
<option>-- Scegli Corso di Studi</option>
</select>
</p>
<p><input name="mail_studente" id="mail_studente_id"  type="text" placeholder="Mail" size="30">&ensp;&ensp;<input id="tel_studente_id"  name="tel_studente" type="text" maxlength="10" placeholder="Tel/Cell" size="20"></p>
<p><input name="matricola_studente" id="matricola_studente_id"  type="text" placeholder="Matricola"size="30" >&ensp;*Esempio: S1234567</p>
<p><input name="password_studente" id="password_studente_id"  type="password" placeholder="Password" size="30">&ensp;*Almeno 6 caratteri</p>
<p><input name="conferma_password_studente" id="conferma_password_studente_id"  type="password" placeholder="Conferma Password" size="30"></p>
<p><input name="button_studente" id="button_studente_id" type="button" value="Registrati"></p>
</form>
</td></tr>



<tr id="docente"><td class="td_selezione">
<p>Hai selezionato <b>Docente</b>:</p>
<p id="errore_docente_id" class="errore"></p>
<form method="post" name="form_docente">
<p><input name="nome_docente" id="nome_docente_id" type="text" placeholder="Nome" size="25">&ensp;&ensp;<input name="cognome_docente" id="cognome_docente_id" type="text" placeholder="Cognome" size="25"></p>
<p><input name="indirizzo_docente" id="indirizzo_docente_id" type="text" placeholder="Indirizzo" size="47">&ensp;&ensp;<input name="civ_docente" id="civ_docente_id" type="text" placeholder="Civ" size="3"></p>
<p>

<input name="citta_docente" id="citta_docente_id" type="text" size="40" placeholder="Città"  list="list_docente">
<datalist id="list_docente">
<?php
$comuni = file("comuni.txt");
$numero_comuni = count($comuni);

for($i = 0; $i < $numero_comuni; $i++){
$taglia_comune = str_replace(";","", $comuni[$i]);
?><option value=" <?php echo $taglia_comune; ?>"><?php echo $taglia_comune; ?> </option><?php
}
?>
</datalist>

&ensp;&ensp;<input name="cap_docente" id="cap_docente_id" type="text" placeholder="Cap" maxlength="5" size="10"></p>
<p>
<select name="campo_principale_docente" size="1">
<option >-- Scegli Università</option>
</select>
</p>
<p><input name="mail_docente" id="mail_docente_id" type="text" placeholder="Mail" size="30">&ensp;&ensp;<input name="tel_docente" id="tel_docente_id" type="text" placeholder="Tel/Cell" size="20"></p>
<p><input name="matricola_docente" id="matricola_docente_id" type="text" placeholder="Matricola" size="30" >&ensp;*Esempio: P1234567</p>
<p><input name="password_docente" id="password_docente_id" type="password" placeholder="Password" size="30">&ensp;*Almeno 6 caratteri</p>
<p><input name="conferma_password_docente" id="conferma_password_docente_id"  type="password" placeholder="Conferma Password" size="30"></p>
<p><input name="button_docente" id="button_docente_id" type="button" value="Registrati"></p>
</form>
</td></tr>



<tr id="azienda"><td class="td_selezione">
<p>Hai selezionato <b>Azienda</b>:</p>
<p id="errore_azienda_id" class="errore"></p>
<form method="post" name="form_azienda">
<p><input name="nome_azienda" id="nome_azienda_id" type="text" placeholder="Nome Azienda" size="57">
<p><input name="indirizzo_azienda" id="indirizzo_azienda_id" type="text" placeholder="Indirizzo" size="47">&ensp;&ensp;<input name="civ_azienda" id="civ_azienda_id" type="text" placeholder="Civ" size="3"></p>
<p><input name="citta_azienda" id="citta_azienda_id" type="text" size="40" placeholder="Città"  list="list_azienda">
<datalist id="list_azienda">
<?php
$comuni = file("comuni.txt");
$numero_comuni = count($comuni);

for($i = 0; $i < $numero_comuni; $i++){
$taglia_comune = str_replace(";","", $comuni[$i]);
?><option value=" <?php echo $taglia_comune; ?>"><?php echo $taglia_comune; ?> </option><?php
}
?>
</datalist>
&ensp;&ensp;<input name="cap_azienda" id="cap_azienda_id" type="text" placeholder="Cap" maxlength="5" size="10"></p>
<p><input name="mail_azienda" id="mail_azienda_id" type="text" placeholder="Mail" size="30">&ensp;&ensp;<input name="tel_azienda" id="tel_azienda_id" type="text" placeholder="Tel/Cell" size="20"></p>
<p><input name="sitoweb_azienda" id="sitoweb_azienda_id" type="text" placeholder="Sito Web"size="30" ></p>
<p><input name="piva_azienda" id="piva_azienda_id" type="text" placeholder="P.Iva"size="30" >&ensp;*P. Iva di 11 cifre</p>
<p><input name="password_azienda" id="password_azienda_id" type="password" placeholder="Password" size="30">&ensp;*Almeno 6 caratteri</p>
<p><input name="conferma_password_azienda" id="conferma_password_azienda_id" type="password" placeholder="Conferma Password" size="30"></p>
<p><input name="button_azienda" id="button_azienda_id" type="button" value="Registrati"></p>
</form>
</td></tr>
<tr><td td class="td_selezione">
<p>A cura di: <b>Rossi Riccardo</b> & <b>De Luca Jacopo</b></p>
</td></tr>
</table>

<script src="menu_index.js" type="text/javascript"></script>
<script src="controllo_studente.js" type="text/javascript"></script>
<script src="controllo_docente.js" type="text/javascript"></script>
<script src="controllo_azienda.js" type="text/javascript"></script>

</body>
</html>
