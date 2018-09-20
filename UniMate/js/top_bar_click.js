function search_click()
{
	$( ".dialog" ).dialog({
		autoOpen: true
	});	
} //Fine search_click();

function logout()
{
	$.ajax({

		url: "http://datamanage.altervista.org/logout.php",
		
      success: function(msg)
      {
			location.href = "login.html";
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare...");
      }
});
    
	
	
} //Fine logout();

function go_home()
{
	location.href="home.html";	
} //Fine go_home();function go_add_event(){	location.href = "add_event.html";}

function go_add_event(){
	location.href="add_event.html";
}



function search_click_all()
{
var input = $("#text_search_all").val();
stringa = new Array();
stringa = input.split(" ");
var condizione = "";
var condizione1 = "";

for(var i = 0; i < stringa.length; i++){
	condizione = condizione + "(nome LIKE '%" + stringa[i] + "%' OR cognome LIKE '%" + stringa[i] + "%' OR matricola LIKE '%" + stringa[i] + "%' OR piva LIKE '%" + stringa[i] + "%') AND ";
}
var lunghezza_record = condizione.length;
var record = condizione.slice(0,lunghezza_record - 4);


for(var i = 0; i < stringa.length; i++){
	condizione1 = condizione1 + "nome LIKE '%" + stringa[i] + "%' AND ";
}
var lunghezza_record1 = condizione1.length;
var record1 = condizione1.slice(0,lunghezza_record1 - 4);

var query = "SELECT * FROM Utenti WHERE " + record;
var query1 = "SELECT * FROM Eventi WHERE " + record1;

$.ajax({
	type: "POST",
	
	url: "http://datamanage.altervista.org/search_all.php",
	
	data: "query=" + query + "&query1=" + query1,
	
    success: function(msg)
    {
	$.ajax({
	type: "POST",	
	url: "http://datamanage.altervista.org/create_session_all.php",	
	data: "all=" + msg,	
    success: function(msg1)
    {
		location.href = "result_all.html";
    },
	error: function()
    {
		alert("Chiamata fallita, si prega di riprovare...");
    }
	});
    },
	
	error: function()
    {
		alert("Chiamata fallita, si prega di riprovare...");
    }
});
} //Fine search_click_all();



