const canvas = document.querySelector("canvas");
let image = new Image;
image.src = "https://www.bouncingdvdlogo.com/logos/dvdlogo-02.svg";

let cd = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;

let x = 0;
let y = 0;
let turn = "top-left";

canvas.width = width;
canvas.height = height;


function animate() {
    requestAnimationFrame(animate);
    checkTurn();
    cd.clearRect(0,0,canvas.width,canvas.height);
    if(y > height - 100 && x > width - 200){
        turn = "bottom-right";
        random();
    }
    else if(y < 0 && x === 1080){
        turn = "top-right";
        random();
    }
    else if(y > height - 100 && x < 0){
        turn = "bottom-left";
        random();
    }
    else if(y < 0 && x === 0){
        turn = "top-left";
        random();
    }

    cd.drawImage(image,x,y,200,100);
}

animate();
function checkTurn() {
    switch(turn) {
        case "top-left":
            x ++;
            y += 0.5;
        break;
        case "bottom-right":
            x = 1080;
            y -= 1;
        break;
        case "top-right":
            x--;
            y += 0.5;
        break;
        case "bottom-left":
            x = 0;
            y -= 1;
        break;
    }
}

function random() {
    let randomColor = Math.floor(Math.random() * 6) + 1;
    let imageSrc = "https://www.bouncingdvdlogo.com/logos/dvdlogo-0" + randomColor + ".svg";
    image.src = imageSrc;
}