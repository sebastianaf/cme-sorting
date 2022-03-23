//------[Presentando los bucles o iteraciones]------
/*
    Ciclo While igual que el for pero
    la variable de iteración se 
    crea por fuera
    al igual que la operación
    iterativa
*/
var j=0
while(j<=10){
    //console.log(j)
    j++
}

//Do While itera al menos una vez
var k=0
do{
    //console.log(k)
    k++
    //Condición de para incorrecta
}while(k<=-10)

//--------------------------------------------------------

//Objetivo: Ordenar una lista de menor a mayor
var arreglo1 = [37,1,3,5,-10,-55,7,2,9,8,6,12,8,80,35]
var arreglo2 = [37,3,5,7,2,9,8,6,12,8,80,35]


//1.Función para identificar el menor de todos
function elMenorDeTodos(arreglo){
    var elMenor = arreglo[0]
    for(var i=1 ; i<arreglo.length ; i++){
        if(arreglo[i]<elMenor){
            elMenor = arreglo[i]
        }
    }
    return elMenor
}

//2. Quitar un numero con respecto a su posición
function quitarNumero(arreglo,indice){
    var nuevaLista = []
    nuevaLista = arreglo.slice(0,indice)    
    nuevaLista.concat(arreglo.slice(indice,arreglo.length))
}

console.log(quitarNumero([1,2,3,4],0))



