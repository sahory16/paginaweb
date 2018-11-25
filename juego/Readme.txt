Habilitar todos los niveles:
Para realizar esto, debemos ir al archivo Game.js encontraremos una matriz, llena de 0 
para habilitar todos los niveles solo tenemos que cambiarlos por 1
levelStatusArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                   
Crear el nivel 21:
En el mismo archivo Game.js tenemos el tamaño de la matriz que originalmente tiene 20 niveles por 21, 
ademas de que hay que agregarle otro 1 a la matriz, quedaria algo asi:
game.global = {
                levels: 21,
                levelStatusArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                                   1]
               };
               
Luego debemos abrir el archivo LevelSelection.js que esta el la carpeta js
y cambiaremos el valor de las variables thumbRows y thumbCols, quearia asi:

                            var thumbRows = 1;
                            var thumbCols = 7;
Con esto estamos mostrando 7 niveles en cada pagina del Level Selection.
Y para terminar tenemos que crear un archivo en assets/levels con el nombre level21.json            