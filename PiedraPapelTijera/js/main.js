let puntosUsuario = 0;
let puntosPc = 0;

/*Contador de puntos*/
let instrucciones = document.querySelector("#instrucciones");
let contadorPuntosUsuario = document.querySelector("#puntosUsuario");
let contadorPuntosPC = document.querySelector("#puntosPc");

/*Eleccion de las diferentes opciones del usuario */
let contenedorEleccionUsuario = document.querySelector("#eleccionUsuario");
let contenedorEleccionPC = document.querySelector("#eleccionPC");
let elegirArma = document.querySelector("#elegirArma")

/*Mensaje de ganador */
let mensaje = document.querySelector("#mensaje");
let ganaPunto = document.querySelector("#ganaPunto");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno)
});

function iniciarTurno(e){
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    // Piedra = 0
    // Papel = 1
    // Tijera = 2

    if(eleccionPC === 0){
        eleccionPC = "Piedra🪨";
    }else if(eleccionPC === 1){
        eleccionPC = "Papel📃";
    }else {
        eleccionPC = "Tijera✂️"
    }

    /*Piedra vence a tijera
    Tijera vence a papel
    Papel vence a piedra
    Si son iguales es empate*/

    if((eleccionUsuario === "Piedra🪨" && eleccionPC === "Tijera✂️") ||
        (eleccionUsuario === "Tijera✂️" && eleccionPC === "Papel📃") ||
        (eleccionUsuario === "Papel📃" && eleccionPC === "Piedra🪨")
    ){
        ganaUsuario();
    }else if(
        (eleccionPC === "Piedra🪨" && eleccionUsuario === "Tijera✂️") ||
        (eleccionPC === "Tijera✂️" && eleccionUsuario === "Papel📃") ||
        (eleccionPC === "Papel📃" && eleccionUsuario === "Piedra🪨")
    ){
        ganaPC();
    }else {
        empate();
    }

    mensaje.classList.remove("disable")
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionUsuario.innerText = eleccionPC;

}

function ganaUsuario(){
    puntosUsuario++;
    contadorPuntosUsuario.innerText = puntosUsuario;
    ganaPunto.innerText = "¡Ganaste un punto! 🥳";
}

function ganaPC(){
    puntosPc++;
    contadorPuntosPC.innerText = puntosPc;
    ganaPunto.innerText = "¡La computadora ganó un punto! 😞";
}

function empate(){
    ganaPunto.innerText = "¡Empate! ⚔️";
}
