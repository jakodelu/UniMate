$.ajax({

      type: "POST",
	  
      url: "http://datamanage.altervista.org/result.php",
	  
	  dataType: "html",
	  
      success: function(msg)
      {
	  var dec = JSON.parse(msg);
	  
	  if(dec.server_response.length > 0){
		  
		if(dec.server_response.length > 1)
			document.getElementById("ris_ricerca").innerHTML = "Risultato Ricerca: " + dec.server_response.length + " Eventi trovati";
		else
			document.getElementById("ris_ricerca").innerHTML = "Risultato Ricerca: " + dec.server_response.length + " Evento trovato";
	  
	  for(var i = 0; i < dec.server_response.length; i++){
		
		id = dec.server_response[i].id;		
		nome = dec.server_response[i].nome;
		categoria = dec.server_response[i].categoria;
		citta = dec.server_response[i].citta;
		indirizzo = dec.server_response[i].indirizzo;
		
		var div = document.getElementById('table');
		
		var newBox = document.createElement("div");
		newBox.setAttribute('id', i);
		newBox.setAttribute('class', 'result_box');
		div.appendChild(newBox);
		
		var newImgBox = document.createElement("div");
		newImgBox.setAttribute('class', 'img_box_left');
		var newImg = document.createElement("img");
		newImg.setAttribute('class', 'kind_event_img');
		
		if(categoria == "Seminario"){
			newImg.setAttribute('src', 'img/seminario_icon.png');
		}
		else if(categoria == "Laboratorio"){
			newImg.setAttribute('src', 'img/lab_icon.png');
		}
		else if(categoria == "Ritrovo/Festa"){
			newImg.setAttribute('src', 'img/festa_icon.png');
		}
		else if(categoria == "Lezioni"){
			newImg.setAttribute('src', 'img/lezione_icon.png');
		}
		else if(categoria == "Ricevimento"){
			newImg.setAttribute('src', 'img/ricevimento_icon.png');
		}
		else if(categoria == "Servizi Università"){
			newImg.setAttribute('src', 'img/servizio_icon.png');
		}
		else if(categoria == "Offerta Lavoro"){
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
		newTitle.innerHTML = nome;
		newInfoBox.appendChild(newTitle);	
		
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = categoria;
		newInfoBox.appendChild(newPar);		
		
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = citta;
		newInfoBox.appendChild(newPar);
	
		var newPar = document.createElement("p");
		newPar.setAttribute('class', 'align');
		newPar.innerHTML = indirizzo;
		newInfoBox.appendChild(newPar);
		
		var newVaiBox = document.createElement("div");
		newVaiBox.setAttribute('class', 'img_box_right');
		var newVaiImg = document.createElement("img");
		newVaiImg.setAttribute('class', 'vai_img');
		newVaiImg.setAttribute('src', 'img/vai.png');
		newVaiImg.setAttribute("onclick", "click_event("+id+");");
		newVaiBox.appendChild(newVaiImg);
		
		newBox.appendChild(newImgBox);
		newBox.appendChild(newInfoBox);
		newBox.appendChild(newVaiBox);
		
		} //Fine for
		
		  
	  }//Fine If iniziale
	  else{
		  
		document.getElementById("ris_ricerca").innerHTML = "Risultato Ricerca: Nessun evento trovato";
				
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
		
      },
	  
      error: function()
      {
      }
});

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