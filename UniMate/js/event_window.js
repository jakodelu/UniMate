document.getElementById("event_window").style.display = "none";

function view_event_window(){
	
	if(document.getElementById("notification_box").style.display == "block"){
		$("#notification_box").css("display", "none");
	}
	
	if(document.getElementById("event_window").style.display == "none"){			
		$("#event_window").css("display", "block");
		$("body").css("overflow", "hidden");			
	}
	else{
		$("body").css("overflow", "scroll");
		$("#event_window").css("display", "none");
	}
}

function your_events(){
	$.ajax({
		
	type: "POST",
	
	url: "http://datamanage.altervista.org/action_event_session.php",
	
	data: "azione=" + "your_events",
	
	dataType: "html",
	
	success: function(msg){
	
		location.href="result_event.html";
	},
	
	error: function(){
		
	}
	
	});
}

function joined_events(){
	$.ajax({
		
	type: "POST",
	
	url: "http://datamanage.altervista.org/action_event_session.php",
	
	data: "azione=" + "joined_events",
	
	dataType: "html",
	
	success: function(msg){
	
		location.href="result_event.html";
	},
	
	error: function(){
		
	}
	
	});
}

function look_events(){
		$.ajax({
		
	type: "POST",
	
	url: "http://datamanage.altervista.org/action_event_session.php",
	
	data: "azione=" + "look_events",
	
	dataType: "html",
	
	success: function(msg){
	
		location.href="result_event.html";
	},
	
	error: function(){
		
	}
	
	});
}