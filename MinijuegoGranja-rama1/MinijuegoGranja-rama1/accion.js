var arriba=document.getElementById("arriba");
var abajo=document.getElementById("abajo");
var izquierda=document.getElementById("izquierda");
var derecha=document.getElementById("derecha");


var audio = new Audio('audios/bts.mp3');
var nuevoNivel = new Audio('audios/nuevoNivel.mp3');
var comer = new Audio('audios/iuju.mp3');
var pasos = new Audio('audios/pasos.mp3');

musica=false;
function play() {
    audio.volume=0.5;
    audio.play();
}
function stopMusic(){
    audio.pause();
}

function nivelSound() {
    nuevoNivel.play();
}

function comerSound() {
    comer.volume=1;
    comer.play();
}

function pasoSound() {
    pasos.volume=1;
    pasos.play();
}
function stopPasoSound() {
    pasos.volume=1;
    pasos.pause();
}

var stop=false;
var level=document.getElementById("nivelActual");
var cuadro = document.getElementById("cuadro");
var papel = cuadro.getContext("2d");

var mapa = "img/FondoEspacial.png";
var apple = "img/E1.png";
var banana = "img/E2.png";
var pineaple = "img/E3.png";
var player = "img/NAVE.png";
var ganaste = "img/ganaste.gif";

var teclas = {
    UP: 87,
    DOWN: 83,
    LEFT: 65,
    RIGHT: 68
}

nivel=1;

var minimoY = 200;
var maximoY = 500;
var minimoX = 0;
var maximoX = 690;

var imagen = new Image();
imagen.src = mapa;
var imagenBanana = new Image();
imagenBanana.src = banana;
var imagenApple = new Image();
imagenApple.src = apple;
var imagenPineapple = new Image();
imagenPineapple.src = pineaple;
var imagenPlayer = new Image();
imagenPlayer.src = player;
var imagenWin = new Image();
imagenWin.src = ganaste;

var numero=3;
var velocidad=10;

var bananaX=[numero];
var bananaY=[numero];
var appleX=[numero];
var appleY=[numero];
var pineAppleX=[numero];
var pineAppleY=[numero];
var playerX=0;
var playerY=0;


imagen.addEventListener("load", cargarFondo);
imagenBanana.addEventListener("load", cargarBanana);
imagenApple.addEventListener("load", cargarApple);
imagenPineapple.addEventListener("load", cargarPineapple);
imagenPlayer.addEventListener("load", cargarPlayer);


function cargarFondo() {
    papel.drawImage(imagen, 0, 0);
}

function cargarBanana() {
    for(i=0;i<numero;i++){
        var x=numeroAleatorio(minimoX,maximoX);
        var y=numeroAleatorio(minimoY,maximoY);
        papel.drawImage(imagenBanana, x, y);
        bananaX[i]=x;
        bananaY[i]=y;
    }

}

function cargarApple() {
    for(i=0;i<numero;i++){
        var x=numeroAleatorio(minimoX,maximoX);
        var y=numeroAleatorio(minimoY,maximoY);
        papel.drawImage(imagenApple, x, y);
        appleX[i]=x;
        appleY[i]=y;
    }

}

function cargarPineapple() {
    for(i=0;i<numero;i++){
        var x=numeroAleatorio(minimoX,maximoX);
        var y=numeroAleatorio(minimoY,maximoY);
        papel.drawImage(imagenPineapple, x, y);
        pineAppleX[i]=x;
        pineAppleY[i]=y;
    }

}

function cargarPlayer() {
    
    var x=numeroAleatorio(minimoX,maximoX);
    var y=numeroAleatorio(minimoY,maximoY);
    papel.drawImage(imagenPlayer, x, y);
    playerX=x;
    playerY=y;

}

