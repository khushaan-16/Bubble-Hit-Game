
var timer = 60;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;     // score logic
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;      // hit logic
}


function makeBubble(){
var clutter = "";
for(var i=1;i<162;i++){
    var rn = Math.floor(Math.random()*10)     // to generate random whole numbers 
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector(".pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent = timer;    //timer logic
        }else{
            clearInterval(timerint);
            document.querySelector(".pbottom").innerHTML = `<h1>Game Over`;
        }
    }, 1000)
}


// logic for clicking on number bubble
document.querySelector(".pbottom")
addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})



getNewHit();
runTimer();
makeBubble();