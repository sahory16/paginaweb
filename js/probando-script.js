<form id="form">
            <input id="input" type="text"/>
        </form>
        <br>
        <div id="resultados">
            
        </div>
        <script>
            input=document.getElementById('input');
            result=document.getElementById('resultados');
            input.onchange=function(){
                entrada=input.value;
                cont=1;                              
                entrada=parseInt(entrada)-1;
                if(entrada%2==0 && entrada>0){
                    acum=Math.round(entrada/2);
                    //entrada=entrada*2;
                    entrada=entrada+1;              
                    aux=1;
                    for(i=1;i<=entrada;i++){                                                            
                        if(cont<=Math.round(entrada/2)){
                            for(j=1;j<=cont;j++){                            
                                result.innerHTML+='*';
                            }
                            result.innerHTML+='<br>';
                            cont++;
                        }else{                                               
                            for(j=1;j<=aux;j++){                              
                                result.innerHTML+="&nbsp&nbsp";                            
                            }
                            for(k=1;k<=acum;k++){                            
                                result.innerHTML+='*';                            
                            }                        
                            result.innerHTML+='<br>';
                            acum--;       
                            aux++;
                        }                    
                    }                
                }else{
                    alert('Debe ingresar numeros impares positivos')
                }
            };
        </script>

<p>&nbsp;</p>
