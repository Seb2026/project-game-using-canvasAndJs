const canvas = document.querySelector(`#canvas`);
const context = canvas.getContext(`2d`);

const covid19Obj = {
    x: 30,
    y: 250,
    width: 100,
    height: 100,
    radius: this.width/2 + this.height^2/(8*this.width)
    
};

const lungs = {
    x: 800,
    y: 230,
    width: 100,
    height: 100,
    img: new Image()
}
lungs.img.src = `./Images/lungs2.png`;

// make random y and random height

const randomY = 100 + Math.random() * 300;
const randomHeight = 70 + Math.random() * 150;
const randomWidth = 40 + Math.random() * 100;
const whiteBloodObjs = () => {
    const whiteBloodObj ={
        x :800,
        y : 100 + Math.random() * 300,
        width : 40 + Math.random() * 100,
        height : 70 + Math.random() * 150,
        img : new Image(),
        radius: this.width/2 + this.height^2/(8*this.width)
    };
    whiteBloodObj.img.src = `./Images/white-blood-cell.png`;
    return whiteBloodObj;
}

const whiteBloodArr = [];
let score = 0;


const startBtn = document.querySelector(`.btn`);
startBtn.addEventListener(`click`, () => {
    startGame();
});
let drawEverInterval;
let whiteBloodInterval;
const startGame = () => {
    // introText();
    drawEverInterval = setInterval(drawEverything, 30);
    whiteBloodInterval = setInterval(whiteBloodCell, 3000);
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
        if(elem.x === -100){
            score += 1;
            console.log(`score: ${score}`);
            whiteBloodArr.splice(i, 1);

        }
        else if(collisionDetection(covid19Obj, elem)) {
            console.log(`hit`);
        } 
        // else if(score === 5){
        //     lungsTime();
        // }
        drawObject(elem);
    });
    if (score > 5){
        lungsTime();
    }
    
}

// movements
document.addEventListener(`keydown`, event => {
    switch(event.code){
        case `KeyW`:
            if(covid19Obj.y >= 25)
            covid19Obj.y -= 25;
            break;
        case `KeyS`:
            if(covid19Obj.y <= 370)
            covid19Obj.y += 25;
            break;
        default:
            alert("Can only use UP and DOWN arrows!")
    }
});

//obstacle
const drawObject = (object) => {
    object.x -= 4;
    context.drawImage(object.img, object.x, object.y, object.width, object.height);

}

const drawLung = () => {
    if (lungs.x === -100){
        console.log(`YOU LOSE`);
    }
    lungs.x -= 3;
    context.drawImage(lungs.img, lungs.x, lungs.y, lungs.width, lungs.height);
}


const whiteBloodCell = () => {
        if(whiteBloodArr.length < 3) {
            whiteBloodArr.push(whiteBloodObjs())
        }
        
    // }
}




const collisionDetection = (covid19Obj, secondObj ) => {
    if (
      (
        covid19Obj.x + covid19Obj.width < secondObj.x ||
        covid19Obj.x > secondObj.x + secondObj.width ||
        covid19Obj.y > secondObj.y + secondObj.height  ||
        covid19Obj.y + covid19Obj.height < secondObj.y
      )
    ) {
      return false;
    }
    return true;

//     const dx = covid19Obj.x - elem.x;
//     const dy= covid19Obj.y - elem.y;

//     const distance = Math.sqrt(dx * dx + dy * dy);

//     if (distance <= covid19Obj.radius + elem.radius){
//         return true;
//     } else {
//         return false;
//     }
  }




  const lungsTime = () => {
        // clearInterval(drawEverInterval);
        clearInterval(whiteBloodInterval);
        // clearAll()
       drawLung();


      

  }