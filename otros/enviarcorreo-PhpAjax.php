<?php

  if($_POST==null){
    header("Location: http://142.93.241.76:81/index2.html");
    exit(); // Evitamos el acceso directo a esta url
  }

  //Funcion que formatea el mensaje de error en formato json y sale del script
  function Error($mensaje){
  	echo '{"status": "401", "mensaje": "'.$mensaje.'"}'; // Error 401 - Credenciales Invalidas
  	exit;
  }

  //Funcion para validar los datos
  function ValDato($dato){
  	$dato = trim($dato);        //Eliminar espacios a los lados
  	$dato = strip_tags($dato);//Eliminar etiquetas HTML
  	return $dato;
  }

  // Recolección y validación de valores del formulario
  if(isset($_POST['asunto']))
  	$asunto = ValDato($_POST['asunto']);

  if(isset($_POST['correo']))
  	$correo = ValDato($_POST['correo']);

  if(isset($_POST['mensaje']))
  	$mensaje = ValDato($_POST['mensaje']);


  //Se utiliza la funcion filter_var para validar el correo
  if(!filter_var($correo, FILTER_VALIDATE_EMAIL))
  	Error('El correo no es valido.');

  if(strlen($mensaje)<15)
  	Error('Su mensaje debe ser al menos de 15 caracteres');

  //    Ejemplo de como envíar el correo
  //   No olvidar la respectiva configuración del SMTP de donde esté alojado nuestro proyecto
    mail("sahory,maila@gmail.com", $asunto, 'Correo proveniente de: ' . $correo . ' Mensaje: ' .$mensaje);



  echo '{"status": "200", "mensaje": "OK"}';  // Retorno 200 - OK
?>
