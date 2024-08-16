let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice =()=>{
    let options=["rock","paper","scissors"];
    let opt = Math.floor(Math.random()*3);
    return options[opt];
}

const drawGame=()=>{
 msg.innerText="Game draw! play again";
 msg.style.backgroundColor="#081b31";
}

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        document.querySelector("#user_score").innerText=`${userScore}`;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        document.querySelector("#comp_score").innerText=`${compScore}`;
        msg.innerText=`You lose! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }
}

const playGame=(userChoice)=>{
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"? false: true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"? false: true;
        }
        else {
            userWin= compChoice==="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});