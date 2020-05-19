
let canvas = document.getElementById("snake");

//renderizar a imagem
let context = canvas.getContext("2d");
let box = 32; //32px cada quadrado

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function createBackground() {
    //definir a cor do background
    context.fillStyle = "lightgreen";

    //desenhar o retangulo onde acontece o jogo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//create snake in the center of background
function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }

}



createBackground();
createSnake();