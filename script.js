let choices = ["rock", "paper", "scissor"];
let player_wincount = 0;
let computer_wincount = 0;

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(computer_choice, player_choice)
{
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
        computer_wincount++;
        return("Computer wins!");
    }
}


window.onload = function() 
{
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');


rockButton.addEventListener('click', function(event) 
    {
        let buttonValue = event.target.parentElement.value;
        console.log(playRound(getComputerChoice(), buttonValue));
        if (player_wincount >= 5 || computer_wincount >= 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    }
);

paperButton.addEventListener('click', function(event) 
    {
        let buttonValue = event.target.parentElement.value;
        console.log(playRound(getComputerChoice(), buttonValue));
        if (player_wincount >= 5 || computer_wincount >= 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    }
);

scissorsButton.addEventListener('click', function(event)
    {
        let buttonValue = event.target.parentElement.value;
        console.log(playRound(getComputerChoice(), buttonValue)); 
        if (player_wincount >= 5 || computer_wincount >= 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    }
);
};