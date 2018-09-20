function check()
{
	check_viewnotifiche();	
	check_notifiche();
	check_msg();
}

$(document).ready(function(){
	first_check_notifiche();
});

function check_msg(){
	$.ajax({

      type: "POST",

      url: "http://datamanage.altervista.org/check_new_msg.php",        
      
	  dataType: "html",

      success: function(msg){
		
		if(msg > 0){
			document.getElementById("img_msg").src = "img/message_notification.png";
		}
		else{
			document.getElementById("img_msg").src = "img/message.png";
		}
	}
	
	});
}


