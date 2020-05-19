
let canvas = document.getElementById("snake");

//renderizar a imagem
let context = canvas.getContext("2d");
let box = 32; //32px cada quadrado

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

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

function initGame(){
    createBackground();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY += box;
    if (direction == "down") snakeY -= box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(initGame, 100);
