/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/

/*
let name = prompt('Introduce tu nombre')
let age = parseInt(prompt('Introduce tu edad'))

console.log(`Hola ${name} tienes ${age} años y el año que viene tendrás ${age+1} años`);
*/

const resultado = document.getElementById('resultado');

let nombre = prompt('Escriba su nombre');
let edad = prompt('Escriba su edad');

//console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad+1} años`);

resultado.textContent = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad+1} años`;