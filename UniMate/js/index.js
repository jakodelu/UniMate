var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.getElementById("profile_image").addEventListener("click", cameraGetPicture);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function cameraGetPicture() {
   navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50,
	  targetWidth:500,
	  targetHeight:500,
      destinationType: Camera.DestinationType.NATIVE_URI,
	  sourceType: Camera.PictureSourceType.PHOTOLIBRARY
   });

   function onSuccess(imageData) {
      uploadfile(imageData);
   }

   function onFail(message) {
      alert('Failed because: ' + message);
   }
}


function uploadfile(imageData){
   var fileURL = imageData;
   var uri = encodeURI("http://datamanage.altervista.org/upload.php");
   var options = new FileUploadOptions();
   var add = Math.round(100*Math.random());
   var num = Math.round(100000*Math.random()) + add;
   
   
$.ajax({
      type: "POST",
      url: "http://datamanage.altervista.org/sessione_foto.php",
      data: "num=" + num,          
	  dataType: "html",	  
      success: function(msg)
      {
      },
      error: function()
      {
      }
});
	
   options.fileKey = "FileUtente";
   options.fileName = num + ".jpeg";
   options.mimeType = "text/plain";

   var headers = {'headerParam':'headerValue'};
   options.headers = headers;

   var ft = new FileTransfer();

   ft.upload(fileURL, uri, onSuccess, onError, options);

function onSuccess(r) {
      alert(r.response);
	  $.ajax({
	  type: "POST",
      url: "http://datamanage.altervista.org/insert_photo.php",
      success: function(msg){
		  location.href="home.html";
      },
      error: function(){
      }
     });
   }

   function onError(error) {
      alert("Si e' verificato un errore! Riprova.");
   }
}

app.initialize();