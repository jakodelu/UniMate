$.ajax({
		
	type: "POST",
	
	url: "http://datamanage.altervista.org/check_msg.php",
	
	dataType: "html",
	
	success: function(msg){
	
		var dec = JSON.parse(msg);
		
		if(dec.server_response.length < 1){
			var newPar = document.createElement("p");
			newPar.setAttribute('class', 'no_msg');
			newPar.innerHTML = "Non ci sono messaggi";
			document.getElementById("msg_list").appendChild(newPar);
		}
		
		for(var i=0; i<dec.server_response.length; i++)
		{
			
			id_msg = dec.server_response[i].id;
			tipo_msg = dec.server_response[i].tipo;
			reply_user = dec.server_response[i].user;
			msg_text = dec.server_response[i].msg;
			foto = dec.server_response[i].foto;
			nome_user = dec.server_response[i].nome;
			stamp = dec.server_response[i].stamp;
			
			main = document.getElementById("msg_list");
			
			//Messaggio
			var newMsg = document.createElement("div");
			newMsg.setAttribute('class', 'msg_content');
			main.appendChild(newMsg);
			
			//Head
			var newHead = document.createElement("div");
			newHead.setAttribute('class', 'head_msg');
			newMsg.appendChild(newHead);
			
			//Div - Image
			var newDiv = document.createElement("div");
			newDiv.setAttribute('class', 'msg_image_content');
			var newImg = document.createElement("img");
			newImg.setAttribute('class', 'msg_image');
			if(foto == null){
				newImg.src = "profilo.jpeg";
			}
			else{
				newImg.src = "http://datamanage.altervista.org/img/foto_profilo/" + foto;
			}
			newDiv.appendChild(newImg);
			newHead.appendChild(newDiv);
			
			//Div - Data
			var newDiv = document.createElement("div");
			newDiv.setAttribute('class', 'data_msg_content');
			var newPar = document.createElement("p");
			newPar.setAttribute('class', 'user_msg');
			newPar.innerHTML = nome_user;
			newDiv.appendChild(newPar);
			
			var newPar = document.createElement("p");
			newPar.setAttribute('class', 'kind_msg');
			newPar.innerHTML = tipo_msg + " " + stamp;
			newDiv.appendChild(newPar);
			newHead.appendChild(newDiv);
			
			//Div - Reply
			var replyDiv = document.createElement("div");
			replyDiv.setAttribute('class', 'reply_content');
			var sendImg = document.createElement("img");
			sendImg.setAttribute('class', 'reply_img');
			sendImg.src = "img/send_message_icon.png";
			sendImg.setAttribute('id', reply_user);
			replyDiv.appendChild(sendImg);
			newHead.appendChild(replyDiv);
			
			if(tipo_msg == "ricevuto"){
				newPar.style.color = 'blue';
				replyDiv.style.display = "block";				
			}
			else{
				newPar.style.color = 'green';
				replyDiv.style.display = "none";
			}			
			
			//Text
			var newText = document.createElement("div");
			newText.setAttribute('class', 'msg_text_content');
			var newPar = document.createElement("p");
			newPar.setAttribute('class', 'msg_text');
			newPar.innerHTML = msg_text;
			newText.appendChild(newPar);
			newMsg.appendChild(newText);						
			
		}//Fine for
		
		$('.reply_img').on('click', function(e){
				view_msg_window(e.target.id);
			});
		
	},
	
	error: function(){
		
	}
	
	});
	

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
  
function view_msg_window(user){
			
	$.ajax({

	type: "POST",

	url: "http://datamanage.altervista.org/recover_receiver.php",

	data: "user=" + user, 
        
	dataType: "html",

	success: function(msg)
	{	
		document.getElementById("receiver").innerHTML = msg;
		$( ".msg_window" ).dialog({
			autoOpen: true
			});	
	},

	error: function()
	{
	}
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