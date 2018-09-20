$("#button_login").click(function(){
var username_login = $("#username_login").val();
var password_login = $("#password_login").val();

$.ajax({

      type: "POST",

      url: "http://datamanage.altervista.org/check_login.php",

      data: "username_login=" + username_login + "&password_login=" + password_login,

		success: function(msg)
		{
			if(msg == "0"){
				alert("Login errato");
			}
			else{
				location.href="home.html";
			}
		},

      error: function()
      {
      }
});
});