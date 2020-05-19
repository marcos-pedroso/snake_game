
let canvas = document.getElementById("snake");

//renderizar a imagem
let context = canvas.getContext("2d");
let box = 32; //32px cada quadrado

function criarBG() {
    //definir a cor do background
    context.fillStyle = "lightgreen";

    //desenhar o retangulo onde acontece o jogo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();