// Function to get the user's choice
function getUserChoice() {
    let userInput = prompt("Choose rock, paper, or scissors:").toLowerCase();

    // Validate the user input
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        alert("Invalid choice! Please choose rock, paper, or scissors.");
        return getUserChoice();
    }
}

// Function to get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Main function to play the game
function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();

    // Display user and computer choices
    alert(`You chose: ${userChoice}`);
    alert(`Computer chose: ${computerChoice}`);

    // Determine and display the winner
    const result = determineWinner(userChoice, computerChoice);
    alert(result);
}

// Start the game
playGame();