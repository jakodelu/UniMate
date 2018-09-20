 <?php
  if(isset($_FILES['FileUtente'])){
   $tempPos = $_FILES['FileUtente']['tmp_name'];
   $destPos = "./img/foto_profilo/".$_FILES['FileUtente']['name'];
   move_uploaded_file($tempPos, $destPos);
   echo "Foto profilo aggiornata con successo!";
  }else{
   echo "Si e' verificato un errore! Riprova.";
 }
 ?>