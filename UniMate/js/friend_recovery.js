$.ajax({

      type: "GET",

      url: "http://datamanage.altervista.org/friend_session.php",

      success: function(msg)
      {
			if(!msg){alert("ERRORE! Riprova...");}
			else{fill_header(msg.slice(0,1));}
      },
      error: function()
      {
      }
});

$.ajax({

      type: "GET",

      url: "http://datamanage.altervista.org/check_amicizia.php",        
      
	  dataType: "html",

      success: function(msg){
		  
		  if(msg == "true"){
			  document.getElementById("add_image").style.display = "none";
			  document.getElementById("remove_image").style.display = "block";
		  }
		  else{
			  document.getElementById("add_image").style.display = "block";
			  document.getElementById("remove_image").style.display = "none";
		  }
		  
		  },
      error: function(){}
});

function fill_header(par){

$.ajax({

      type: "GET",

      url: "http://datamanage.altervista.org/fill_header_friend.php",
	  
      success: function(msg)
      {
		  
		if(msg == "you"){
			location.href = "home.html";
		}
		else{
		var dec = JSON.parse(msg);
	    nome = dec.server_response[0].nome;
		cognome = dec.server_response[0].cognome;
		matricola = dec.server_response[0].matricola;
		indirizzo = dec.server_response[0].indirizzo;
		civ = dec.server_response[0].civ;
		citta = dec.server_response[0].citta;
		universita = dec.server_response[0].universita;
		facolta = dec.server_response[0].facolta;
		corso = dec.server_response[0].corso;
		mail = dec.server_response[0].mail;
		phone = dec.server_response[0].phone;
		sitoweb = dec.server_response[0].sitoweb;
		piva = dec.server_response[0].piva;
		categoria = dec.server_response[0].categoria;				
		foto = dec.server_response[0].foto;
		
		if(categoria == "studente"){
		cat = "Studente";
		}
		else if(categoria == "docente"){
			cat = "Docente";
		}
		else{
			cat = "Azienda";
		}
		
		
	 if(categoria == "studente" || categoria == "docente"){
	 document.getElementById("nome").innerHTML = nome + " " + cognome;
	 document.getElementById("indirizzo").innerHTML = indirizzo;
	 document.getElementById("receiver").innerHTML = nome + " " + cognome;
	 }
	 else{
	 document.getElementById("nome").innerHTML = nome;
	 document.getElementById("indirizzo").innerHTML = indirizzo + " " + civ;
	 document.getElementById("receiver").innerHTML = nome;
	 }

	document.getElementById("citta").innerHTML = citta;
	document.getElementById("universita").innerHTML = universita;
	document.getElementById("facolta").innerHTML = facolta;
	document.getElementById("corso").innerHTML = corso;
	document.getElementById("mail").innerHTML = mail;
	document.getElementById("tel").innerHTML = phone;
	document.getElementById("sitoweb").innerHTML = sitoweb;
	document.getElementById("piva").innerHTML = piva;
	document.getElementById("categoria").innerHTML = "<b>(" + cat + ")</b>";	
		
	var img = document.getElementById("profile_image");
		
		if(foto == null){
			img.src = "profilo.jpeg";
		}
		else{
			img.src = "http://datamanage.altervista.org/img/foto_profilo/" + foto;
		}
		
		}
		
      },
      error: function()
      {
      }
});


if(par == 's' || par == 'S')
{
	document.getElementById("nome").style.display = "block";
		document.getElementById("citta").style.display = "block";
		document.getElementById("universita").style.display = "block";
		document.getElementById("facolta").style.display = "block";
		document.getElementById("corso").style.display = "block";
		document.getElementById("mail").style.display = "block";
		document.getElementById("categoria").style.display = "block";
		document.getElementById("piano_studi").style.display = "block";
}

else if(par == 'p' || par == 'P')
{
	document.getElementById("nome").style.display = "block";
		document.getElementById("citta").style.display = "block";
		document.getElementById("universita").style.display = "block";
		document.getElementById("mail").style.display = "block";
		document.getElementById("tel").style.display = "block";
		document.getElementById("categoria").style.display = "block";
}

else
{
	document.getElementById("nome").style.display = "block";
		document.getElementById("address").style.display = "block";
		document.getElementById("indirizzo").style.display = "block";
		document.getElementById("citta").style.display = "block";
		document.getElementById("mail").style.display = "block";
		document.getElementById("tel").style.display = "block";
		document.getElementById("sitoweb").style.display = "block";
		document.getElementById("piva").style.display = "block";
		document.getElementById("categoria").style.display = "block";
}

}