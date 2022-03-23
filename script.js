//------[Presentando los bucles o iteraciones]------

/*
Lista de números a mano
*/

/* console.log("----conteo a mano----");
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
 */
/*
    Usando el Ciclo For
    Es el ciclo mas compacto porque 
    todo se declara un 
    su cuerpo
*/

console.log("----conteo con for----");
for (var i = 0; i < 5; i++) {
  //console.log(i);
}

/*
    Usando el ciclo While igual es 
    igual que el for pero la 
    variable de iteración se crea 
    por fuera al igual que la 
    operación iterativa
*/
console.log("----conteo con while----");
var j = 0;
while (j < 5) {
  //console.log(j);
  j++;
}

/*
    Usando el ciclo do While que es igual 
    que while donde la variable de 
    iteración se crea por fuera 
    al igual que la operación iterativa
    pero se diferencia del while porque
    el procedimiento de las llaves
    se ejecutará al menos una vez
*/
console.log("----conteo con do while----");
var k = 15;
do {
  //console.log(k);
  k++;
  // Condición de parada no valida
} while (k < 0);

//---------------------------------------------
/*
    Objetivo: 
    Ordenar una lista de números de menor
    a mayor
*/
var arreglo1 = [5, 10, 15, 18, 32, 45, 22, 3, 50, 170, 3, 87, 62];
var arreglo2 = [78, 61, 458, 1024, 94, 63, 62, 45, 22, 3, 50, 170, 87, 62];

/*
    -> Para acceder al tercer elemento 
    de arreglo1 que es 15
 */
//console.log(arreglo1[2])

//1. Función para identificar el menor de todos
function elMenorDeTodos(arreglo) {
  var elMenor = 0;
  for (var i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < arreglo[elMenor]) {
      elMenor = i;
    }
  }
  return elMenor;
}

//Pruebas
elMenorDeTodos([1, 2, 3, 4, 5, 6]);

/*
    -> Esta línea muestra el número 3
*/
//console.log(elMenorDeTodos(arreglo2))

function quitarNumero(arreglo, indice) {
  var nuevaLista = [];
  nuevaLista = arreglo
    .slice(0, indice)
    .concat(arreglo.slice(indice + 1, arreglo.length));
  console.log(nuevaLista);
}


