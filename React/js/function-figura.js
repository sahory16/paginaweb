function figura()
						{
							
							    var numero = document.getElementById("num").value;
						           
						       var n=(numero/2);
						                if (numero%2==0){						                 
						               		 document.write("Ingrese un numero impar!");

						                }
							else{
							     for (var i=0;i<n;i++)
							     { 
							      for(var j=1;j<=i+1;j++)
							      { 
							                document.write("*");
							      }
							                document.write("<br>");
							     }
							    
							    for (var i=1;i<=n;i++)
                                { 
							      for(var j=0;j<=n;j++)
                                  { 
							        if(j<i) {						   
							                document.write("&nbsp&nbsp");
							                }
							      	else {
							                document.write("*");
							            }
							     	}						   
							        document.write("<br>");
							    }
							}
							document.write("<br>");
							document.write("<br>");
							document.write('<a href="http://142.93.241.76:81/blog.html">REGRESAR</a>');
							
						}	