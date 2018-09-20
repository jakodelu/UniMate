$.ajax({

      type: "GET",

      url: "http://datamanage.altervista.org/get_event_session.php",

      success: function(msg)
      {
		view_event(msg);  
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare...");
      }
});

function view_event(id_evento){
$.ajax({

      type: "GET",

      url: "http://datamanage.altervista.org/get_evento.php",
	  
	  data: "id_evento=" + id_evento, 

      success: function(msg)
      {
	  	var dec = JSON.parse(msg);
	    nome = dec.server_response[0].nome;
		categoria = dec.server_response[0].categoria;
		lat = dec.server_response[0].lat;
		lon = dec.server_response[0].lon;
		data = dec.server_response[0].data;
		orario = dec.server_response[0].orario;
	    descrizione = dec.server_response[0].descrizione;
		proprietario = dec.server_response[0].proprietario;
		indirizzo = dec.server_response[0].indirizzo;
		citta = dec.server_response[0].citta;
		num_votanti = dec.server_response[0].num_votanti;
		media_voto = dec.server_response[0].media_voto;
		part = dec.server_response[0].part;
		mine = dec.server_response[0].mine;
		numpart = dec.server_response[0].numpart;
		
		if(mine == "mine"){
			document.getElementById("add_event_icon").style.display = "none";
			document.getElementById("vota_evento").style.display = "none";
			document.getElementById("rating_select").style.display = "none";
			document.getElementById("rating_button").style.display = "none";
		}
		else{
			if(part == "part"){
				document.getElementById("add_event_icon").src = "img/check_black.png";
				document.getElementById("add_event_icon").setAttribute('onclick', 'join_event("part");');
			}
			else{
				document.getElementById("add_event_icon").src = "img/add_black.png";
				document.getElementById("add_event_icon").setAttribute('onclick', 'join_event("no_part");');
			}
		}
		
	    document.getElementById("titolo_evento").innerHTML = nome;
		document.getElementById("tipo_evento").innerHTML = categoria;
		document.getElementById("indirizzo_evento").innerHTML = indirizzo;
		document.getElementById("citta_evento").innerHTML = citta;
		document.getElementById("data_evento").innerHTML = data;
		document.getElementById("ora_evento").innerHTML = orario;
		document.getElementById("proprietario").innerHTML = proprietario;
		document.getElementById("descrizione_evento").innerHTML = descrizione;		
		document.getElementById("numero_votanti").innerHTML = num_votanti;
		document.getElementById("numero_partecipanti").innerHTML = numpart;
		
		var star_1 = document.getElementById("star_1");
		var star_2 = document.getElementById("star_2");
		var star_3 = document.getElementById("star_3");
		var star_4 = document.getElementById("star_4");
		var star_5 = document.getElementById("star_5");
		
		draw_star(media_voto);													
		initMap(lat, lon);
		
		// Pulsante voto premuto	 
$(document).ready(function() {
$("#rating_button").click(function(){

var new_voto = $("#rating_select").val();

if(new_voto == "none"){
	alert("Voto non valido!");
}
else{

	new_voto = parseFloat(new_voto);
	media_voto = parseFloat(media_voto);
	num_votanti = parseFloat(num_votanti);
	var media = ((media_voto * num_votanti) + new_voto) / (num_votanti + 1);
	var votanti = num_votanti + 1;
	
// Aggiorno database con i voti
	$.ajax({

      type: "POST",

      url: "http://datamanage.altervista.org/update_voto.php",
	  
	  data: "media=" + media + "&votanti=" + votanti + "&id_evento=" + id_evento, 

      success: function(msg)
      {
		  if(msg == "si"){
		location.href = "event_page.html";
		  }
		  else{
			  alert("Hai già votato questo evento!");
		  }
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare...");
      }
});
// Fine aggiorno database con i voti
}
});
});
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare...");
      }
});
}

	function initMap(latitudine, longitudine) {
		var posizione = new google.maps.LatLng(latitudine, longitudine);
        var map = new google.maps.Map(document.getElementById('map'), {
		scrollwheel: false,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: false,
		disableDoubleClickZoom: true,
		disableDefaultUI: true,
          zoom: 15,
          center: posizione
        });
        var marker = new google.maps.Marker({
          position: posizione,
          map: map
        });
     }
	 
	 function draw_star(media_voto){
		if(media_voto > 0 && media_voto < 1.25){
			star_1.src = "img/star_full.png";
		}
		
		if(media_voto >= 1.25 && media_voto < 1.75){
			star_1.src = "img/star_full.png";
			star_2.src = "img/star_half.png"
		}
		
		if(media_voto >= 1.75 && media_voto < 2.25){
			star_1.src = "img/star_full.png";
			star_2.src = "img/star_full.png"
		}

		if(media_voto >= 2.25 && media_voto < 2.75){
			star_1.src = "img/star_full.png";
			star_2.src = "img/star_full.png";
			star_3.src = "img/star_half.png";
		}	

		if(media_voto >= 2.75 && media_voto < 3.25){
			star_1.src = "img/star_full.png";
			star_2.src = "img/star_full.png";
			star_3.src = "img/star_full.png";
		}

		if(media_voto >= 3.25 && media_voto < 3.75){
			star_1.src = "img/star_full.png";
			star_2.src = "img/star_full.png";
			star_3.src = "img/star_full.png";
			star_4.src = "img/star_half.png";
		}

		if(media_voto >= 3.75 && media_voto < 4.25){
			star_1.src = "img/star_full.png";
			star_2.src = "img/star_full.png";
			star_3.src = "img/star_full.png";
			star_4.src = "img/star_full.png";
		}	

		if(media_voto >= 4.25 && media_voto < 4.75){
			star_1.src = "img/star_full.png";
			star_2.src = "img/star_full.png";
			star_3.src = "img/star_full.png";
			star_4.src = "img/star_full.png";
			star_5.src = "img/star_half.png";
		}	

		if(media_voto >= 4.75 && media_voto <= 5){
			star_1.src = "img/star_full.png";
			star_2.src = "img/star_full.png";
			star_3.src = "img/star_full.png";
			star_4.src = "img/star_full.png";
			star_5.src = "img/star_full.png";
		}
	 }
	 
