/*1. Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack”*/

function imprimirN(a){
    for (var i=0; i<a; i++){
        console.log("Bienvenidos al curso Full Stack");
    }
}


/* 2- Diseñar una función que tenga como parámetros dos números, y que
calcule el máximo.*/

function numMaximo(a,b){
    if (a > b){
        console.log(a + " es mayor que "+ b);
    }
    else
        console.log(b + " es mayor que " + b);
}

/* 3-Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos.*/

function promedio3(a,b,c){
    var total= a + b + c;
    console.log("El promedio es "+  (total /3));
}

/* Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función)Una función que se llame siguiente, que reciba como
parámetro un valor entero, y devuelva el siguiente del número
ingresado como parámetro*/ 

function leerNotas(){

    
}
