var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//rojo
ctx.fillStyle = "#D21034";
ctx.fillRect(280,0,560,150);
//azul
ctx.fillStyle = "#005293";
ctx.fillRect(0,150,280,300);

//estrella arriba
var canvas1 = document.getElementById("myCanvas");
		if (canvas1 && canvas1.getContext) {
		var ctx = canvas1.getContext("2d");
			if (ctx) {
					ctx.fillStyle ="#005293";
					
					var X = 80;
            		var Y =-145;
            		var R = 25;
					
					var L = 5;
					var paso = 2;
					
					var estrella= L / paso;
					var rad = (2*Math.PI) / estrella;
															
					// traslada el contexto en el centro del canvas  
					ctx.translate(canvas1.width / 2, canvas1.height / 2);
					//gira el contexto unos 270º
					ctx.rotate(3*Math.PI/2);
					// dibuja el trazado 
					ctx.beginPath();
							for( var i = 0; i < L; i++ ){
							x = X + R * Math.cos( rad*i );
							y = Y + R * Math.sin( rad*i );
							ctx.lineTo(x, y);
							}
					ctx.closePath();
					ctx.stroke();
					ctx.fill();
			}
		}
		
//estrella abajo
var canvas2 = document.getElementById("myCanvas");
		if (canvas2 && canvas2.getContext) {
		var ctx = canvas2.getContext("2d");
			if (ctx) {
					ctx.fillStyle ="#D21034";
					
					var X = -103;
					var Y = -340;
					var R = 25;
					
					var L = 5;
					var paso = 2;
					
					var estrella= L / paso;
					var rad = (2*Math.PI) / estrella;
															
					// traslada el contexto en el centro del canvas  
					ctx.translate(canvas2.width / 2, canvas2.height / 2);
					//gira el contexto unos 270º
					ctx.rotate(3.2*Math.PI/2);
					// dibuja el trazado 
					ctx.beginPath();
							for( var i = 0; i < L; i++ ){
							x = X + R * Math.cos( rad*i );
							y = Y + R * Math.sin( rad*i );
							ctx.lineTo(x, y);
							}
					ctx.closePath();
					ctx.stroke();
					ctx.fill();
			}
		}


