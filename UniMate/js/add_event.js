// Richiesta user
$.ajax({
      type: "POST",
      url: "http://datamanage.altervista.org/sessione.php",        
	  dataType: "html",
      success: function(msg)
      {
	  msg = msg.slice(0,1);
	  choose_event(msg);
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare...");
      }
});
// Fine richiesta user


// Costruisco select tipo
var select_tipo = document.form_evento.select_tipo;

function choose_event(user){
	if(user == "s"){
		var option = document.createElement("option");
		option.text = "Ritrovo/Festa";
		option.value = "ritrovo";
		select_tipo.add(option);
	}
	else if(user == "p"){
		var option = document.createElement("option");
		option.text = "Seminario";
		option.value = "seminario";
		select_tipo.add(option);
		
		option = document.createElement("option");
		option.text = "Laboratorio";
		option.value = "laboratorio";
		select_tipo.add(option);
		
		option = document.createElement("option");
		option.text = "Lezione";
		option.value = "lezione";
		select_tipo.add(option);
		
		option = document.createElement("option");
		option.text = "Ricevimento";
		option.value = "ricevimento";
		select_tipo.add(option);
		
		option = document.createElement("option");
		option.text = "Servizio Università";
		option.value = "servizio";
		select_tipo.add(option);		
	}
	else{
		var option = document.createElement("option");
		option.text = "Offerta Lavoro";
		option.value = "lavoro";
		select_tipo.add(option);
	}
}
// Fine costruzione select tipo

var select_giorno = document.form_evento.select_giorno;
var select_mese = document.form_evento.select_mese;
var select_anno = document.form_evento.select_anno;
var select_ora = document.form_evento.select_ora;
var select_min = document.form_evento.select_min;

// Costruisco select giorno
for(var i = 0; i < 31; i++){
	option = document.createElement("option");
	option.text = i + 1;
	option.value = i + 1;
	select_giorno.add(option);
}
// Fine costruzione select giorno

// Gestione cambiamento mese
function select_gg(scelta){
var selezionato = document.form_evento.select_giorno.selectedIndex;
var campo = document.form_evento.select_giorno.options;
check_giorno(campo[selezionato].value);
}

mesi = new Array("Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre");

function check_giorno(scelta) {
document.getElementById("select_mese").options.length = 0;
	if(scelta >= 1 && scelta <= 29){
		for(var i = 0; i < 12; i++){
		option = document.createElement("option");
		option.text = mesi[i];
		option.value = mesi[i];
		select_mese.add(option);
		}
	}
	else if(scelta == 30){
		for(var i = 0; i < 12; i++){
		if(i == 1){i++;}
		option = document.createElement("option");
		option.text = mesi[i];
		option.value = mesi[i];
		select_mese.add(option);
		}
	}
	else if(scelta == 31){
		for(var i = 0; i < 12; i++){
		if(i == 1 || i == 3 || i == 5 || i == 8 || i == 10){i++;}
		option = document.createElement("option");
		option.text = mesi[i];
		option.value = mesi[i];
		select_mese.add(option);
		}
	}
	else{
		option = document.createElement("option");
		option.text = "Mese";
		option.value = "none";
		select_mese.add(option);
	}
}

// Fine gestione cambiamento mese

// Costruisco select anno
for(var i = 2016; i < 2031; i++){
	option = document.createElement("option");
	option.text = i;
	option.value = i;
	select_anno.add(option);
}
// Fine costruzione select anno

// Costruisco select ora
for(var i = 1; i < 25; i++){
	if(i >= 1 && i <=9){
		option = document.createElement("option");
		option.text = "0" + i;
		option.value = "0" + i;
		select_ora.add(option);
	}
	else{
		option = document.createElement("option");
		option.text = i;
		option.value = i;
		select_ora.add(option);
	}
}
// Fine costruzione select ora

// Costruisco select min
for(var i = 0; i < 60; i++){
	if(i >= 0 && i <=9){
		option = document.createElement("option");
		option.text = "0" + i;
		option.value = "0" + i;
		select_min.add(option);
	}
	
	else{
		option = document.createElement("option");
		option.text = i;
		option.value = i;
		select_min.add(option);
	}
}
// Fine costruzione select min

