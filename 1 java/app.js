
alert('¡Bienvenida y bievenido a nuestro sitio web!');
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert('¡Error! Completa todos los campos');
let mensajeDeError = '¡Error! Completa todos los campos';
alert(mensajeDeError);
let nombre1 = prompt('Ingrese el nombre de usuario');
let edad1 = prompt('Ingrese la edad del usuario');

if (edad1 >= 18) {
    alert('¡Puedes obtener tu licencia de conducir!');
} 

let dia = prompt('¿Que dia de la semana es?');
if (dia=('Sabado'|| 'sabado'||'Domingo' ||'domingo')){
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}
let num = prompt('Ingresa un numero');
if (num<0){
    alert('El numero es negativo!');
} else { 
    alert('El numero es positivo!');
}
let punt = prompt('Ingrese la puntuacion ');
if (punt>=100){
    alert('¡Felicidades, has ganado!');
} else {
    alert('Intenta nuevamente para ganar.');
}
let nombre = prompt('Ingrese su nombre!');
alert('Bienvenido'+ nombre);

let saldoCuenta = 500; 
alert(`Tu saldo es de $${saldoCuenta}.`); //templatestring