document.addEventListener("keydown", moverPlayer);
document.addEventListener("keyup", silenciarPasos);
/*document.addEventListener("mousemove", moverPlayerTactil);

function moverPlayerTactil(evento) {
    if(stop==false){
        papel.clearRect(0, 0, cuadro.width, cuadro.height);
        papel.drawImage(imagen, 0, 0);
        for(i=0;i<bananaX.length;i++){
            papel.drawImage(imagenBanana, bananaX[i], bananaY[i]);
        }
        for(i=0;i<appleX.length;i++){
            papel.drawImage(imagenApple, appleX[i], appleY[i]);
        }
        for(i=0;i<pineAppleX.length;i++){
            papel.drawImage(imagenPineapple, pineAppleX[i], pineAppleY[i]);
        }

        papel.drawImage(imagenPlayer,evento.clientX-435, evento.clientY-100);
                playerY= evento.clientY-100;
                playerX= evento.clientX-435;
                pasoSound();
                comerFruta();
        
    }else if(stop==true){
        console.log("paralizado");
    }

}*/

function silenciarPasos(){
    stopPasoSound();
}

arriba.addEventListener("click",subirPlayer);
abajo.addEventListener("click",bajarPlayer);
izquierda.addEventListener("click",izquierdaPlayer);
derecha.addEventListener("click",derechaPlayer);

function subirPlayer(){
    papel.clearRect(0, 0, cuadro.width, cuadro.height);
    papel.drawImage(imagen, 0, 0);
    for(i=0;i<bananaX.length;i++){
        papel.drawImage(imagenBanana, bananaX[i], bananaY[i]);
    }
    for(i=0;i<appleX.length;i++){
        papel.drawImage(imagenApple, appleX[i], appleY[i]);
    }
    for(i=0;i<pineAppleX.length;i++){
        papel.drawImage(imagenPineapple, pineAppleX[i], pineAppleY[i]);
    }
    papel.drawImage(imagenPlayer, playerX, playerY-velocidad);
    playerY= playerY-velocidad;
    pasoSound();
    comerFruta();
}

function bajarPlayer(){
    papel.clearRect(0, 0, cuadro.width, cuadro.height);
    papel.drawImage(imagen, 0, 0);
    for(i=0;i<bananaX.length;i++){
        papel.drawImage(imagenBanana, bananaX[i], bananaY[i]);
    }
    for(i=0;i<appleX.length;i++){
        papel.drawImage(imagenApple, appleX[i], appleY[i]);
    }
    for(i=0;i<pineAppleX.length;i++){
        papel.drawImage(imagenPineapple, pineAppleX[i], pineAppleY[i]);
    }
    papel.drawImage(imagenPlayer, playerX, playerY+velocidad);
    playerY= playerY+velocidad;
    pasoSound();
    comerFruta();
}


function izquierdaPlayer(){
    papel.clearRect(0, 0, cuadro.width, cuadro.height);
    papel.drawImage(imagen, 0, 0);
    for(i=0;i<bananaX.length;i++){
        papel.drawImage(imagenBanana, bananaX[i], bananaY[i]);
    }
    for(i=0;i<appleX.length;i++){
        papel.drawImage(imagenApple, appleX[i], appleY[i]);
    }
    for(i=0;i<pineAppleX.length;i++){
        papel.drawImage(imagenPineapple, pineAppleX[i], pineAppleY[i]);
    }
    papel.drawImage(imagenPlayer, playerX-velocidad, playerY);
    playerX=playerX-velocidad;
    pasoSound();
    comerFruta();
}



function derechaPlayer(){
    papel.clearRect(0, 0, cuadro.width, cuadro.height);
    papel.drawImage(imagen, 0, 0);
    for(i=0;i<bananaX.length;i++){
        papel.drawImage(imagenBanana, bananaX[i], bananaY[i]);
    }
    for(i=0;i<appleX.length;i++){
        papel.drawImage(imagenApple, appleX[i], appleY[i]);
    }
    for(i=0;i<pineAppleX.length;i++){
        papel.drawImage(imagenPineapple, pineAppleX[i], pineAppleY[i]);
    }
    papel.drawImage(imagenPlayer, playerX+velocidad, playerY);
    playerX=playerX+velocidad;
    pasoSound();
    comerFruta();
}

