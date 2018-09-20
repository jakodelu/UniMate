function view_rete(){
	location.href="rete.html";
}

$.ajax({

      type: "POST",
	  
      url: "http://datamanage.altervista.org/rete.php",
	                
	  dataType: "html",
	  
      success: function(msg)
      {	
		$.ajax({
		type: "POST", 
		url: "http://datamanage.altervista.org/create_session.php",  
	    data: "json=" + msg,
		dataType: "html", 
		success: function(msg)
		{
		},  
		error: function()
		{
		}
		});	
      },
	  
      error: function()
      {
      }
});