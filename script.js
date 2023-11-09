let choices = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(computer_choice, player_choice)
{
    player_choice = player_choice.toLowerCase();

    if (computer_choice === player_choice)
    {
        return("It's a tie!");
    }

    else if(computer_choice === "rock" && player_choice === "paper")
    {
        return("Player wins!");
    }

    else if(computer_choice === "paper" && player_choice === "scissors")
    {
        return("Player wins!");
    }

    else if(computer_choice === "scissors" && player_choice === "rock")
    {
        return("Player wins!");
    }

    else
    {
        return("Computer wins!");
    }
}


const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(computerSelection, playerSelection))