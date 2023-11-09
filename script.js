//declaring variables for the game
let choices = ["rock", "paper", "scissor"];
let player_wincount = 0;
let computer_wincount = 0;


//gets a random choice from the choices array
function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

//plays a round of the game, comparing the player choice to the computer choice
function playRound(computer_choice, player_choice)
{
    let player_score = document.getElementById('playerScore');
    let computer_score = document.getElementById('computerScore');
    let announce = document.getElementById('announce');

    let playerSign = document.getElementById('playerSign');
    let computerSign = document.getElementById('computerSign');

    let player_img = document.createElement('img');
    player_img.src = player_choice + '.png';

    playerSign.textContent = ''; 
    playerSign.appendChild(player_img);

    let computer_img = document.createElement('img');
    computer_img.src = computer_choice + '.png';

    computerSign.textContent = '';
    computerSign.appendChild(computer_img);


    if (computer_choice === player_choice)
    {
        announce.textContent = "It's a tie!";
        return("It's a tie!");
    }

    else if(computer_choice === "rock" && player_choice === "paper")
    {
        player_wincount++;
        player_score.textContent = "Player: " + player_wincount;
        announce.textContent = "Player wins!";
        return("Player wins!");
    }

    else if(computer_choice === "paper" && player_choice === "scissor")
    {
        player_wincount++;
        announce.textContent = "Player wins!";
        player_score.textContent = "Player: " + player_wincount;
        return("Player wins!");
    }

    else if(computer_choice === "scissor" && player_choice === "rock")
    {
        player_wincount++;
        announce.textContent = "Player wins!";
        player_score.textContent = "Player: " + player_wincount;
        return("Player wins!");
    }

    else
    {
        computer_wincount++;
        announce.textContent = "Computer wins!";
        computer_score.textContent = "Computer: " + computer_wincount;
        return("Computer wins!");
    }
}

//receives the value of the button clicked and plays a round of the game
window.onload = function() 
{
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');


rockButton.addEventListener('click', function(event) 
    {
        if (player_wincount >= 5 || computer_wincount >= 5) 
        {
            let playAgain = confirm("Do you want to play again?");
            if (playAgain) 
            {
                location.reload();
            }
            else
            {
                rockButton.disabled = true;
                paperButton.disabled = true;
                scissorsButton.disabled = true;
            }
        }

        let buttonValue = event.target.parentElement.value;
        console.log(playRound(getComputerChoice(), buttonValue));
        
    }
);

paperButton.addEventListener('click', function(event) 
    {
        if (player_wincount >= 5 || computer_wincount >= 5) 
        {
            let playAgain = confirm("Do you want to play again?");
            if (playAgain) 
            {
                location.reload();
            }
            else
            {
                rockButton.disabled = true;
                paperButton.disabled = true;
                scissorsButton.disabled = true;
            }
        }

        let buttonValue = event.target.parentElement.value;
        console.log(playRound(getComputerChoice(), buttonValue));
        
    }
);

scissorsButton.addEventListener('click', function(event)
    {
        if (player_wincount >= 5 || computer_wincount >= 5) 
        {
            let playAgain = confirm("Do you want to play again?");
            if (playAgain) 
            {
                location.reload();
            }
            else
            {
                rockButton.disabled = true;
                paperButton.disabled = true;
                scissorsButton.disabled = true;
            }
        }

        let buttonValue = event.target.parentElement.value;
        console.log(playRound(getComputerChoice(), buttonValue)); 
        
    }
);
};

