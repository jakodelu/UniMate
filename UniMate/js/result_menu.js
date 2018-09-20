$.ajax({

      type: "POST",
	  
      url: "http://datamanage.altervista.org/result.php",
	  
	  dataType: "html",
	  
      success: function(msg)
      {
	  var dec = JSON.parse(msg);
	  
	  if(dec.server_response.length > 0){
		  
		if(dec.server_response.length > 1)
			document.getElementById("ris_ricerca").innerHTML = "Risultato Ricerca: " + dec.server_response.length + " Utenti trovati";
		else
			document.getElementById("ris_ricerca").innerHTML = "Risultato Ricerca: " + dec.server_response.length + " Utente trovato";
	  
	  for(var i = 0; i < dec.server_response.length; i++){
		  
		index = i + dec.server_response.length;
		
		nome = dec.server_response[i].nome;
		cognome = dec.server_response[i].cognome;
		matricola = dec.server_response[i].matricola;
		universita = dec.server_response[i].universita;
		facolta = dec.server_response[i].facolta;
		corso = dec.server_response[i].corso;
		indirizzo = dec.server_response[i].indirizzo;
		civ = dec.server_response[i].civ;
		citta = dec.server_response[i].citta;
		mail = dec.server_response[i].mail;
		phone = dec.server_response[i].phone;
		piva = dec.server_response[i].piva;
		sitoweb = dec.server_response[i].sitoweb;
		categoria = dec.server_response[i].categoria;
		foto = dec.server_response[i].foto;
		
		if(foto == null){
		foto_profilo = "profilo.jpeg";			
		}	 		
		else{	   	
		foto_profilo = "http://datamanage.altervista.org/img/foto_profilo/" + foto;	
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
		
		if(categoria == "studente")
		{		
		var newName = document.createElement("span");
		newName.innerHTML = nome;
		var newSurname = document.createElement("span");
		newSurname.innerHTML = " " + cognome;
		newTitle.appendChild(newName);
		newTitle.appendChild(newSurname);
		newInfoBox.appendChild(newTitle);	

		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = categoria;
		newInfoBox.appendChild(newPar);		
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = universita;
		newInfoBox.appendChild(newPar);
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = facolta;
		newInfoBox.appendChild(newPar);
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = corso;
		newInfoBox.appendChild(newPar);
		
		}
		
		else if(categoria == "docente")
		{		
		var newName = document.createElement("span");
		newName.innerHTML = nome;
		var newSurname = document.createElement("span");
		newSurname.innerHTML = " " + cognome;
		newTitle.appendChild(newName);
		newTitle.appendChild(newSurname);
		newInfoBox.appendChild(newTitle);

		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = categoria;
		newInfoBox.appendChild(newPar);		
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = universita;
		newInfoBox.appendChild(newPar);
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = mail;
		newInfoBox.appendChild(newPar);
		
		}
		
		else
		{		
		newTitle.innerHTML = nome;
		newInfoBox.appendChild(newTitle);

		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = categoria;
		newInfoBox.appendChild(newPar);		
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = mail;
		newInfoBox.appendChild(newPar);
		
		var div = document.getElementById(i);
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = sitoweb;
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
				
		
	$('.vai_img').on('click', function(e){
		
		var my_id = ((e.target.id) - dec.server_response.length);		
		my_matricola = dec.server_response[my_id].matricola;
		
		my_piva = dec.server_response[my_id].piva;
		my_categoria = dec.server_response[my_id].categoria;
		
		if(my_categoria == "studente" || my_categoria == "docente"){
			send_matricola(my_matricola);
		}
		else{
			send_piva(my_piva);
		}		
	});
		
      },
	  
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare...");
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