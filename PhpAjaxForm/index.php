<?php
     /*  Formulario de contacto Ajax.
      *  Rodríguez Angel. http://angelmanuelrs.com.ve
      *  Email: angelmanuelrs@gmail.com
      *  Platzi: https://platzi.com/@AngelRs/
      *  8 Dev. http://8dev.services */
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link rel="stylesheet" href="PhpAjaxForm/style.css" type="text/css" />
    <title>AJAX-PHP Contact Forms</title>
  </head>
  <body>

    <div class="container box">
      <form class="form" id="contactform" action="enviarcorreo.php" method="POST">
        <div id="campos">
          <h1><a href="https://img.coopathome.ch/produkte/300_300/RGB/3181694_001.jpg?_=1473689083941" target="_blank">AJAX</a>-PHP Contact Form</h1>
      		<input id="correo" name="correo" type="text" placeholder="Correo electrónico" required />
          <input id="asunto" name="asunto" type="text" placeholder="Asunto" required />
      		<textarea id="mensaje" name="mensaje" type="text" placeholder="Su mensaje" required ></textarea>
        </div>
        <div id="enviando" class="enviando"><center>Enviando... <i class="fa fa-spin fa-refresh" aria-hidden="true"></i></center></div>
        <div id="enviado" class="enviado"><center>Correo enviado <i class="fa fa-check" aria-hidden="true"></i></center></div>
        <div id="error" class="error"><center><i class="fa fa-ban" aria-hidden="true"></i> Ha ocurrido un error, consulte la consola del navegador.</center></div>
    		<button id="enviar" type="submit">Enviar mensaje</button>
        <button type="button" onclick="otroCorreo()" class="otroCorreo">Escribir otro correo <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
      </form>

      <footer>
        <div class="copyright">
        	© <a href="https://platzi.com/@AngelRs/" target="_blank">Angel Rodríguez</a> 2017.
        </div>
      </footer>
    </div>

    <!-- CDN de JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <!-- CDN de fontawesome  -->
    <script src="https://use.fontawesome.com/558f08d7d9.js"></script>
    <!-- Nuestro JS -->
    <script src="PhpAjaxForm/js/main.js"></script>
  </body>
</html>
