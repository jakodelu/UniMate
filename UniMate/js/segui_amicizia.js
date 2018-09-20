function segui(){
	
	$.ajax({

      type: "POST",

      url: "http://datamanage.altervista.org/segui_amicizia.php",        
      
	  dataType: "html",

      success: function(msg){
			document.getElementById("add_image").style.display = "none";
			document.getElementById("remove_image").style.display = "block";
		  },
      error: function(){}
});
	
	
}

function non_seguire(){
	
	$.ajax({

      type: "POST",

      url: "http://datamanage.altervista.org/rimuovi_amicizia.php",        
      
	  dataType: "html",

      success: function(msg){
			document.getElementById("add_image").style.display = "block";
			document.getElementById("remove_image").style.display = "none";
		  },
      error: function(){}
	
});

}

