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
const whiteBloodObj4 = whiteBloodObjs();
const whiteBloodObj5 = whiteBloodObjs();
const whiteBloodObj6 = whiteBloodObjs();
const whiteBloodObj7 = whiteBloodObjs();
const whiteBloodObj8 = whiteBloodObjs();
const whiteBloodObj9 = whiteBloodObjs();



const whiteBloodArr = [];



const startBtn = document.querySelector(`.btn`);
startBtn.addEventListener(`click`, () => {
    startGame();
});

const startGame = () => {
    // introText();
    setInterval(drawEverything, 50);
    setInterval(whiteBloodCell, 500);
    setInterval(whiteBloodCell2, 500);
    setInterval(whiteBloodCell3, 599);
    setInterval(whiteBloodCell4, 500);
    setInterval(whiteBloodCell5, 500);
    setInterval(whiteBloodCell6, 1500);
    setInterval(whiteBloodCell7, 1200);
    setInterval(whiteBloodCell8, 500);
    setInterval(whiteBloodCell9, 1000);
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
    object.x -= 3;
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
    if(whiteBloodObj1.x < 600){
        whiteBloodObj2.y = randomY2;
        whiteBloodObj2.width = randomWidth2;
        whiteBloodObj2.height = randomHeight2;
        whiteBloodArr.push(whiteBloodObj2);
    }
}

const randomY3 = 100 + Math.random() * 300;
const randomWidth3 = 60 + Math.random() * 150;
const randomHeight3 = 50 + Math.random() * 150;
const whiteBloodCell3 = () => {
    if(whiteBloodObj2.x < 600){
        whiteBloodObj3.y = randomY3;
        whiteBloodObj3.width = randomWidth3;
        whiteBloodObj3.height = randomHeight3;
        whiteBloodArr.push(whiteBloodObj3);
    }
}

const randomY4 = 100 + Math.random() * 300;
const randomWidth4 = 60 + Math.random() * 150;
const randomHeight4 = 50 + Math.random() * 150;
const whiteBloodCell4 = () => {
    if(whiteBloodObj3.x < 600){
        whiteBloodObj4.y = randomY4;
        whiteBloodObj4.width = randomWidth4;
        whiteBloodObj4.height = randomHeight4;
        whiteBloodArr.push(whiteBloodObj4);
    }
}

const randomY5 = 100 + Math.random() * 300;
const randomWidth5 = 60 + Math.random() * 150;
const randomHeight5 = 50 + Math.random() * 150;
const whiteBloodCell5 = () => {
    if(whiteBloodObj4.x < 600){
        whiteBloodObj5.y = randomY5;
        whiteBloodObj5.width = randomWidth5;
        whiteBloodObj5.height = randomHeight5;
        whiteBloodArr.push(whiteBloodObj5);
    }

}

const randomY6 = 100 + Math.random() * 300;
const randomWidth6 = 60 + Math.random() * 150;
const randomHeight6 = 50 + Math.random() * 150;
const whiteBloodCell6 = () => {
    if(whiteBloodObj5.x < 600){
        whiteBloodObj6.y = randomY6;
        whiteBloodObj6.width = randomWidth6;
        whiteBloodObj6.height = randomHeight6;
        whiteBloodArr.push(whiteBloodObj6);
    }
}

const randomY7 = 100 + Math.random() * 300;
const randomWidth7 = 60 + Math.random() * 150;
const randomHeight7 = 50 + Math.random() * 150;
const whiteBloodCell7 = () => {
    if(whiteBloodObj6.x < 600){
        whiteBloodObj7.y = randomY7;
        whiteBloodObj7.width = randomWidth7;
        whiteBloodObj7.height = randomHeight7;
        whiteBloodArr.push(whiteBloodObj7);
    }
}

const randomY8 = 100 + Math.random() * 300;
const randomWidth8 = 60 + Math.random() * 150;
const randomHeight8 = 50 + Math.random() * 150;
const whiteBloodCell8 = () => {
    if(whiteBloodObj7.x < 600){
        whiteBloodObj8.y = randomY8;
        whiteBloodObj8.width = randomWidth8;
        whiteBloodObj8.height = randomHeight8;
        whiteBloodArr.push(whiteBloodObj8);

    }
}

const randomY9 = 100 + Math.random() * 300;
const randomWidth9 = 60 + Math.random() * 150;
const randomHeight9 = 50 + Math.random() * 150;
const whiteBloodCell9 = () => {
    if(whiteBloodObj8.x < 600){
        whiteBloodObj9.y = randomY9;
        whiteBloodObj9.width = randomWidth9;
        whiteBloodObj9.height = randomHeight9;
        whiteBloodArr.push(whiteBloodObj9);
    }
    
}

