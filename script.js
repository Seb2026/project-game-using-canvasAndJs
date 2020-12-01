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
        y : 100 + Math.random() * 300,
        width : 60 + Math.random() * 150,
        height : 50 + Math.random() * 150,
        img : new Image()
    };
    whiteBloodObj.img.src = `./Images/white-blood-cell.png`;
    return whiteBloodObj;
}

const whiteBloodArr = [];



const startBtn = document.querySelector(`.btn`);
startBtn.addEventListener(`click`, () => {
    startGame();
});

const startGame = () => {
    // introText();
    setInterval(drawEverything, 50);
    setInterval(whiteBloodCell, 4000);
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
    whiteBloodArr.forEach((elem, i) => {
        if(elem.x < -400) {
            whiteBloodArr.splice(i, 1);
        } else {
            drawWhiteBlood(elem);
        }
    });

}

// movements
document.addEventListener(`keydown`, event => {
    switch(event.code){
        case `KeyW`:
            if(covid19Obj.y >= 25)
            covid19Obj.y -= 50;
            break;
        case `KeyS`:
            if(covid19Obj.y <= 350)
            covid19Obj.y += 50;
            break;
        default:
            alert("Can only use UP and DOWN arrows!")
    }
});

//obstacle
const drawWhiteBlood = (object) => {
    object.x -= 4;
    context.drawImage(object.img, object.x, object.y, object.width, object.height);

}


const whiteBloodCell = () => {
    // whiteBloodObj1.y = 100 + Math.random() * 300;
    // whiteBloodObj1.width = 60 + Math.random() * 150;
    // whiteBloodObj1.height = 50 + Math.random() * 150;
    // for(let i=1; i <= 9; i++){
        if(whiteBloodArr.length < 5) {
            whiteBloodArr.push(whiteBloodObjs())
        }
        
    // }
}


