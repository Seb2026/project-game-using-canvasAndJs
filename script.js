const canvas = document.querySelector(`#canvas`);
const context = canvas.getContext(`2d`);

const covid19Obj = {
    x: 30,
    y: 250,
    width: 100,
    height: 100,
    velX: 0,
    velY: 2
    
};

const whiteBloodObj = {
    x: 650,
    y: 250,
    width: 100,
    height: 100
};



const startBtn = document.querySelector(`.btn`);
startBtn.addEventListener(`click`, () => {
    startGame();
});

const startGame = () => {
    // introText();
    // setInterval(clearAll, 5000);
    drawBackground();
    whiteBloodCell();
    requestAnimationFrame(startGame);
}

const clearAll = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// const introText = () =>{
//     context.fillStyle = `white`;
//     context.font= `40px Arial`;
//     context.fillText(`THE YEAR IS 2020 ...`, 200, 250);
// }


const drawBackground = () => {
    const backgroundImg = new Image();
    backgroundImg.src = `./Images/covid-background-inside-body.jpg`;
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    const covid19Img = new Image();
    covid19Img.src = `./Images/covid-19.png`;
    context.drawImage(covid19Img, covid19Obj.x, covid19Obj.y, covid19Obj.width, covid19Obj.height);

}

// movements
document.addEventListener(`keydown`, event => {
    switch(event.code){
        case `ArrowUp`:
            if(covid19Obj.y >= 25)
            covid19Obj.y -= 50;
            break;
        case `ArrowDown`:
            if(covid19Obj.y <= 350)
            covid19Obj.y += 50;
            break;
        default:
            console.log(`You must use ONLY space!`);
    }
});

const whiteBloodCell = () => {
    const whiteBloodImg = new Image();
    whiteBloodImg.src = `./Images/white-blood-cell.png`;
    context.drawImage(whiteBloodImg, whiteBloodObj.x, whiteBloodObj.y, whiteBloodObj.width, whiteBloodObj.height);
    whiteBloodObj.x -= 4;
}

// auto move player





