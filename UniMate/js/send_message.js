$( function() {
    $( ".msg_window" ).dialog({
		autoOpen: false,
		title: "Messaggio",
		draggable: false,
		resizable: false,
		modal: true,
		width: 300,
		height: 300
	});
  } );
  
function view_msg_window(){
			
	$( ".msg_window" ).dialog({
			autoOpen: true
			});	
}

$("#send_msg").click(function(){

var msg = $("#msg_text").val();
invia_msg(msg);	
});

function invia_msg(msg){
	
$.ajax({

type: "POST",

url: "http://datamanage.altervista.org/send_msg.php",

data: "msg=" + msg, 
        
dataType: "html",

success: function(msg)
{
alert("Messaggio inviato correttamente!");
location.href = "messages_page.html";
},

error: function()
{
}
});

}
