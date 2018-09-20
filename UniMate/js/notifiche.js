document.getElementById("notification_box").style.display = "none";
document.getElementById("no_notification").style.display = "block";

function view_notifiche(){
	
	$.ajax({

      type: "POST",

      url: "http://datamanage.altervista.org/view_notifiche.php",        
      
	  dataType: "html",

      success: function(msg){
		
	}
	
	});	

	if(document.getElementById("event_window").style.display == "block"){
		$("#event_window").css("display", "none");
	}
		
	if(document.getElementById("notification_box").style.display == "none")
	{			
		$("#notification_box").css("display", "block");
		$("body").css("overflow", "hidden");
		document.getElementById("img_notifica").src = "img/notification.png";
			
	}
	else
	{
		$("body").css("overflow", "scroll");
		$("#notification_box").css("display", "none");
	}
	
		
		
}

function check_notifiche()
{
	$.ajax({

      type: "POST",

      url: "http://datamanage.altervista.org/check_notifiche.php",
      
	  dataType: "html",

      success: function(msg){

		var dec = JSON.parse(msg);
		
				for(var i=0; i<dec.server_response.length; i++)
		{
			
		document.getElementById("no_notification").style.display = "none";
		
		index = i + dec.server_response.length;
		
		id_notifica = dec.server_response[i].id_notifica;
		nome = dec.server_response[i].nome;
		categoria_notifica = dec.server_response[i].categoria_notifica;
		
		var content_notifiche = document.getElementById('content_notifiche');
		
		var newDiv = document.createElement("div");
		newDiv.setAttribute('id', i);
		newDiv.setAttribute('class', 'notifica');
		content_notifiche.appendChild(newDiv);
		
		var newPar = document.createElement("p");	
		newPar.setAttribute('class', 'p_notifica');
		
		if(categoria_notifica == "amicizia"){	
			cognome = dec.server_response[i].cognome;
			matricola = dec.server_response[i].matricola;
			piva = dec.server_response[i].piva;
			categoria_utente = dec.server_response[i].categoria_utente;
					
			if(categoria_utente == "studente" || categoria_utente == "docente"){
				string = "<b>" + nome + " " + cognome + "</b> (" + categoria_utente + ") ha iniziato a seguirti!";
			}
		
			else{
				string = "<b>" + nome + "</b> (" + categoria_utente + ")ha iniziato a seguirti!";
			}					
						
		}
				
		else if(categoria_notifica == "voto_event"){
			string = "Il tuo evento <b>" + nome + "</b> è stato votato!";
		}
		
		else if(categoria_notifica == "part_event"){
			string = "Qualcuno partecipa al tuo evento <b>" + nome + "</b>!";
		}
		
		newPar.innerHTML = string;
		newPar.setAttribute('id', id_notifica);
		newDiv.appendChild(newPar);
		
		
		document.getElementById(id_notifica).setAttribute("onclick", "click_notifica("+id_notifica+");");	
		
		}
		
		
		
	},
	error: function()
			{
			}
	
	
	});
}


function check_viewnotifiche(){
	$.ajax({

      type: "POST",

      url: "http://datamanage.altervista.org/check_viewnotifiche.php",        
      
	  dataType: "html",

      success: function(msg){
		
		if(msg > 0){
			var img_notifiche = document.getElementById("img_notifica");
			img_notifiche.src = "img/alert_notification.png";
		}
		else{
			var img_notifiche = document.getElementById("img_notifica");
			img_notifiche.src = "img/notification.png";
		}
	}
	
	});
}

function click_notifica(id_notifica){
	$.ajax({
		
		type: "POST",

		url: "http://datamanage.altervista.org/click_notifica.php",        
      
		dataType: "html",
	  
		data: "id=" + id_notifica,

		success: function(msg){
			if(msg == "amicizia")
				location.href = "visited_page.html";
			else
				location.href = "event_page.html";
		}
	});
	
}

function first_check_notifiche()
{
	$.ajax({

      type: "POST",

      url: "http://datamanage.altervista.org/first_check_notifiche.php",
      
	  dataType: "html",

      success: function(msg){

		var dec = JSON.parse(msg);
		
		for(var i=0; i<dec.server_response.length; i++)
		{
			
		document.getElementById("no_notification").style.display = "none";
		
		index = i + dec.server_response.length;
		
		id_notifica = dec.server_response[i].id_notifica;
		nome = dec.server_response[i].nome;
		categoria_notifica = dec.server_response[i].categoria_notifica;
		
		var content_notifiche = document.getElementById('content_notifiche');
		
		var newDiv = document.createElement("div");
		newDiv.setAttribute('id', i);
		newDiv.setAttribute('class', 'notifica');
		content_notifiche.appendChild(newDiv);
		
		var newPar = document.createElement("p");	
		newPar.setAttribute('class', 'p_notifica');
		
		if(categoria_notifica == "amicizia"){	
			cognome = dec.server_response[i].cognome;
			matricola = dec.server_response[i].matricola;
			piva = dec.server_response[i].piva;
			categoria_utente = dec.server_response[i].categoria_utente;
					
			if(categoria_utente == "studente" || categoria_utente == "docente"){
				string = "<b>" + nome + " " + cognome + "</b> (" + categoria_utente + ") ha iniziato a seguirti!";
			}
		
			else{
				string = "<b>" + nome + "</b> (" + categoria_utente + ")ha iniziato a seguirti!";
			}					
						
		}
				
		else if(categoria_notifica == "voto_event"){
			string = "Il tuo evento <b>" + nome + "</b> è stato votato!";
		}
		
		else if(categoria_notifica == "part_event"){
			string = "Qualcuno partecipa al tuo evento <b>" + nome + "</b>!";
		}		
		
		newPar.innerHTML = string;
		newPar.setAttribute('id', id_notifica);
		newDiv.appendChild(newPar);
		
		
		document.getElementById(id_notifica).setAttribute("onclick", "click_notifica("+id_notifica+");");	
		
		}
		
		
		
	},
	error: function()
			{
			}
	
	
	});
}

