/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, 
    después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/
/*
let figure = prompt('Introduce la figura geómetrica de la que quieres calcular el área: triangle, rectangle or circle')

let base;
let height;
let radius;

switch(figure){
    case 'triangle':
        base=prompt('Introduce la base del triángulo')
        height=prompt('Introduce la altura del triángulo')
        console.log(`El área del triángulo es ${(base*height)/2}`);
        break
    case 'rectangle':
        base=prompt('Introduce la base del rectángulo')
        height=prompt('Introduce la altura del rectángulo')
        console.log(`El área del rectángulo es ${base*height}`);
        break
    case 'circle':
        radius=prompt('Introduce el radio del círculo')
        console.log(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`);
        break
    default: console.log('La figura geométrica no es válida');
}
*/
const resultado = document.getElementById('resultado');

let base;
let altura;
let radio;
let area;
let tipoFigura = prompt('De que figura se quiere calcular el área ( triángulo, rectángulo o círculo)');

switch(tipoFigura){
    case 'triangulo':
        base = prompt('Introduce la longitud de la base');
        altura = prompt('Introduce la longitud de la altura del triangulo');
        area = base * altura / 2;
        break;
    case 'rectangulo':
        base = prompt('Introduce la longitud de la base');
        altura = prompt('Introduce la longitud de la altura del triangulo');
        area = base * altura;
        break;
    case 'circulo':
        radio = prompt('Introduce la longitud del radio de la circunferencia');
        area = Math.PI * Math.pow(radio,2);
        break;
    default: 
        resultado.textContent = 'La figura geometrica no es válida';
};
resultado.textContent = `El área de la figura ${tipoFigura} es ${area}`;