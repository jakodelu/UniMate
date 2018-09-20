$(document).ready(function() {
$("#evento_research_button").click(function(){
// Prendo valori da caselle di testo e select
var selezionato = document.evento_form.kind_event.selectedIndex;
var campo = document.evento_form.kind_event.options;
var select_event = campo[selezionato].value;
var nome_evento = $("#nome_evento").val();
var citta_evento = $("#citta_evento").val();

var record_tabelle = "";

if(nome_evento != ""){
record_tabelle = record_tabelle + "nome=" + "'" + nome_evento + "'" + " AND ";
}

if(citta_evento != ""){
record_tabelle = record_tabelle + "citta=" + "'" + citta_evento + "'" + " AND ";
}

var lunghezza_record_tabella = record_tabelle.length;
record = record_tabelle.slice(0,lunghezza_record_tabella - 4);

if(select_event == "tutti"){
var query = "SELECT * FROM Eventi " + " WHERE " + record + "";
}
else{
var query = "SELECT * FROM Eventi " + " WHERE " + record + " AND categoria=" + "'" + select_event + "'";
}

$.ajax({

      type: "POST",
	  
      url: "http://datamanage.altervista.org/action_event_session.php",
	  
      data: "azione=" + "search",         
      
	  dataType: "html",
	  
      success: function(msg)
      {
      },
	  
      error: function()
      {
      }
});

$.ajax({

      type: "POST",
	  
      url: "http://datamanage.altervista.org/result_event.php",
	  
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

function call(json)
{
$.ajax({

      type: "POST",
	  
      url: "http://datamanage.altervista.org/create_session.php",
	  
      data: "json=" + json,         
      
	  dataType: "html",
	  
      success: function(msg)
      {
        location.href= "result_event_research.html";
      },
	  
      error: function()
      {
      }
});
}

});
});