function moverPlayer(evento) {
    if(stop==false){
        papel.clearRect(0, 0, cuadro.width, cuadro.height);
        papel.drawImage(imagen, 0, 0);
        for(i=0;i<bananaX.length;i++){
            papel.drawImage(imagenBanana, bananaX[i], bananaY[i]);
        }
        for(i=0;i<appleX.length;i++){
            papel.drawImage(imagenApple, appleX[i], appleY[i]);
        }
        for(i=0;i<pineAppleX.length;i++){
            papel.drawImage(imagenPineapple, pineAppleX[i], pineAppleY[i]);
        }

        switch (evento.keyCode) {
            case teclas.UP:
                papel.drawImage(imagenPlayer, playerX, playerY-velocidad);
                playerY= playerY-velocidad;
                pasoSound();
                comerFruta();
                break;
            case teclas.DOWN:
                papel.drawImage(imagenPlayer, playerX, playerY+velocidad);
                playerY= playerY+velocidad;
                pasoSound();
                comerFruta();
                break;
            case teclas.LEFT:
                papel.drawImage(imagenPlayer, playerX-velocidad, playerY);
                playerX=playerX-velocidad;
                pasoSound();
                comerFruta();
                break;
            case teclas.RIGHT:
                papel.drawImage(imagenPlayer, playerX+velocidad, playerY);
                playerX=playerX+velocidad;
                pasoSound();
                comerFruta();
                break;
            default:
                alert("USER A - W - S - D  PARA MOVER SU JUGADOR");
                papel.drawImage(imagenPlayer, playerX, playerY);
        }
    }else if(stop==true){
        console.log("paralizado");
    }

}

function numeroAleatorio(min,max){
    var final;
    final=Math.floor(Math.random()*(max-min+1)) +min;
    return final
}

function comerFruta(){
    for(i=0;i<numero;i++){
        if(playerX>=(bananaX[i]-63)&&playerX<=bananaX[i]&&playerY>=bananaY[i]-69&&playerY<=bananaY[i]){
            //alert("COMISTE UNA BANANA!");
            bananaX.splice(i,1);
            comerSound();
            borrarFruta();
        }
        if(playerX>=(appleX[i]-63)&&playerX<=appleX[i]&&playerY>=appleY[i]-69&&playerY<=appleY[i]){
            //alert("COMISTE UNA MANZANA!");
            appleX.splice(i,1);
            comerSound();
            borrarFruta();
        }
        if(playerX>=(pineAppleX[i]-63)&&playerX<=pineAppleX[i]&&playerY>=pineAppleY[i]-69&&playerY<=pineAppleY[i]){
            //alert("COMISTE UNA PIÑA!");
            pineAppleX.splice(i,1);
            comerSound();
            borrarFruta(); 
        }
        //console.log(playerX,bananaX[i],playerY,bananaY[i]);
        //console.log(playerX,appleX[i],playerY,appleY[i]);
        console.log(playerX,pineAppleX[i],playerY,pineAppleY[i]);
    }
}

function borrarFruta(){
    if(bananaX.length>0||pineAppleX.length>0||appleX.length>0){
        papel.clearRect(0, 0, cuadro.width, cuadro.height);
        papel.drawImage(imagen, 0, 0);
        for(i=0;i<bananaX.length;i++){
            papel.drawImage(imagenBanana, bananaX[i], bananaY[i]);
        }
        for(i=0;i<appleX.length;i++){
            papel.drawImage(imagenApple, appleX[i], appleY[i]);
        }
        for(i=0;i<pineAppleX.length;i++){
            papel.drawImage(imagenPineapple, pineAppleX[i], pineAppleY[i]);
        }
        papel.drawImage(imagenPlayer, playerX, playerY);
    }else{
        siguenteNivel();
    }

}

function siguenteNivel(){
    if(nivel<=6){

        nivel=nivel+1;
        level.innerHTML = nivel;
        bananaX.pop();
        pineAppleX.pop();
        appleX.pop();
        numero=numero+1;
        velocidad=velocidad-1.5;
        papel.clearRect(0, 0, cuadro.width, cuadro.height);
        cargarFondo();
        cargarApple();
        cargarBanana();
        cargarPineapple();
        cargarPlayer();
        stopMusic();
        nivelSound();
    }else{
        stop=true;
        stopPasoSound();
        papel.clearRect(0, 0, cuadro.width, cuadro.height);
        papel.drawImage(imagen, 0, 0);
        papel.drawImage(imagenWin, 200,200);
        if(musica==false){
            play();
            musica=true;
        }
    }
    
}


