//make strings variables 
//create function that randomly returns one of the strings 

let str1 = "rock"
let str2 =  "paper"
let str3 = "scissors"
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
let randomStr = Math.random();

if (randomStr < 0.33) {
  return str1;
} else if (randomStr < 0.66) {
  return str2;
} else {
  return str3;
}
};

// Function to get human's choice
function getHumanChoice () {
const humanChoice = prompt("Choose: rock, paper, or scissors");

 // Check if user pressed Cancel
if (humanChoice === null) {
  console.log("You cancelled the prompt.");
  return null; // or return a default value if you want
}

return humanChoice.toLowerCase();
};

// Function to play one round of Rock-Paper-Scissors
function playRound(humanChoice, computerChoice){
console.log(`You chose: ${humanChoice}`);
console.log(`Computer chose: ${computerChoice}`);

if (humanChoice === computerChoice) {
  console.log("It's a tie");
} else if (
(humanChoice === "rock" && computerChoice === "scissors") ||
(humanChoice === "scissors" && computerChoice === "paper") ||
(humanChoice === "paper" && computerChoice === "rock")
) {
  console.log("You win this round!");
  humanScore++;
} else {
  console.log("Computer wins this round!");
  computerScore++;
}

console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
};

// Function to play 5 rounds of Rock-Paper-Scissors
function playGame () {
for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`round ${i + 1}`);
}

if (humanScore > computerScore) {
  console.log("you win!");
} else if (humanScore < computerScore) {
  console.log("computer wins!");        
} else {
 console.log("The game is a tie!");
}
};

playGame();