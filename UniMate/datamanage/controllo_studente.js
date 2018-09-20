$(document).ready(function() {

 $("#button_studente_id").click(function(){

var selezionato = document.form_studente.campo_principale_studente.selectedIndex;
var campo = document.form_studente.campo_principale_studente.options;
var universita_studente = campo[selezionato].text;

var selezionato = document.form_studente.campo_der_studente.selectedIndex;
var campo = document.form_studente.campo_der_studente.options;
var facolta_studente = campo[selezionato].text;

var selezionato = document.form_studente.campo_der_1_studente.selectedIndex;
var campo = document.form_studente.campo_der_1_studente.options;
var corso_studente = campo[selezionato].text;

var nome_studente = $("#nome_studente_id").val();
var cognome_studente = $("#cognome_studente_id").val();
var indirizzo_studente = $("#indirizzo_studente_id").val();
var civ_studente = $("#civ_studente_id").val();
var citta_studente = $("#citta_studente_id").val();
var cap_studente = $("#cap_studente_id").val();
var mail_studente = $("#mail_studente_id").val();
var tel_studente = $("#tel_studente_id").val();
var matricola_studente = $("#matricola_studente_id").val();
var password_studente = $("#password_studente_id").val();
var conferma_password_studente = $("#conferma_password_studente_id").val();

var errore = "";
var send = true;

if(nome_studente == "" || cognome_studente == "" || indirizzo_studente == "" || cap_studente == "" || citta_studente == "" || civ_studente == "" || mail_studente == "" || tel_studente == "" || matricola_studente == "" || password_studente == "" || conferma_password_studente == "" || universita_studente == "-- Scegli Università" || facolta_studente == "-- Scegli Facoltà" || corso_studente == "-- Scegli Corso di Studi"){
	errore = errore + " - Tutti i campi DEVONO essere riempiti!<br>" 
	send = false;
}

if(isNaN(civ_studente)){
errore = errore + " - Il numero civico DEVE essere un numero!<br>"
send = false;
}
if(isNaN(cap_studente)){
errore = errore + " - Il Cap DEVE essere un numero!<br>"
send = false;
}
if(isNaN(tel_studente)){
errore = errore + " - Il recapito telefonico DEVE essere un numero!<br>"
send = false;
}

if(password_studente != conferma_password_studente){
errore = errore + " - Le password NON corrispondono!<br>"
send = false;
}

var valida_mail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
if(!(valida_mail.test(mail_studente))){
	errore = errore + " - Formato mail NON valido!<br>"
    send = false;
}

var valida_matricola = /[sS]\d{7}/;
if(!(valida_matricola.test(matricola_studente))){
	errore = errore + " - Formato matricola NON valido!<br>"
    send = false;
}

var valida_password = /.{6}/;
if(!(valida_password.test(password_studente))){
	errore = errore + " - La password DEVE contenere almeno 6 caratteri!<br>"
    send = false;
}

	

document.getElementById("errore_studente_id").innerHTML = "Si sono verificati i seguenti errori:<br>" + errore;

if(send){
	    $.ajax({

     //imposto il tipo di invio dati (GET O POST)
      type: "POST",

      //Dove devo inviare i dati recuperati dal form?
      url: "check_studente.php",

      //Quali dati devo inviare?
      data: "nome_studente=" + nome_studente + "&cognome_studente=" + cognome_studente + "&indirizzo_studente=" + indirizzo_studente + "&civ_studente=" + civ_studente + "&citta_studente=" + citta_studente + "&cap_studente=" + cap_studente + "&mail_studente=" + mail_studente + "&tel_studente=" + tel_studente + "&matricola_studente=" + matricola_studente + "&password_studente=" + password_studente + "&conferma_password_studente=" + conferma_password_studente + "&universita_studente=" + universita_studente + "&facolta_studente=" + facolta_studente + "&corso_studente=" + corso_studente,         
      dataType: "html",

      //Inizio visualizzazione errori
      success: function(msg)
      {
        $("#errore_studente_id").html(msg); // messaggio di avvenuta aggiunta valori al db (preso dal file risultato_aggiunta.php) potete impostare anche un alert("Aggiunto, grazie!");
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare..."); //sempre meglio impostare una callback in caso di fallimento
      }
    });
	
}
});
});


