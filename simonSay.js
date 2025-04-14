let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

let btns = ["one", "two", "three", "four"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is start");
        started = true;

        levelUp();
    }
})



function levelUp() {
   
    level++;
    h3.innerText = `Level ${level}`;


    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

function checkAns(idx) {
   
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            levelUp();
        }
    } else {
        h3.innerHTML= `Game Over! Your score was <b> ${level} </b> <br> Press any key to start.`;
        let highest = level;
        document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
       }, 2000);
    
        reset();
        h3.innerHTML = `Your highest score is ${highest}`;
    }
}

function gameFlash(btn) {
    btn.classList.add("white");
    setTimeout(function () {
        btn.classList.remove("white");
    }, 30)
}


function btnPress() {
    let btn = this;
    gameFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll('.btn');
for (bttn of allBtn) {
    bttn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}