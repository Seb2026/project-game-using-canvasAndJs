const canvas = document.querySelector(`#canvas`);
const context = canvas.getContext(`2d`);

const covid19Obj = {
    x: 30,
    y: 250,
    width: 100,
    height: 100,
    radius: 100/2
    
};

const lungs = {
    x: 800,
    y: 100,
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
        y : 20 + Math.random() * 300,
        width : 70 + Math.random() * 100,
        height : null,
        img : new Image(),
        radius: null
    };
    whiteBloodObj.img.src = `./Images/white-blood-cell.png`;
    whiteBloodObj.height = whiteBloodObj.width;
    whiteBloodObj.radius = whiteBloodObj.width/2;
    return whiteBloodObj;
}

const whiteBloodArr = [];
let score = 0;

updateTotal = () => {
    const totalCell = document.querySelector(`#instructions2 span`);
    return totalCell.innerHTML = score;
}


const startBtn = document.querySelector(`.btn`);
startBtn.addEventListener(`click`, () => {
    startGame();
});
let drawEverInterval;
let whiteBloodInterval;

const startGame = () => {
    startGame2();
    const instructionsLeft = document.querySelector(`#instructions2`);
    instructionsLeft.style.display = `block`;
    const instructionsRight = document.querySelector(`#instructions3`);
    instructionsRight.style.display = `block`;
    const canvasBlock = document.querySelector(`#canvas`);
    canvasBlock.style.display = `block`;
}
const startGame2 = () => {
    clearAll();
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
    let isGameOver = false;
    backgroundImg.src = `./Images/covid-background-inside-body.jpg`;
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    const covid19Img = new Image();
    covid19Img.src = `./Images/covid-19.png`;
    context.drawImage(covid19Img, covid19Obj.x, covid19Obj.y, covid19Obj.width, covid19Obj.height);
    whiteBloodArr.forEach((elem, i) => {
        if(elem.x === -100){
            score += 1;
            updateTotal();
            // whiteBloodArr.splice(i, 1);
            
        }
        else if(collisionDetection(covid19Obj, elem)) {
            isGameOver = true;
        } 
        drawObject(elem);
    });
    if(isGameOver) {
        gameOver();       
    }
    if (score > 13){
        lungsTime();
    }
    if(collisionDetectLungs(lungs)){
        winGame();
    }
    
}

// movements
document.addEventListener(`keydown`, event => {
    switch(event.code){
        case `ArrowUp`:
            event.preventDefault();
            if(covid19Obj.y >= 25)
            covid19Obj.y -= 30;
            break;
        case `ArrowDown`:
            event.preventDefault();
            if(covid19Obj.y <= 370)
            covid19Obj.y += 30;
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
        gameOver2();
    }
    lungs.x -= 5;
    lungs.y += 1.5;
    context.drawImage(lungs.img, lungs.x, lungs.y, lungs.width, lungs.height);
}


const whiteBloodCell = () => {
        if(whiteBloodArr.length < 18) {
            whiteBloodArr.push(whiteBloodObjs())
        }
        
    // }
}

// collision


const collisionDetection = (covid19Obj, elem ) => {
    // if (
    //   (
    //     covid19Obj.x + covid19Obj.width < secondObj.x ||
    //     covid19Obj.x > secondObj.x + secondObj.width ||
    //     covid19Obj.y > secondObj.y + secondObj.height  ||
    //     covid19Obj.y + covid19Obj.height < secondObj.y
    //   )
    // ) {
    //   return false;
    // }
    // return true;

    const dx = covid19Obj.x - elem.x;
    const dy= covid19Obj.y - elem.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= covid19Obj.radius + elem.radius - 15){
        return true;
    } else {
        return false;
    }
  }

  const collisionDetectLungs = (secondObj) => {
          if (
      (
        covid19Obj.x + covid19Obj.width - 23 < secondObj.x ||
        covid19Obj.x > secondObj.x + secondObj.width + 3  ||
        covid19Obj.y > secondObj.y + secondObj.height + 3  ||
        covid19Obj.y + covid19Obj.height - 23 < secondObj.y
      )
    ) {
      return false;
    }
    return true;
  }


  




  const lungsTime = () => {
        // clearInterval(drawEverInterval);
        clearInterval(whiteBloodInterval);
        // clearAll()
       drawLung();

  }

  const gameOver = () => {
      clearInterval(whiteBloodInterval);
      clearInterval(drawEverInterval);
      clearAll();
      context.font = `100px Arial`;
      context.fillStyle = `red`;
      context.textAlign = `center`;
      context.fillText(`GAME OVER`, canvas.width/2, canvas.height/2 + 100);
      context.font= `23px Arial`;
      context.fillText(`NOT STRONG ENOUGH AGAINST THESE WHITE BLOOD CELLS`, canvas.width/2, canvas.height/2 -100);

  }

  const gameOver2 = () => {
    clearInterval(whiteBloodInterval);
    clearInterval(drawEverInterval);
    clearAll();
    context.font = `100px Arial`;
    context.fillStyle = `red`;
    context.textAlign = `center`;
    context.fillText(`GAME OVER`, canvas.width/2, canvas.height/2 + 100);
    context.font= `23px Arial`;
    context.fillText(`YOU MISSED THE LUNGS! `, canvas.width/2, canvas.height/2 -100);
    
}

const winGame = () => {
    clearInterval(whiteBloodInterval);
    clearInterval(drawEverInterval);
    clearAll();
    const ending = document.querySelector(`#gameover`);
    ending.style.display = `block`;
}