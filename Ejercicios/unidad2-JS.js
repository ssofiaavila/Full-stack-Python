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

/* 4- Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función)Una función que se llame siguiente, que reciba como
parámetro un valor entero, y devuelva el siguiente del número
ingresado como parámetro*/ 

function leerNotas(){
    var suma=0;
    var cant=0;
    var num;
    num= prompt("Ingrese nota");
    cant++;
    suma=+ num;
    while (num != -1){
        num= prompt("Ingrese nota");
        cant++;
        suma=+ num;
    }
    console.log("El promedio es "+ (suma/cant));

}
function siguiente(a){
    return a+1;
}
/* 5- Una función que se llame doble, que reciba como parámetro un valor, y
devuelva el doble del número ingresado como parámetro.*/

function doble(a){
    return a*2;
}

/* 6- Una función que se llame cuadrado, que reciba como parámetro un
valor, y devuelva el valor del numero ingresado como parámetro
elevado al cuadrado.*/

function cuadrado(a){
    return a*a;
}

/* 7- Una función que se denomine imprimirValores que dado un número
por parámetro, imprima cual es el valor siguiente, el doble y el
cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
siguiente, el doble y el cuadrado.*/ 

function imprimirValores(a){
    siguiente(a);
    doble(a)
    siguiente(a);
}


/* 8- Una función que se denomine imprimirElDobleDelSiguiente que dado
un número por parámetro, imprima cual es el valor siguiente al del doble.
Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
doble .*/


function imprimirElDobleDelSigueinte(a){
    console.log(siguiente(doble(a)));
}


/* 9- Una función que se denomine
imprimirElDobleDelSiguienteAlCuadrado que dado un número por
parámetro, imprima cual es el valor siguiente al el doble. Usando las
funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
cuadrado */

function imprimirElDobleDelSiguiente(a){
    console.log(siguiente(doble(a)));
}

/*10- dado la longitud de un lado de un cuadrado devuelva el perimetro */
function perimetroCuadrado(a){
    return a*4;
}

/* 11- dado la longitud d eun lado de un cuadrado devuelva la superficie */
function superficieCuadrado(a){
    return cuadrado(a);
}

/* 12- dado el radio de un circulo devuelva circunferencia*/
function circunferenciaCirculo(a){
    return a * 3.14;
}

/* 13- area de un circulo */
function areaCirculo(a){
    return 3.14 * cuadrado(a);
}
/* 14- dado un número de mes y me devuelva la cantidad de
días de ese mes */

function diasPorMes(a){
    switch(a){
        case 1: return 31;
        case 2: return 28;
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
    }

}


/* 15- Una función que reciba como parámetro un año y diga si ese año es
bisiesto. */ 

function esBisiesto(a){
    if ( a % 4 == 0){
        return true;
    }
    else
        return false;
}


/* 16- Una función que reciba el día, mes y año y me devuelva la cantidad de
días de ese mes. */

function cantidadDeDias(d,m,a){
    return diasPorMes(m);
}

/* 17- Una función que reciba día, mes y año y devuelva el día anterior*/ 
function diaAnterior(d,m,a){
    if (d > 1){
        return d-1;
    }
    else{
        if (m > 1){
            return diasPorMes(m-1);
        }
        else
            return 31;
    }
}

/* 18- función que se llame ultimoDiaDelMes que reciba día, mes y año y
devuelva el último día del mes.*/

function ultimoDiaDelMes(d,m,a){
    return diasPorMes(m);
}