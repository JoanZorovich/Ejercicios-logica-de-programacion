//////////  EJERCICIO 1 /////////////////////////////////
/* Dado un número devolver su tabla de multiplicar completa */


// function tablaDeMultiplicar (numero,n) {

//     let titulo = `Esta es la tabla del ${numero}`;
//     console.log (titulo);

//     for (var i=0;i<=n;i++) {
//         let resultado = numero*i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// } 

// tablaDeMultiplicar(8,10)









///////////////// EJERCICIO 2 /////////////////////
/* Dada una cadena de texto, comprobar si es un palindromo o no. 
los palindromos son palabras que se leen igual aun estando invertidas o no
EJ: ANA, BOB, OTTO, ALLOVESSEVILLA*/

// ------> Solucion Jojo  <-------------

// function palindromo(palabra){

//     let letrasLeft = palabra.split(""); 
//     let letrasRight = "";
    
//     for(let i=letrasLeft.length-1; i>=0; i--){
//         letrasRight += letrasLeft[i];
//     }

//     if(palabra==letrasRight){
//         console.log(`la palabra ${palabra} es un palindromo \n`)
//     }else{
//         console.log(`la palabra ${palabra} no es un palindromo \n`)
//     }
// }

// palindromo ("ana");
// palindromo ("luna");
// palindromo ("otto");

// -----------> otra forma de resolverlo <-------------------

// function palindromo (palabra) {
//     let invertido = palabra.split("").reverse().join("");
//     if(palabra===invertido){
//       console.log(`la palabra ${palabra} es un palindromo \n`)
//       }else{
//         console.log(`la palabra ${palabra} no es un palindromo \n`)
//     }
// }

// palindromo("luna");
// palindromo("ana");

// -----------> otra forma de resolverlo <-------------------

// function palindromo (palabra) {
//     let invertido = palabra.split("").reverse().join("");
//     return (invertido === palabra);
// }

// console.log("¿Es un palindromo?" +" "+ palindromo("luna"));











///////////////////// EJERCICIO 3 //////////////////////////////
/* Dada una palabra, buscarla en una frase y devolver cuantas veces aparece.
La frase y la palabra deben ser parametros de una función */

// ------------> Solucion Jojo <----------------------------
// function findWord (sentence, word) {
//     let realSentence = sentence.toLowerCase();
//     let arraySentence = realSentence.split(" ");
//     let totalWords = 0;

//     for (let i = 0; i < arraySentence.length; i++){
//         if(arraySentence[i]==word){
//             totalWords = totalWords + 1;
//         }
//     }

//     if (totalWords===0){
//         console.log(`La palabra ${word} no se encuentra en la frase`)
//     } else {
//         console.log(`la palabra ${word} se encuentra ${totalWords} veces en la frase`)
//     }
// }

// findWord("las palabras SON asi, asi y asi", "son" )


// -------------> otra solución <-----------------------------
/* 
        1. Crear una función con dos parametros
        2. Poner en minusculas la frase y limpiarla
        3. comprobar si en la busqueda esta incluida la frase 
        4. crear un array de palabras de la frase 
        5. mapear estas palabras y hacer un contador de cada una
        6. devolver el contador de la busqueda
*/

// function coincidencias (frase, busqueda) {
//     let texto_limpio = frase.toLowerCase().replace(/[!¡.,:;]/gi,''); 
//     let resultado= 0;
    
//     if(texto_limpio.includes(busqueda)){

//         let palabras = texto_limpio.split(" ");
//         let mapa = {};

//         for (let palabra of palabras){

//             if(mapa[palabra]){
//                 mapa[palabra] ++;
//             } else {
//                 mapa[palabra] = 1;
//             }

//         }
//         resultado= mapa[busqueda];
//     } else {
//         resultado = 0;
//     }
    
//     return resultado;
// }

// console.log(
//     "numero de coincidencias:",
//     coincidencias("las: palabras; SON asi, asi! y asi.", "asi")
// );










////////////////////    EJERCICIO 4     ////////////////////////////////

/*Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres 
sin usar metodos propios del lenguaje, solo estructuras de control 

Ejemplos: 

invertir ('hola') = devuelve: 'aloh'
invertir ('victor') = devuelve: 'rotciv'
*/

// function invertir (texto) {

// }


// function invertir (texto) {
//     let invertido = '';

//     for (let letra of texto) {
//         invertido = letra + invertido;
//     }
//     // invertir ('hola'); /* Esta es para que funcione sin necesidad de asignarlo a una variable*/
//     return invertido;
// }

// invertir ('hola');
// invertir ('victor');

// let resultado = invertir ('joan');
// console.log (resultado);

// // o //

// console.log (`Este es el texto invertido: ${invertir ('victor')}`)


// // -----------------------> esta es la opción utilizando métodos de leguaje <---------------------

// function invertir (texto) {
//     let invetido = texto.split('').reverse().join('');
//     console.log(invetido);
// }

// invertir ('hola');








/////////////////////// EJERCICIO 5 /////////////////////

/* ¿cuel es el x porciento de x numero */

// function porcentaje(numero, porcentaje){

//     let resultado = numero * (porcentaje/100);
//     //console.log(resultado)
//     return (`El ${porcentaje}% de ${numero} es: ${resultado}`);
// }

// console.log(porcentaje(100,20));









//////////////////////// ENTREVISTA ////////////////////////7

// /* */

// let n1='1';
// let n2='10';
// let resultado='';


//     for (var i=n1;i<=n2;i++) {
//         resultado += i+',';
//     }

//     console.log (resultado);


// const db = {
// 	maria: 1234,
// 	pedro: 5678,
// 	juan: 9876 
// };



// // function keyValue (key) {
// //     let dbArray = Object.keys(db);
// //     let resultado = dbArray[key];
// //     return resultado
// // }

// // console.log(keyValue(2,db))



// // function keyValue (key, db) {

// // }



// let dbArray = Object.keys(db);
// //let valor= 5678;
// for (let i = 0; i <dbArray.length; i++) {
//     let resultado = db[dbArray[i]];
//     let valor = 5678;
//     console.log(resultado);
//     console.log(valor);
//     if(valor == resultado){
//         console.log(dbArray[i]);
//     }else{

//     }

// }


// // let resultado = dbArray[2];
// // console.log(db[resultado]);










////////////////// EJERICIO 6 //////////////////////////////////

/* Dibujar un cuadrado hueco con asterioscos 

Ejemplo cuadrado(4);

****
*  *
*  * 
*  * 
****

*/

let tamano= 4;
let a= '';
let b= '*';
let c= '';
let d= '';


for(let i=1; i<tamano; i++){
    a+='*';
    b+=`\n*`;
    
}
let total = a+b;
console.log(total);