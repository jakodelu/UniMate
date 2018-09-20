function clear_utente(){
$("#nome_check").val("");
$("#cognome_check").val("");
$("#matricola_check").val("");
$("#piva_check").val("");
$("#matr_piva__check").val("");
$("#universita_check").val("");
$("#facolta_check").val("");
$("#corso_check").val("");
}


function choice_research(scelta){
var selezionato = document.main_form.kind_research.selectedIndex;
var campo = document.main_form.kind_research.options;
check_research(campo[selezionato].value);
}

function check_research(scelta) {
if(scelta == "none"){
document.getElementById("evento_research").style.display="none";
document.getElementById("utente_research").style.display="none";
}
if(scelta == "utente"){
document.getElementById("utente_research").style.display="block";
document.getElementById("evento_research").style.display="none";
}
if(scelta == "evento"){
document.getElementById("evento_research").style.display="block";
document.getElementById("utente_research").style.display="none";
}
}


function choice_utente(scelta){
var selezionato = document.utente_form.kind_category.selectedIndex;
var campo = document.utente_form.kind_category.options;
check_utente(campo[selezionato].value);
}


function check_utente(scelta) {
	
if(scelta == "none"){
clear_utente();
document.getElementById("nome_check_div").style.display="none";
document.getElementById("cognome_check_div").style.display="none";
document.getElementById("matricola_check_div").style.display="none";
document.getElementById("piva_check_div").style.display="none";
document.getElementById("matr_piva_check_div").style.display="none";
document.getElementById("universita_check_div").style.display="none";
document.getElementById("facolta_check_div").style.display="none";
document.getElementById("corso_check_div").style.display="none";
}

if(scelta == "tutti"){
clear_utente();
document.getElementById("nome_check_div").style.display="block";
document.getElementById("cognome_check_div").style.display="block";
document.getElementById("matricola_check_div").style.display="none";
document.getElementById("piva_check_div").style.display="none";
document.getElementById("matr_piva_check_div").style.display="block";
document.getElementById("universita_check_div").style.display="block";
document.getElementById("facolta_check_div").style.display="block";
document.getElementById("corso_check_div").style.display="block";
}

if(scelta == "studente"){
clear_utente();
document.getElementById("nome_check_div").style.display="block";
document.getElementById("cognome_check_div").style.display="block";
document.getElementById("matricola_check_div").style.display="block";
document.getElementById("piva_check_div").style.display="none";
document.getElementById("matr_piva_check_div").style.display="none";
document.getElementById("universita_check_div").style.display="block";
document.getElementById("facolta_check_div").style.display="block";
document.getElementById("corso_check_div").style.display="block";
}

if(scelta == "docente"){
clear_utente();
document.getElementById("nome_check_div").style.display="block";
document.getElementById("cognome_check_div").style.display="block";
document.getElementById("matricola_check_div").style.display="block";
document.getElementById("piva_check_div").style.display="none";
document.getElementById("matr_piva_check_div").style.display="none";
document.getElementById("universita_check_div").style.display="block";
document.getElementById("facolta_check_div").style.display="none";
document.getElementById("corso_check_div").style.display="none";
}

if(scelta == "azienda"){
clear_utente();
document.getElementById("nome_check_div").style.display="block";
document.getElementById("cognome_check_div").style.display="none";
document.getElementById("matricola_check_div").style.display="none";
document.getElementById("piva_check_div").style.display="block";
document.getElementById("matr_piva_check_div").style.display="none";
document.getElementById("universita_check_div").style.display="none";
document.getElementById("facolta_check_div").style.display="none";
document.getElementById("corso_check_div").style.display="none";
}
}