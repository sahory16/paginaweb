// Este sleep lo implementé únicamente para agregarle un poco de estetica al ejemplo.

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dormir() {
  await sleep(8000);
}

function otroCorreo(){
  $('#enviado').hide();
  $('#error').hide();
  $('#campos').show();
  $('#enviar').show();
  $('.otroCorreo').hide();
}


$(document).ready(function(){
  $('#contactform').submit(function(event){

    $('#campos').hide();
    $('#enviar').hide();
    $('#enviando').show();

    event.preventDefault(); // Evitando la acción por defecto del navegador
    dormir();      // Este llamado no es necesario, es un sleep de 8 segundos.

    $.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: $(this).serialize(),
			timeout: 10000,
      success: function(data){
        $('#enviando').hide();
				console.info(data);
				var r = JSON.parse(data); // Decodificando el formato json recibido
				if(r.status=="200"){
					$('#enviado').show();
          $('.otroCorreo').show();
        }
				else{
					console.log(r.mensaje);
          $('#error').show();
          $('.otroCorreo').show();
        }
			},

		})
	});
});
