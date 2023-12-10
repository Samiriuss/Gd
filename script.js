let player = new Image();
let spike = new Image();
let background = new Image();

player.src = "player.png"
spike.src = "spike.png"
background.src = "background.png"

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 512;

let xPos = canvas.width / 5
let yPos = canvas.height / 1.3
let gravity = 5
let velY = yPos
let bgX = 0
let jumpState = false

setInterval(() => {
    ctx.drawImage(background, bgX, 0, 1024, 512);
    ctx.drawImage(background, 1024 + bgX, 0, 1024, 512);
    ctx.drawImage(player, xPos, yPos, 50, 50);
    bgX -=4

    if(bgX <= -1024){
        bgX = 0
    }
    if(jumpState){
    velY -= gravity * 2
    xPos += 3;
    yPos = velY
    if(yPos <= canvas.height - 125){
        jumpState = false
    }
    }
    else
    if(yPos >= canvas.height - 50){
    } else {
        xPos += 3;
        velY += gravity
        yPos = velY
    }
    
}, 33);

canvas.addEventListener("click", () =>{
    
    if(yPos >= canvas.height - 50){
    jumpState = true
    }
})
