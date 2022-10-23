/* 
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/
/*
let num = parseInt(prompt('Introduce un número'))
let divisores = 0

if (num === 1) console.log('El número no es válido')
else {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(`${num} / ${i} = ${num / i} No es primo`)
            divisores++
            break
        }
    }
}

if(divisores==0) console.log(`${num} es primo`);
*/

let numero = parseInt(prompt('Ingrese el número mayor que 1 para evaluar si es PRIMO'));
esPrimo = true;

if(numero > 1){
    for(let i=2; i<numero; i++){
        if(numero % i == 0){
            esPrimo = false;
            break;
        }
    }
}
else
    document.body.innerHTML = `${numero} no es un número válido`;

if(esPrimo) document.body.innerHTML = `${numero} es un número PRIMO`
else document.body.innerHTML = `${numero} NO es un número PRIMO`;