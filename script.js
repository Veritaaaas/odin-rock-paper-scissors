let choices = ["rock", "paper", "scissors"];
let player_wincount = 0;
let compuer_wincount = 0;

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
        player_wincount++;
        return("Player wins!");
    }

    else if(computer_choice === "paper" && player_choice === "scissors")
    {
        player_wincount++;
        return("Player wins!");
    }

    else if(computer_choice === "scissors" && player_choice === "rock")
    {
        player_wincount++;
        return("Player wins!");
    }

    else
    {
        compuer_wincount++;
        return("Computer wins!");
    }
}

function game()
{
    for (let i = 0; i < 5; i++)
    {
        let player_choice = prompt("Rock, Paper, or Scissors?");
        let computer_choice = getComputerChoice();
        console.log(playRound(computer_choice, player_choice));
    }

    if (player_wincount === compuer_wincount)
    {
        console.log("IT's a TIE!");
    }

    else if (player_wincount > compuer_wincount)
    {
        console.log("You Win!");
    }

    else
    {
        console.log("You Lose!");
    }
}

game();