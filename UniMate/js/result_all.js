$.ajax({
	type: "POST",
	
	url: "http://datamanage.altervista.org/get_search_all.php",
	
    success: function(msg)
    {
		
		////////////////////////////////////////////////////////////////
		
		
	var dec = JSON.parse(msg);
	  
	  if(dec.server_response.length > 0){
		  
		if(dec.server_response.length > 1)
			document.getElementById("ris_ricerca").innerHTML = "Risultato Ricerca: " + dec.server_response.length + " Elementi trovati";
		else
			document.getElementById("ris_ricerca").innerHTML = "Risultato Ricerca: " + dec.server_response.length + " Elemento trovato";
	  
	  for(var i = 0; i < dec.server_response.length; i++){
		  
		index = i + dec.server_response.length;
		
		nome_utente = dec.server_response[i].nome_utente;
		matricola_utente = dec.server_response[i].matricola_utente;
		piva_utente = dec.server_response[i].piva_utente;
		nome_evento = dec.server_response[i].nome_evento;
		cat_utente = dec.server_response[i].cat_utente;
		cat_evento = dec.server_response[i].cat_evento;
		categoria = dec.server_response[i].categoria;		
		cognome_utente = dec.server_response[i].cognome_utente;
		universita_utente = dec.server_response[i].universita_utente;
		facolta_utente = dec.server_response[i].facolta_utente;
		corso_utente = dec.server_response[i].corso_utente;
		mail_utente = dec.server_response[i].mail_utente;
		sito_utente = dec.server_response[i].sito_utente;
		foto_utente = dec.server_response[i].foto_utente;
		citta_evento = dec.server_response[i].citta_evento;
		indirizzo_evento = dec.server_response[i].indirizzo_evento;
		id_evento = dec.server_response[i].id_evento;
		
		if(categoria == "utente"){
		
		if(foto_utente == null){
		foto_profilo = "profilo.jpeg";			
		}	 		
		else{	   	
		foto_profilo = "http://datamanage.altervista.org/img/foto_profilo/" + foto_utente;	
		}
		
		
		var div = document.getElementById('table');
		
		var newBox = document.createElement("div");
		newBox.setAttribute('id', i);
		newBox.setAttribute('class', 'result_box');
		div.appendChild(newBox);
		
		var div = document.getElementById(i);
		var newImgBox = document.createElement("div");
		newImgBox.setAttribute('class', 'img_box_left');
		var newImg = document.createElement("img");
		newImg.setAttribute('class', 'profile_img');
		newImg.setAttribute('src', foto_profilo);
		newImgBox.appendChild(newImg);
		
		var newInfoBox = document.createElement("div");			
		newInfoBox.setAttribute('class', 'info_box');
		var newTitle = document.createElement("h1");
		newTitle.setAttribute('class', 'left');		
		
		if(cat_utente == "studente"){
		
		
		var newName = document.createElement("span");
		newName.innerHTML = nome_utente;
		var newSurname = document.createElement("span");
		newSurname.innerHTML = " " + cognome_utente;
		newTitle.appendChild(newName);
		newTitle.appendChild(newSurname);
		newInfoBox.appendChild(newTitle);	

		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = cat_utente;
		newInfoBox.appendChild(newPar);		
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = universita_utente;
		newInfoBox.appendChild(newPar);
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = facolta_utente;
		newInfoBox.appendChild(newPar);
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = corso_utente;
		newInfoBox.appendChild(newPar);
		
		}
		
		else if(cat_utente == "docente")
		{		
		var newName = document.createElement("span");
		newName.innerHTML = nome_utente;
		var newSurname = document.createElement("span");
		newSurname.innerHTML = " " + cognome_utente;
		newTitle.appendChild(newName);
		newTitle.appendChild(newSurname);
		newInfoBox.appendChild(newTitle);

		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = cat_utente;
		newInfoBox.appendChild(newPar);		
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = universita_utente;
		newInfoBox.appendChild(newPar);
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = mail_utente;
		newInfoBox.appendChild(newPar);
		
		}
		
		else
		{		
		newTitle.innerHTML = nome_utente;
		newInfoBox.appendChild(newTitle);

		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = cat_utente;
		newInfoBox.appendChild(newPar);		
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = mail_utente;
		newInfoBox.appendChild(newPar);
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = sito_utente;
		newInfoBox.appendChild(newPar);
		
		}
		
		
		
		
		
		var div = document.getElementById(i);
		var newVaiBox = document.createElement("div");
		newVaiBox.setAttribute('class', 'img_box_right');
		var newVaiImg = document.createElement("img");
		newVaiImg.setAttribute('class', 'vai_img');
		newVaiImg.setAttribute('src', 'img/vai.png');
		newVaiImg.setAttribute('id', index);
		newVaiBox.appendChild(newVaiImg);
		
		newBox.appendChild(newImgBox);
		newBox.appendChild(newInfoBox);
		newBox.appendChild(newVaiBox);
		
		}
		
		$('.vai_img').on('click', function(e){
		
		var my_id = ((e.target.id) - dec.server_response.length);		
		my_matricola = dec.server_response[my_id].matricola_utente;
		
		my_piva = dec.server_response[my_id].piva_utente;
		my_categoria = dec.server_response[my_id].cat_utente;
		
		if(my_categoria == "studente" || my_categoria == "docente"){
			send_matricola(my_matricola);
		}
		else{
			send_piva(my_piva);
		}		
	});
		
		
		if(categoria == "evento"){
		
		
		var div = document.getElementById('table');
		
		var newBox = document.createElement("div");
		newBox.setAttribute('id', i);
		newBox.setAttribute('class', 'result_box');
		div.appendChild(newBox);
		
		var newImgBox = document.createElement("div");
		newImgBox.setAttribute('class', 'img_box_left');
		var newImg = document.createElement("img");
		newImg.setAttribute('class', 'kind_event_img');
		
		if(cat_evento == "Seminario"){
			newImg.setAttribute('src', 'img/seminario_icon.png');
		}
		else if(cat_evento == "Laboratorio"){
			newImg.setAttribute('src', 'img/lab_icon.png');
		}
		else if(cat_evento == "Ritrovo/Festa"){
			newImg.setAttribute('src', 'img/festa_icon.png');
		}
		else if(cat_evento == "Lezioni"){
			newImg.setAttribute('src', 'img/lezione_icon.png');
		}
		else if(cat_evento == "Ricevimento"){
			newImg.setAttribute('src', 'img/ricevimento_icon.png');
		}
		else if(cat_evento == "Servizi Università"){
			newImg.setAttribute('src', 'img/servizio_icon.png');
		}
		else if(cat_evento == "Offerta Lavoro"){
			newImg.setAttribute('src', 'img/lavoro_icon.png');
		}
		else{
			newImg.setAttribute('src', 'profilo.jpeg');
		}	

		newImgBox.appendChild(newImg);
		
		var newInfoBox = document.createElement("div");			
		newInfoBox.setAttribute('class', 'info_box');
		var newTitle = document.createElement("h1");
		newTitle.setAttribute('class', 'left');				
		newTitle.innerHTML = nome_evento;
		newInfoBox.appendChild(newTitle);	
		
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = cat_evento;
		newInfoBox.appendChild(newPar);		
		
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = citta_evento;
		newInfoBox.appendChild(newPar);
	
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = indirizzo_evento;
		newInfoBox.appendChild(newPar);
		
		var newVaiBox = document.createElement("div");
		newVaiBox.setAttribute('class', 'img_box_right');
		var newVaiImg = document.createElement("img");
		newVaiImg.setAttribute('class', 'vai_img');
		newVaiImg.setAttribute('src', 'img/vai.png');
		newVaiImg.setAttribute("onclick", "click_event("+id_evento+");");
		newVaiBox.appendChild(newVaiImg);
		
		newBox.appendChild(newImgBox);
		newBox.appendChild(newInfoBox);
		newBox.appendChild(newVaiBox);

		
		
		}
		
		} //Fine for
		
		  
	  }//Fine If iniziale
	  else{
		  
		document.getElementById("ris_ricerca").innerHTML = "Risultato Ricerca: Nessun utente trovato";
				
		var newBox = document.createElement("div");
		newBox.setAttribute('class', 'result_box');
		document.getElementById('table').appendChild(newBox);
		
		var newInfoBox = document.createElement("div");			
		newInfoBox.setAttribute('class', 'info_box');
		
		var newTitle = document.createElement("h1");
		newTitle.setAttribute('class', 'left');		
		newTitle.innerHTML = "<br><br><br><br>  La ricerca non ha prodotto risultati!";
		
		newInfoBox.appendChild(newTitle);		
		newBox.appendChild(newInfoBox);
		
	  }

		
		
		////////////////////////////////////////////////////////////////
    },
	
	error: function()
    {
    }
});


function send_matricola(matricola){
	$.ajax({
		
	type: "POST",
	
	url: "http://datamanage.altervista.org/create_friend_session.php",
	
	data: "friend=" + matricola,
	
	dataType: "html",
	
	success: function(msg){
	
		location.href="visited_page.html";
	},
	
	error: function(){
		
	}
	
	});
	}
	
	function send_piva(piva){
	$.ajax({
		
	type: "POST",
	
	url: "http://datamanage.altervista.org/create_friend_session.php",
	
	data: "friend=" + piva,
	
	dataType: "html",
	
	success: function(msg){
		location.href="visited_page.html";
	},
	error: function(){
	}
	});
	
	}
	
	function click_event(id){
	
	$.ajax({
		
	type: "POST",
	
	url: "http://datamanage.altervista.org/create_event_session.php",
	
	data: "id=" + id,
	
	dataType: "html",
	
	success: function(msg){
	
		location.href="event_page.html";
		
	},
	
	error: function(){
		
	}
	
	});
	}