// Fine pulsante voto premuto 

function join_event(part){
	if(part == "no_part"){	
		document.getElementById("add_event_icon").src = "img/add_black.png";
		$.ajax({

		type: "GET",

		url: "http://datamanage.altervista.org/join_event.php",

		success: function(msg)
		{
			location.href = "event_page.html";
		},
		error: function()
		{
			alert("Chiamata fallita, si prega di riprovare...");
		}
		});

	}
	else{
		document.getElementById("add_event_icon").src = "img/check_black.png";
		$.ajax({

		type: "GET",

		url: "http://datamanage.altervista.org/not_join_event.php",

		success: function(msg)
		{
			location.href = "event_page.html";
		},
		error: function()
		{
			alert("Chiamata fallita, si prega di riprovare...");
		}
		});
		
		
	}
}

$( function() {
    $( ".part_dialog" ).dialog({
		autoOpen: false,
		title: "Partecipanti",
		draggable: false,
		resizable: false,
		modal: true		
	});
  } );
  
$.ajax({

	type: "GET",

	url: "http://datamanage.altervista.org/get_partecipanti.php",

	success: function(msg)
	{
		//Costruire Html
		var dec = JSON.parse(msg);
		for(var i = 0; i < dec.server_response.length; i++){
			user = dec.server_response[i].user;
			foto = dec.server_response[i].foto;
				
			if(foto == null){
			foto_part = "profilo.jpeg";			
			}	 		
			else{	   	
			foto_part = "http://datamanage.altervista.org/img/foto_profilo/" + foto;	
			}
				
			newImg = document.createElement("img");
			newImg.setAttribute('class', 'part_img');	
			newImg.setAttribute('src', foto_part);
			newImg.setAttribute('id', user);
			newImg.setAttribute("onclick", "goto_friend(id);");
				
			document.getElementById("partecipanti").appendChild(newImg);
			
			
		}
		
	},
	error: function()
	{
		alert("Chiamata fallita, si prega di riprovare...");
	}
});

function view_partecipanti(){
			
	$( ".part_dialog" ).dialog({
			autoOpen: true
			});	
}

function goto_friend(id){
	$.ajax({
		
	type: "POST",
	
	url: "http://datamanage.altervista.org/create_friend_session.php",
	
	data: "friend=" + id,
	
	dataType: "html",
	
	success: function(msg){
	
		location.href="visited_page.html";
		
	},
	
	error: function(){
		
		alert("Chiamata fallita, si prega di riprovare...");
	}
	
	});
}