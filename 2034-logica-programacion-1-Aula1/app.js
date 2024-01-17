let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

// Convierte lo ingresado a numero
numeroUsuario = parseInt(numeroUsuario);

if (numeroUsuario === numeroSecreto) {
    alert('¡Gracias por jugar! Puedes cerrar esta ventana.');
}
 else {
    alert('No acertaste el número');
    window.location.href = 'index.html';
}