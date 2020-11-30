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
const randomWidth = 60 + Math.random() * 150;
const whiteBloodObjs = () => {
    const whiteBloodObj ={
        x :800,
        y : null,
        width : null,
        height : null,
        img : new Image()
    };
    whiteBloodObj.img.src = `./Images/white-blood-cell.png`;
    return whiteBloodObj;
}
const whiteBloodObj1 = whiteBloodObjs();
const whiteBloodObj2 = whiteBloodObjs();
const whiteBloodObj3 = whiteBloodObjs();



const whiteBloodArr = [];



const startBtn = document.querySelector(`.btn`);
startBtn.addEventListener(`click`, () => {
    startGame();
});

const startGame = () => {
    // introText();
    setInterval(drawEverything, 50);
    setInterval(whiteBloodCell, 500);
    setInterval(whiteBloodCell2, 1500);
    setInterval(whiteBloodCell3, 2200);
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
    object.x -= 0.8;
    context.drawImage(object.img, object.x, object.y, object.width, object.height);

}
const randomY1 = 100 + Math.random() * 300;
const randomWidth1 = 60 + Math.random() * 150;
const randomHeight1 = 50 + Math.random() * 150;

const whiteBloodCell = () => {
    whiteBloodObj1.y = randomY1;
    whiteBloodObj1.width = randomWidth1
    whiteBloodObj1.height = randomHeight1;
    whiteBloodArr.push(whiteBloodObj1);
}

const randomY2 = 100 + Math.random() * 300;
const randomWidth2 = 60 + Math.random() * 150;
const randomHeight2 = 50 + Math.random() * 150;
const whiteBloodCell2 = () => {
    whiteBloodObj2.y = randomY2;
    whiteBloodObj2.width = randomWidth2;
    whiteBloodObj2.height = randomHeight2;
    whiteBloodArr.push(whiteBloodObj2);
}

const randomY3 = 100 + Math.random() * 300;
const randomWidth3 = 60 + Math.random() * 150;
const randomHeight3 = 50 + Math.random() * 150;
const whiteBloodCell3 = () => {
    whiteBloodObj3.y = randomY3;
    whiteBloodObj3.width = randomWidth3;
    whiteBloodObj3.height = randomHeight3;
    whiteBloodArr.push(whiteBloodObj3);
}






