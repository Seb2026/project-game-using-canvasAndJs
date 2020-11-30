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

// make random y and random height

const randomY = 100 + Math.random() * 300;
const randomHeight = 50 + Math.random() * 150;
randomWidth = 60 + Math.random() * 150;
const whiteBloodObj ={
    x :800,
    y : randomY,
    width : randomWidth,
    height : randomHeight,
    img : new Image()
};
whiteBloodObj.img.src = `./Images/white-blood-cell.png`;

const whiteBloodArr = [];



const startBtn = document.querySelector(`.btn`);
startBtn.addEventListener(`click`, () => {
    startGame();
});

const startGame = () => {
    // introText();
    setInterval(drawEverything, 50);
    whiteBloodCell();
}

const clearAll = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// const introText = () =>{
//     context.fillStyle = `white`;
//     context.font= `40px Arial`;
//     context.fillText(`THE YEAR IS 2020 ...`, 200, 250);
// }


const drawEverything = () => {
    const backgroundImg = new Image();
    backgroundImg.src = `./Images/covid-background-inside-body.jpg`;
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    const covid19Img = new Image();
    covid19Img.src = `./Images/covid-19.png`;
    context.drawImage(covid19Img, covid19Obj.x, covid19Obj.y, covid19Obj.width, covid19Obj.height);
    whiteBloodArr.forEach((elem) => {
        drawWhiteBlood(elem);
    });

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
            alert("Can only use UP and DOWN arrows!")
    }
});

//obstacle
const drawWhiteBlood = (object) => {
    object.x -= 0.4;
    context.drawImage(object.img, object.x, object.y, object.width, object.height);

}


const whiteBloodCell = () => {
    setInterval(() => {
        whiteBloodArr.push(whiteBloodObj);
    }, 1000);
}






