let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.textContent = "Game was draw, play again!";
    msg.style.background = "#081b31";
};

const showWinner = (userWin, choiceId, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.textContent = `You win! your ${choiceId} beats ${compChoice}`;
        msg.style.background = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.textContent = `You lose, ${compChoice} beats your ${choiceId}`;
        msg.style.background = "red";
    }
};

const playGame = (choiceId) => {
    const compChoice = genCompChoice();

    if (choiceId === compChoice) {
        drawGame();
    } else {

        let userWin = true;

        if (choiceId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, choiceId, compChoice);

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});