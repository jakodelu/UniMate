$(document).ready(function() {

 $("#button_azienda_id").click(function(){

var nome_azienda = $("#nome_azienda_id").val();
var indirizzo_azienda = $("#indirizzo_azienda_id").val();
var civ_azienda = $("#civ_azienda_id").val();
var citta_azienda = $("#citta_azienda_id").val();
var cap_azienda = $("#cap_azienda_id").val();
var mail_azienda = $("#mail_azienda_id").val();
var tel_azienda = $("#tel_azienda_id").val();
var sitoweb_azienda = $("#sitoweb_azienda_id").val();
var piva_azienda = $("#piva_azienda_id").val();
var password_azienda = $("#password_azienda_id").val();
var conferma_password_azienda = $("#conferma_password_azienda_id").val();

var errore = "";
var send = true;

if(nome_azienda == "" || indirizzo_azienda == "" || cap_azienda == "" || citta_azienda == "" || civ_azienda == "" || mail_azienda == "" || tel_azienda == "" || sitoweb_azienda == "" || piva_azienda == "" || password_azienda == "" || conferma_password_azienda == ""){
	errore = errore + " - Tutti i campi DEVONO essere riempiti!<br>" 
	send = false;
}

if(isNaN(civ_azienda)){
errore = errore + " - Il numero civico DEVE essere un numero!<br>"
send = false;
}
if(isNaN(cap_azienda)){
errore = errore + " - Il Cap DEVE essere un numero!<br>"
send = false;
}
if(isNaN(tel_azienda)){
errore = errore + " - Il recapito telefonico DEVE essere un numero!<br>"
send = false;
}

if(password_azienda != conferma_password_azienda){
errore = errore + " - Le password NON corrispondono!<br>"
send = false;
}

var valida_mail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
if(!(valida_mail.test(mail_azienda))){
	errore = errore + " - Formato mail NON valido!<br>"
    send = false;
}

var valida_sitoweb = /[wW]{3}[.].+[.][a-zA-Z0-9]{2,4}/;
if(!(valida_sitoweb.test(sitoweb_azienda))){
	errore = errore + " - Formato Sito Web NON valido!<br>"
    send = false;
}

var valida_piva = /\d{11}/;
if(!(valida_piva.test(piva_azienda))){
	errore = errore + " - Formato P.Iva NON valido!<br>"
    send = false;
}

var valida_password = /.{6}/;
if(!(valida_password.test(password_azienda))){
	errore = errore + " - La password DEVE contenere almeno 6 caratteri!<br>"
    send = false;
}

	

document.getElementById("errore_azienda_id").innerHTML = "Si sono verificati i seguenti errori:<br>" + errore;


if(send){
	    $.ajax({

     //imposto il tipo di invio dati (GET O POST)
      type: "POST",

      //Dove devo inviare i dati recuperati dal form?
      url: "check_azienda.php",

      //Quali dati devo inviare?
      data: "nome_azienda=" + nome_azienda + "&indirizzo_azienda=" + indirizzo_azienda + "&civ_azienda=" + civ_azienda + "&citta_azienda=" + citta_azienda + "&cap_azienda=" + cap_azienda + "&sitoweb_azienda=" + sitoweb_azienda + "&mail_azienda=" + mail_azienda + "&tel_azienda=" + tel_azienda + "&piva_azienda=" + piva_azienda + "&password_azienda=" + password_azienda + "&conferma_password_azienda=" + conferma_password_azienda,         
      dataType: "html",

      //Inizio visualizzazione errori
      success: function(msg)
      {
        $("#errore_azienda_id").html(msg); // messaggio di avvenuta aggiunta valori al db (preso dal file risultato_aggiunta.php) potete impostare anche un alert("Aggiunto, grazie!");
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare..."); //sempre meglio impostare una callback in caso di fallimento
      }
    });
}

});
});