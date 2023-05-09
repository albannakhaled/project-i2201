const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;

function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "player";
  } else {
    computerScore++;
    return "computer";
  }
}

function showWinner(winner) {
  if (winner === "player") {
    result.innerHTML = `You win! Score: ${playerScore}-${computerScore}`;
  } else if (winner === "computer") {
    result.innerHTML = `Computer wins! Score: ${playerScore}-${computerScore}`;
  } else {
    result.innerHTML = "It's a tie!";
  }
}

choices.forEach(choice => choice.addEventListener("click", play));
