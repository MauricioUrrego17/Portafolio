let instrucciones = document.querySelector("#instrucciones");
let mensaje = document.querySelector("#mensaje");
let elegirNumero = document.querySelector("#elegirNumero");
let intento = 0;
let contador = document.querySelector("#intentos");

let contenedorNumUsuario = document.querySelector("#eleccionUsuario");
let contenedorNumPC = document.querySelector("#eleccionPC");

let botonesArmas = document.querySelectorAll(".numero");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

let max = 5;
let min = 1;

function iniciarTurno(e) {
    
    var eleccionPC = Math.floor(Math.random() * (max - min + 1) ) + min;
    var eleccionUsuario = e.currentTarget.id;

    if(eleccionUsuario == eleccionPC){
        instrucciones.innerText = "¡Ganaste! 🥳";
        intento++;
        contador.innerText = intento;
        elegirNumero.classList.add("disabled")
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }else {
        intento++;
        contador.innerText = intento;
    }

    mensaje.classList.remove("disabled");
    contenedorNumUsuario.innerText = eleccionUsuario;
    contenedorNumPC.innerText = eleccionPC;

    if (intento === 5) {
        instrucciones.innerText = "¡Perdiste! 😞"
        elegirNumero.classList.add("disabled")
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }

}

function reiniciarJuego(){
    reiniciar.classList.add("disabled")
    elegirNumero.classList.remove("disabled")
    mensaje.classList.add("disabled")

    intento = 0;

    contador.innerText = intento;
    instrucciones.innerText = "Solo tienes 5 intentos."
}