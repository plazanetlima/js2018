/* 
7 - Crea 3 arrays. El primero tendrá 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array 
    por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/
/*
const numbers = [3,43,21,20,56]
let pares = []
let impares = []

for(const number of numbers){
    let random = Math.round(Math.random() * 10 + 1)
    const result = number * random

    console.log(`${number} x ${random} = ${result}`);
    if(result % 2 == 0){
        pares.push(result)
    }else{
        impares.push(result)
    }
}

console.log(pares);
console.log(impares);
*/
const producto = document.getElementById('producto');
const resultPares = document.getElementById('resultPares');
const resultImpares = document.getElementById('resultImpares');

const arrayNumeros = [7,14,5,28,32];
let arrayPares = [];
let arrayImpares = [];
let numAleatorio;
let resultado;

for(let i=0; i<arrayNumeros.length; i++){
    numAleatorio = Math.round(Math.random()*10+1);
    resultado = arrayNumeros[i]*numAleatorio;
    producto.textContent = `${numAleatorio} X ${arrayNumeros[i]} = ${resultado}`;
    if(resultado%2 == 0) arrayPares.push(resultado)
    else arrayImpares.push(resultado);
}
resultPares.textContent = `Números pares: ${arrayPares}`;
resultImpares.textContent = `Números impares: ${arrayImpares}`;

