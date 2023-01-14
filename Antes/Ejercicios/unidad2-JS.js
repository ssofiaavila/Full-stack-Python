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


/* 19- cree un array con todas las edades de los estudiantes de su
clase. Itere el array utilizando un bucle while y luego imprima todas las
edades en la consola.*/

var dimL=0;
let alumnos=[];
// mientras no se lea la edad 0
var nombre= prompt("Nombre de alumno");
alumnos[dimL]= nombre;
dimL++;
while (nombre != 0){
    var nombre= prompt("Nombre de alumno");
    alumnos[dimL]= nombre;
    dimL++;
}
var i=0;
while (i < alumnos.length){
    console.log(alumnos[i]);
    i++
}



/* Al ejercicio 1 agregue un condicional dentro del ciclo while
para imprimir solo números pares. Cambie el ciclo para usar un ciclo
"for" en lugar de un ciclo "while".*/ 

var dimL=0;
let alumnos=[];
// mientras no se lea la edad 0
var nombre= prompt("Nombre de alumno");
alumnos[dimL]= nombre;
dimL++;
while (nombre != 0){
    var nombre= prompt("Nombre de alumno");
    alumnos[dimL]= nombre;
    dimL++;
}

for (var i=0; i< alumnos.length; i++){
    if (alumnos[i] % 2 == 0)
        console.log(alumnnos[i]);
}

/* 21- escriba una función que reciba un array como parámetro e
imprima el número más bajo de la array en la consola.*/
var numeros= [14,16,20,9,45,66];
numero_minimo(numeros);

function numero_minimo(numeros){
    var min=5000;
    for (var i=0; i< numeros.length; i++){
        if (numeros[i] < min){
            min=numeros[i];
        }
    }
    return min;
}

/* 22-escriba una función que reciba un array como parámetro e
imprima el número más grande de la array en la consola.*/
var numeros= [14,16,20,9,45,66];
numero_minimo(numeros);

function numero_minimo(numeros){
    var max=-1;
    for (var i=0; i< numeros.length; i++){
        if (numeros[i] > max){
            max=numeros[i];
        }
    }
    return max;
}


/* 23- Escriba una función que reciba dos parámetros, una array y
un índice. La función imprimirá el valor del elemento en la posición
dada (basado en uno) en la consola.*/

function valor_indice(numeros,indice){
    return numeros[indice];
}


/* 24- Escriba una función que reciba una array y solo imprima los
valores que se repiten. */

/* 25- escriba una función de JavaScript simple para unir todos los
elementos de la siguiente array en una cadena*/
function encadenar_string(elementos){
    var rtdo;
    for (var i = 0; i < elementos.length; i++){
        rtdo= rtdo + elementos[i];
    }
    return rdto;
}

/* 26- escriba una función de JavaScript que invierta un número.
Por ejemplo, si x = 32443, la salida debería ser 34423 */
function invertir_numero(num){
    const convertAndReverse = n.toString().split("").reverse().join("");
    return Number(convertAndReverse);
}

/* 27- escriba una función de JavaScript que devuelva una cadena
en orden alfabético */
function cadnea_ordenada(cadena){
    const cadenaComoArreglo = cadena.split("");
    cadenaComoArreglo.sort();
    const cadenaOrdenada = cadenaComoArreglo.join("");
    return cadenaOrdenada;
}

/* 28- escriba una función de JavaScript que convierta la primera
letra de cada palabra a mayúsculas*/ 
function convertir_mayuscula(cadena){
    const palabras = cadena.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
    }
}

/* 29- escriba una función de JavaScript que busque la palabra
más larga de una frase*/ 
function palabra_mas_larga(oracion){
    palabra_mas_grande = ""
  palabras = oracion.replace(",", " ").split(" "); //replace usado para eliminar "," de las palabras.
  palabras.forEach(function(palabra){
  if (palabra.length > palabra_mas_grande.length){
       palabra_mas_grande = palabra
   };
  });
  return palabra_mas_grande
}
