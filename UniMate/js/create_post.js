$.ajax({
		
	type: "POST",
	
	url: "http://datamanage.altervista.org/check_post.php",
	
	dataType: "html",
	
	success: function(msg){
	
		var dec = JSON.parse(msg);
		
		if(dec.server_response.length < 1){
			
			main = document.getElementById("main_container");
			
			var newPost = document.createElement("div");
			newPost.setAttribute('class', 'post_box');
			main.appendChild(newPost);
						
			var newDiv = document.createElement("div");
			newDiv.setAttribute('class', 'post_img_content');
			var newImg = document.createElement("img");
			newImg.setAttribute('class', 'post_img');
			newDiv.appendChild(newImg);
			newPost.appendChild(newDiv);
			
			var newDiv = document.createElement("div");
			newDiv.setAttribute('class', 'kind_post_content');
			var newPar = document.createElement("p");
			newPar.setAttribute('class', 'kind_post');			
			newDiv.appendChild(newPar);
			newPost.appendChild(newDiv);
			
			var newDiv = document.createElement("div");
			newDiv.setAttribute('class', 'post_text_content');
			var newText = document.createElement("p");
			newText.setAttribute('class', 'post_text');			
			newDiv.appendChild(newText);
			newPost.appendChild(newDiv);
			
			newImg.src = "profilo.jpeg";
			newPar.innerHTML = "Benvenuto in<br><b>UniMate</b>!";
			newText.innerHTML = "Benvenuto nella community di <b>UniMate</b>";
		}
		
		for(var i=0; i<dec.server_response.length; i++)
		{
			
			info = dec.server_response[i].info;
			stamp = dec.server_response[i].stamp;
			tipo = dec.server_response[i].tipo;
		
			main = document.getElementById("main_container");
			
			var newPost = document.createElement("div");
			newPost.setAttribute('class', 'post_box');
			main.appendChild(newPost);
						
			var newDiv = document.createElement("div");
			newDiv.setAttribute('class', 'post_img_content');
			var newImg = document.createElement("img");
			newImg.setAttribute('class', 'post_img');
			newImg.src = "profilo.jpeg"; //Da cambiare src a seconda del tipo
			newDiv.appendChild(newImg);
			newPost.appendChild(newDiv);
			
			var newDiv = document.createElement("div");
			newDiv.setAttribute('class', 'kind_post_content');
			var newPar = document.createElement("p");
			newPar.setAttribute('class', 'kind_post');			
			newDiv.appendChild(newPar);
			newPost.appendChild(newDiv);
			
			var newDiv = document.createElement("div");
			newDiv.setAttribute('class', 'post_text_content');
			var newText = document.createElement("p");
			newText.setAttribute('class', 'post_text');			
			newDiv.appendChild(newText);
			newPost.appendChild(newDiv);
			
			if(tipo == "create_event"){
				newImg.src = "img/create_post.png";
				newPar.innerHTML = "<b>Creazione evento</b><br><i>" + stamp + "</i>";
				newText.innerHTML = "Hai creato l'evento <em>" + info + "</em>!";
			}
			else if(tipo == "part_event"){
				newImg.src = "img/join_post.png";
				newPar.innerHTML = "<b>Partecipazione evento</b><br><i>" + stamp + "</i>";
				newText.innerHTML = "Parteciperai all'evento <em>" + info + "</em>!";
			}
			else if(tipo == "voto_event"){
				newImg.src = "img/rate_post.png";
				newPar.innerHTML = "<b>Voto evento</b><br><i>" + stamp + "</i>";
				newText.innerHTML = "Hai votato l'evento <em>" + info + "</em>!";
			}
			else{
				newImg.src = "img/friend_post.png";
				newPar.innerHTML = "<b>Following</b><br><i>" + stamp + "</i>";
				newText.innerHTML = "Hai cominciato a seguire <em>" + info + "</em>!";
			}
			
			
			
			
		}//Fine for
		
	},
	
	error: function(){
		
	}
	
	});