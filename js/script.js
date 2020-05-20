
let canvas = document.getElementById("snake");

//renderizar a imagem
let context = canvas.getContext("2d");
let box = 32; //32px cada quadrado

//object that represents snake
let snake = [];

//snake[0] is the snake head
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

function dramFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

function initGame(){

    //doing snake cross the canvas and reappeared in the other side
    if ((snake[0].x > 15 * box) && (direction == "right")) snake[0].x = 0;
    if ((snake[0].x < 0) && (direction == "left")) snake[0].x = 16 * box;
    if ((snake[0].y > 15 * box) && (direction == "down")) snake[0].y = 0;
    if ((snake[0].y < 0) && (direction == "up")) snake[0].y = 16 * box;

    //check if the snake's head hit its body. if true, Game Over
    for (i = 1; i < snake.length ;i++){
        if ((snake[0].x == snake[i].x) && (snake[0].y == snake[i].y)){
            clearInterval(game);
            alert("Game Over :(");
        }
    }

    createBackground();
    createSnake();
    dramFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if ((snakeX != food.x) || (snakeY != food.y)){
        snake.pop();
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(initGame, 100);
