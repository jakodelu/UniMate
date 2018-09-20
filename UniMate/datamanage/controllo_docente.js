$(document).ready(function() {

 $("#button_docente_id").click(function(){

var selezionato = document.form_docente.campo_principale_docente.selectedIndex;
var campo = document.form_docente.campo_principale_docente.options;
var universita_docente = campo[selezionato].text;

var nome_docente = $("#nome_docente_id").val();
var cognome_docente = $("#cognome_docente_id").val();
var indirizzo_docente = $("#indirizzo_docente_id").val();
var civ_docente = $("#civ_docente_id").val();
var citta_docente = $("#citta_docente_id").val();
var cap_docente = $("#cap_docente_id").val();
var mail_docente = $("#mail_docente_id").val();
var tel_docente = $("#tel_docente_id").val();
var matricola_docente = $("#matricola_docente_id").val();
var password_docente = $("#password_docente_id").val();
var conferma_password_docente = $("#conferma_password_docente_id").val();

var errore = "";
var send = true;

if(nome_docente == "" || cognome_docente == "" || indirizzo_docente == "" || cap_docente == "" || citta_docente == "" || civ_docente == "" || mail_docente == "" || tel_docente == "" || matricola_docente == "" || password_docente == "" || conferma_password_docente == "" || universita_docente == "-- Scegli Università"){
	errore = errore + " - Tutti i campi DEVONO essere riempiti!<br>" 
	send = false;
}

if(isNaN(civ_docente)){
errore = errore + " - Il numero civico DEVE essere un numero!<br>"
send = false;
}
if(isNaN(cap_docente)){
errore = errore + " - Il Cap DEVE essere un numero!<br>"
send = false;
}
if(isNaN(tel_docente)){
errore = errore + " - Il recapito telefonico DEVE essere un numero!<br>"
send = false;
}

if(password_docente != conferma_password_docente){
errore = errore + " - Le password NON corrispondono!<br>"
send = false;
}

var valida_mail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
if(!(valida_mail.test(mail_docente))){
	errore = errore + " - Formato mail NON valido!<br>"
    send = false;
}

var valida_matricola = /[pP]\d{7}/;
if(!(valida_matricola.test(matricola_docente))){
	errore = errore + " - Formato matricola NON valido!<br>"
    send = false;
}

var valida_password = /.{6}/;
if(!(valida_password.test(password_docente))){
	errore = errore + " - La password DEVE contenere almeno 6 caratteri!<br>"
    send = false;
}

	

document.getElementById("errore_docente_id").innerHTML = "Si sono verificati i seguenti errori:<br>" + errore;



if(send){
	    $.ajax({

     //imposto il tipo di invio dati (GET O POST)
      type: "POST",

      //Dove devo inviare i dati recuperati dal form?
      url: "check_docente.php",

      //Quali dati devo inviare?
      data: "nome_docente=" + nome_docente + "&cognome_docente=" + cognome_docente + "&indirizzo_docente=" + indirizzo_docente + "&civ_docente=" + civ_docente + "&citta_docente=" + citta_docente + "&cap_docente=" + cap_docente + "&mail_docente=" + mail_docente + "&tel_docente=" + tel_docente + "&matricola_docente=" + matricola_docente + "&password_docente=" + password_docente + "&conferma_password_docente=" + conferma_password_docente + "&universita_docente=" + universita_docente,         
      dataType: "html",

      //Inizio visualizzazione errori
      success: function(msg)
      {
        $("#errore_docente_id").html(msg); // messaggio di avvenuta aggiunta valori al db (preso dal file risultato_aggiunta.php) potete impostare anche un alert("Aggiunto, grazie!");
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare..."); //sempre meglio impostare una callback in caso di fallimento
      }
    });
}

});
});