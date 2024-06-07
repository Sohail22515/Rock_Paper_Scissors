// console.log("hello");

let userScore=0;
let compScore=0;
let uscore=document.getElementById("yourScore");
let cscore=document.getElementById("compScore");
let display=document.getElementById("winn");
const choices=document.querySelectorAll(".choice");
document.getElementById("winn").style.display="none";


choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const choiceId=choice.getAttribute("id");
        let dp;// user choice
        if(choiceId==="rock"){dp=0;}
        else if(choiceId==="paper"){dp=1;}
        else{dp=2;}
        // console.log(choiceId, "was clicked");
        document.getElementById("yourChoice").src="./images/" + choiceId +".png";
        let cp=computerChoice(); //computer choice
        reslultAnnounce(dp,cp);
        document.getElementById("winn").style.display="inline";

    });
});

function computerChoice(){
    let num=Math.floor(Math.random()*3);
    // console.log(num);
    if(num===0){//rock
    document.getElementById("compChoice").src="./images/rock.png";
    }
    else if(num==1){//paper
        document.getElementById("compChoice").src="./images/paper.png";
    }
    else{//scissors
        document.getElementById("compChoice").src="./images/scissors.png";
    }
    return num; 
}

function reslultAnnounce(dp,cp){
    if(dp<cp){
        // console.log("yes");
        if(cp-dp===1){
            compScore++;
            display.innerText="You Lose!";
        }
        else{
            userScore++;
            display.innerText="You Winn!";
        }
    }
    else if(dp>cp){
        // console.log("no");
        if(dp-cp===1){
            userScore++;
            display.innerText="You Winn!";
        }
        else{
            compScore++;
            display.innerText="You Lose!";
        }
    }
    else{
        // console.log("i know");
        display.innerText="It's a Draw";
    }
    // console.log("compScore=",compScore);
    // console.log("userScore=",userScore);
    uscore.innerHTML=userScore;
    cscore.innerHTML=compScore;
}

