$(document).ready(function() {
$("#utente_research_button").click(function(){
// Prendo valori da caselle di testo e select
var selezionato = document.utente_form.kind_category.selectedIndex;
var campo = document.utente_form.kind_category.options;
var select_check = campo[selezionato].value;
var nome_check = $("#nome_check").val();
var cognome_check = $("#cognome_check").val();
var matricola_check = $("#matricola_check").val();
var piva_check = $("#piva_check").val();
var matr_piva_check = $("#matr_piva_check").val();
var universita_check = $("#universita_check").val();
var facolta_check = $("#facolta_check").val();
var corso_check = $("#corso_check").val();

var record_tabelle = "";

if(nome_check != ""){
record_tabelle = record_tabelle + "nome=" + "'" + nome_check + "'" + " AND ";
}

if(cognome_check != ""){
record_tabelle = record_tabelle + "cognome=" + "'" + cognome_check + "'" + " AND ";
}

if(matricola_check != ""){
record_tabelle = record_tabelle + "matricola=" + "'" + matricola_check + "'" + " AND ";
}

if(piva_check != ""){
record_tabelle = record_tabelle + "piva=" + "'" + piva_check + "'" + " AND ";
}

if(matr_piva_check != ""){
record_tabelle = record_tabelle + "matricola=" + "'" + matr_piva_check + "'" + " OR piva=" + "'" + matr_piva_check + "'" + " AND ";
}

if(universita_check != ""){
record_tabelle = record_tabelle + "universita=" + "'" + universita_check + "'" + " AND ";
}

if(facolta_check != ""){
record_tabelle = record_tabelle + "facolta=" + "'" + facolta_check + "'" + " AND ";
}

if(corso_check != ""){
record_tabelle = record_tabelle + "corso=" + "'" + corso_check + "'" + " AND ";
}

var lunghezza_record_tabella = record_tabelle.length;
record = record_tabelle.slice(0,lunghezza_record_tabella - 4);

if(select_check == "tutti"){
var query = "SELECT * FROM Utenti " + " WHERE " + record + "";
}
else{
var query = "SELECT * FROM Utenti " + " WHERE " + record + " AND categoria=" + "'" + select_check + "'";
}

$.ajax({

      type: "POST",
	  
      url: "http://datamanage.altervista.org/ricerca.php",
	  
      data: "ricerca=" + query,         
      
	  dataType: "html",
	  
      success: function(msg)
      {
        call(msg);
      },
	  
      error: function()
      {
      }
});
});

function call(json)
{
$.ajax({

      type: "POST",
	  
      url: "http://datamanage.altervista.org/create_session.php",
	  
      data: "json=" + json,         
      
	  dataType: "html",
	  
      success: function(msg)
      {
        location.href= "result_research.html";
      },
	  
      error: function()
      {
      }
});
}

});