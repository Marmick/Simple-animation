let char = document.querySelector("img.hero");
let shakeButton = document.querySelector("#shake");

shakeButton.addEventListener('click', makeShake);

function makeShake(){
    console.log("make shake");
    char.classList.toggle("shakeCSS");
}


char = document.querySelector("img.hero");
let flashButton = document.querySelector("#flash");

flashButton.addEventListener('click', makeFlash);

function makeFlash(){
    console.log("make flash");
    char.classList.toggle("flashCSS");
}


char= document.querySelector("img.hero");
let moveRightButton = document.querySelector("#moveright");

moveRightButton.addEventListener('click', makeMoveRight);

function makeMoveRight(){
    console.log("make move right");
    char.classList.toggle("moveRightCSS");
}


char = document.querySelector("img.hero");
let downButton = document.querySelector("#down");

downButton.addEventListener('click', moveDown);

function moveDown(){
    console.log("move down");
    char.classList.toggle("moveDownCSS");
}


char = document.querySelector("img.hero");
let rotateButton = document.querySelector("#rotate");

rotateButton.addEventListener('click', makeRotate);

function makeRotate(){
    console.log("make rotate");
    char.classList.toggle("makeRotateCSS");
}


char = document.querySelector("img.hero");
let scaleButton = document.querySelector("#scale");

scaleButton.addEventListener('click', makeScale);

function makeScale(){
    console.log("make lol scale");
    char.classList.toggle("makeScaleCSS");
}

char = document.querySelector("img.hero");
let moveButton = document.querySelector("#move");

moveButton.addEventListener('click', makeMove);

function makeMove(){
    console.log("make move");
    char.classList.toggle("makeMoveCSS");
}

char = document.querySelector("img.hero");
let mirrorButton = document.querySelector("#mirror");

mirrorButton.addEventListener('click', mirrorMove);

function mirrorMove(){
    console.log("make mirror");
    char.classList.toggle("makeMirrorCSS");
}

char = document.querySelector("img.hero");
let jumpingButton = document.querySelector("#jumping");

jumpingButton.addEventListener('click', makeJump);

function makeJump(){
    console.log("make jump");
    char.classList.toggle("makeJumpCSS");
}

char = document.querySelector("img.hero");
let moveFrom30Button = document.querySelector("#moveFrom30");

moveFrom30Button.addEventListener('click',moveFrom30);

function moveFrom30(){
    console.log("moveFrom30");
    char.classList.toggle("makeMoveFrom30CSS");
}

char = document.querySelector("img.hero");
let makeRadiusButton = document.querySelector("#makeRadius");

makeRadiusButton.addEventListener('click',makeRadius);

function makeRadius(){
    console.log("makeRadius");
    char.classList.toggle("makeRadiusCSS");
}







    
    