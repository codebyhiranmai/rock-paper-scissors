let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const yourMove=document.querySelector("#msg")
const userScoreNo=document.querySelector("#user-score");
const compScoreNo=document.querySelector("#computer-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    yourMove.innerHTML = "Game is DRAW. Play Again!";
    yourMove.style.backgroundColor = "#081b31"; // Reset background color
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreNo.innerText = userScore;
        console.log("YOU WON!");
        yourMove.innerHTML=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
        yourMove.style.backgroundColor="green";
    }else{
        compScore++;
        compScoreNo.innerText = compScore;
        yourMove.innerHTML=`YOU LOST! ${compChoice} beats Your ${userChoice}`;
        yourMove.style.backgroundColor="red";
    };
};

const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    // Generate comp choice
    const compChoice=genCompChoice();
    console.log("comp choice= ",compChoice);

    if(userChoice===compChoice){
        // calling draw function
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper,scissors
            userWin = compChoice ==="paper"? false : true;
        }else if(userChoice==="paper"){
            // rock,scissors
            userWin = compChoice === "scissors"? false : true;
        }else{
            // rock,paper
            userWin = compChoice === "rock"? false : true;
        };
        showWinner(userWin,userChoice,compChoice);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});