// Pulsante premuto

$(document).ready(function() {
$("#button_evento").click(function(){

// Prendo valori dal form
var selezionato = document.form_evento.select_tipo.selectedIndex;
var campo = document.form_evento.select_tipo.options;
var tipo_evento = campo[selezionato].text;
var nome_evento = $("#nome").val();
var indirizzo_evento = $("#indirizzo").val();
var civ_evento = $("#civ").val();
var citta_evento = $("#citta").val();
var cap_evento = $("#cap").val();
var selezionato = document.form_evento.select_giorno.selectedIndex;
var campo = document.form_evento.select_giorno.options;
var giorno_evento = campo[selezionato].text;
var mese_evento = document.form_evento.select_mese.selectedIndex + 1;
var selezionato = document.form_evento.select_anno.selectedIndex;
var campo = document.form_evento.select_anno.options;
var anno_evento = campo[selezionato].text;
var selezionato = document.form_evento.select_ora.selectedIndex;
var campo = document.form_evento.select_ora.options;
var ora_evento = campo[selezionato].text;
var selezionato = document.form_evento.select_min.selectedIndex;
var campo = document.form_evento.select_min.options;
var min_evento = campo[selezionato].text;
var descrizione_evento = $("#descrizione").val();
// Fine prendo valori dal form

// Validazione campi
var errore = "";
var check = true;

if(tipo_evento == "Tipo Evento" || nome_evento == "" || indirizzo_evento == "" || civ_evento == "" || citta_evento == "" ||cap_evento == "" || descrizione_evento == ""){
	errore = errore + "Tutti i campi devono essere riempiti \n";
	check = false;
}	
if(isNaN(civ_evento)){
	errore = errore + "Il numero civico deve essere un numero! \n"
	check = false;
}
if(isNaN(cap_evento)){
	errore = errore + "Il Cap deve essere un numero!"
	check = false;
}

if(check == false){
alert(errore);
}

// Fine validazione campi

if(check){

// Prendo coordinate mappa 
var stringa_mappa = indirizzo_evento + " " + civ_evento + " " + citta_evento + " " + cap_evento;
if(giorno_evento == "Giorno" || mese_evento == "Mese" || anno_evento == "Anno"){
	data_evento = "Non Specificata";
}
else{
	var data_evento  = giorno_evento + "/" + mese_evento + "/" + anno_evento;
}

if(ora_evento == "hh" || min_evento == "mm"){
	orario_evento = "Non Specificato";
}
else{
var orario_evento  = ora_evento + ":" + min_evento;
}
var indirizzo_event = indirizzo_evento + " " + civ_evento;
var citta_event = citta_evento + " " + cap_evento;
var geocoder = new google.maps.Geocoder();  
geocoder.geocode( { address: stringa_mappa }, function(results, status) {  
if (status == google.maps.GeocoderStatus.OK) {  
	var latitudine_evento = results[0].geometry.location.lat();  
	var longitudine_evento = results[0].geometry.location.lng();
	get_valori(latitudine_evento, longitudine_evento);
}  
else {  
	alert("Indirizzo non trovato!");
}     
}); 
} 
// Fine prendo ccordinate mappa

// Inserimento database


function get_valori(latitudine_evento, longitudine_evento){
$.ajax({

type: "POST",

url: "http://datamanage.altervista.org/check_evento.php",

data: "tipo_evento=" + tipo_evento + "&nome_evento=" + nome_evento + "&latitudine_evento=" + latitudine_evento + "&longitudine_evento=" + longitudine_evento +"&data_evento=" + data_evento + "&orario_evento=" + orario_evento + "&descrizione_evento=" + descrizione_evento + "&indirizzo_evento=" + indirizzo_event
+ "&citta_evento=" + citta_event, 
        
dataType: "html",

success: function(msg)
{
alert("Messaggio inserito correttamente!");
location.href="home.html";
},

error: function()
{
alert("Chiamata fallita, si prega di riprovare...");
}
});
}

// Fine inserimento database
});
});
// Fine pulsante premuto