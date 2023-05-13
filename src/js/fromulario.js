var nombre = document.getElementById("nombre");
var Correo = document.getElementById("Correo");
var Rut =document.getElementById('Rut');
var Patente = document.getElementById('Patente');
var error = document.getElementById("error");


 error.style.color = "grey";

function enviarFormulario() {
    console.log("Enviando Formulario")

    var mensajesError = [];
    if (nombre.value === null || nombre.value === '') {
        mensajesError.push("Ingresa tu nombre");
    }

    if (Correo.value === null || Correo.value === '') {
        mensajesError.push("Ingresa tu Correo");
    }

    if (Rut.value === null || Rut.value === '') {
        mensajesError.push("Ingresa tu Rut");
    }

    if (Patente.value === null || Patente.value === '') {
        mensajesError.push("Ingresa tu Patente");
    }


    error.innerHTML =    mensajesError.join(', ');

    return false; 
}
