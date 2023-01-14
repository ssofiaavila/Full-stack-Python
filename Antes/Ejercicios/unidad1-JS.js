/* 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”.*/ 

console.log("Hello world")


/*2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write). */

document.write("Hello world")

/* 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5.*/ 

console.log(3+5)

/*4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”*/

var nombre= prompt("Ingrese nombre")
console.log("Hola"+ nombre)

/*
5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.*/ 

var num1=prompt("Ingrese el primer número")
var num2=prompt("Ingrese el segundo número")
console.log("La resta de ambos números es "+ (num1-num2))

/*
6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.*/ 

var num1=prompt("Ingrese el primer número")
var num2=prompt("Ingrese el segundo número")
if (num1 >= num2) {
    console.log(num1 + " es mayor a "+ num2);
}
else{
    console.log(num2 + "es mayor a "+ num1);
}


/*
7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres. */ 

var num1=prompt("Ingrese el primer número")
var num2=prompt("Ingrese el segundo número")
var num3= prompt("Ingrese el tercer número")
if ((num1 >= num2) & (num1 >= num3)) {
    console.log(num1 + " es el mayor número ")
}
else{
    if (num2 >= num3 & num2 >= num1) {
        console.log(num2 + " es el mayor número")
    }
    else
        console.log(num3 + " es el mayor número")
}


/*
8. Escribe un programa que pida un número y diga si es divisible por 2*/ 

var num=prompt("Ingrese número")
if (num % 2 ==0){
    console.log(num + " es divisible por 2")
}
else{
    console.log(num + " no es divisible por 2")
}


/*
9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a*/

var cadena = prompt("Introduce una cadena de texto:");
    var numchar = cadena.length;    //Devuelve la longitud del string.
    cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
    var car;
    var contador = 0;
    var i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    //recupera el caracter i del string.
        if ((car == "A")){
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");



/*
10. Escribe un programa que pida una frase y escriba las vocales que aparecen*/

/*
11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales*/ 

var cadena = prompt("Introduce una cadena de texto:");
    var numchar = cadena.length;    //Devuelve la longitud del string.
    cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
    var car;
    var contador = 0;
    var i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    //recupera el caracter i del string.
        if ((car == "A") | (car == "E") | (car == "I") | (car == "O") | (car == "U")){
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");


/*
12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales*/ 
var cadena= prompt("Ingrese una frase");
var numchar= cadena.length;
cadena= cadena.toUpperCase();
var car;
var a_contador=0;
var e_contador=0;
var i_contador=0;
var o_contador=0;
var u_contador=0;
var i;
for (i=0; i< numchar; i++){
    switch(cadena.charAt(i)){
        case 'A': a_contador++;
        case 'E': e_contador++;
        case 'I': i_contador++;
        case 'O': o_contador++;
        case 'U': u_contador++;
    }
}

document.writeln("Ocurrencias de A: " + a_contador);
document.writeln("Ocurrencias de E: " + e_contador);
document.writeln("Ocurrencias de I: " + i_contador);
document.writeln("Ocurrencias de O: " + o_contador);
document.writeln("Ocurrencias de U: " + u_contador);






/*
13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)*/
var num= prompt("Número:");
if (((num % 2) == 0) | ((num % 3) == 0) | ((num % 5) == 0) | ((num % 7) == 0)){
    console.log(num + " es divisible por 2, 3, 5 o 7");
}



/*


14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por los que es divisible)
*/ 
var num= prompt("Número: ");
if ((num % 2) == 0){
    console.log("El número es divisible por 2");
}
if ((num % 3) == 0){
    console.log("El número es divisible por 3");
}
if ((num % 5) == 0){
    console.log("El número es divisible por 5");
}
if ((num % 7) == 0){
    console.log("El número es divisible por 7");
}

/*

15. Escribir un programa que escriba en pantalla los divisores de un número dado*/
var num= prompt("Número: ");
var i;
for (i=1; i<=num; i++){
    if ((num % i)==0){
        console.log(num + " es divisible por " + i);
    }
}


/*
16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados */
var n1 = prompt("Escribe un número");
var i;
for (i=2;i < n1/2; i++) {
if (n1 % i === 0) {
document.write(i,", ");
}
}