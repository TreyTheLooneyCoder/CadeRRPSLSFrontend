async function ComChoiceFetch() {
    const response = await fetch('https://rpslsbackend-hkemgea7a6b6bee3.westus-01.azurewebsites.net/RPSLS/RPS');
    const data = await response.text();
    let comChoice = data;
    console.log(comChoice);
}

console.log(ComChoiceFetch());
ComChoiceFetch();

// Controls Logic
let p1Choice = "";
let comChoice = "";

let p1Rock = document.getElementById('p1Rock');
p1Rock.addEventListener('click', function() {
    p1Choice = "rock";
    console.log("p1 chose rock");
    CheckWinner();
});

let p1Paper = document.getElementById('p1Paper');
p1Paper.addEventListener('click', function() {
    p1Choice = "paper";
    console.log("p1 chose paper");
    CheckWinner();
});

let p1Scissors = document.getElementById('p1Scissors');
p1Scissors.addEventListener('click', function() {
    p1Choice = "scissors";
    console.log("p1 chose scissors");
    CheckWinner();
});

let p1Lizard = document.getElementById('p1Lizard');
p1Lizard.addEventListener('click', function() {
    p1Choice = "lizard";
    console.log("p1 chose lizard");
    CheckWinner();
});

let p1Spock = document.getElementById('p1Spock');
p1Spock.addEventListener('click', function() {
    p1Choice = "spock";
    console.log("p1 chose spock");
    CheckWinner();
});

// Logic for game
let winner = "";
let p1Wins = 0;
let comWins = 0;
let roundCounter = 0;

function CheckChoices() {
    ComChoiceFetch();

    // P1 chose rock
    if(p1Choice == 'rock' && comChoice == 'rock')
    {
        winner = "tie";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'rock' && comChoice == 'paper')
    {
        winner = "p2";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'rock' && comChoice == 'scissors')
    {
        winner = "p1";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'rock' && comChoice == 'lizard')
    {
        winner = "p1";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'rock' && comChoice == 'spock')
    {
        winner = "p2";
        p1Choice = '';
        comChoice = '';
    }
    // P1 chose paper    
    else if(p1Choice == 'paper' && comChoice == 'rock')
    {
        winner = "p1";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'paper' && comChoice == 'paper')
    {
        winner = "tie";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'paper' && comChoice == 'scissors')
    {
        winner = "p2";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'paper' && comChoice == 'lizard')
    {
        winner = "p2";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'paper' && comChoice == 'spock')
    {
        winner = "p1";
        p1Choice = '';
        comChoice = '';
    }
    // P1 chose scissors
    else if(p1Choice == 'scissors' && comChoice == 'rock')
    {
        winner = "p2";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'scissors' && comChoice == 'paper')
    {
        winner = "p1";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'scissors' && comChoice == 'scissors')
    {
        winner = "tie";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'scissors' && comChoice == 'lizard')
    {
        winner = "p1";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'scissors' && comChoice == 'spock')
    {
        winner = "p2";
        p1Choice = '';
        comChoice = '';
    }
    // P1 chose lizard
    else if(p1Choice == 'lizard' && comChoice == 'rock')
    {
        winner = "p2";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'lizard' && comChoice == 'paper')
    {
        winner = "p1";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'lizard' && comChoice == 'scissors')
    {
        winner = "p2";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'lizard' && comChoice == 'lizard')
    {
        winner = "tie";
        p1Choice = '';
        comChoice = '';
    }
    else if(p1Choice == 'lizard' && comChoice == 'spock')
    {
        winner = "p1";   
        p1Choice = '';
        comChoice = '';
    }
    // P1 chose spock
    else if(p1Choice == 'spock' && comChoice == 'rock')
    {
        winner = "p1";  
        p1Choice = '';
        comChoice = '';      
    }
    else if(p1Choice == 'spock' && comChoice == 'paper')
    {
        winner = "p2";  
        p1Choice = '';
        comChoice = '';      
    }
    else if(p1Choice == 'spock' && comChoice == 'scissors')
    {
        winner = "p1"; 
        p1Choice = '';
        comChoice = '';       
    }
    else if(p1Choice == 'spock' && comChoice == 'lizard')
    {
        winner = "p2";    
        p1Choice = '';
        comChoice = '';    
    }
    else if(p1Choice == 'spock' && comChoice == 'spock')
    {
        winner = "tie";
        p1Choice = '';
        comChoice = '';
    }      
}

function RoundCount() {
    CheckChoices();

    if(winner == "p1")
    {
        p1Wins++;
    }
    else if(winner == "p2")
    {
        comWins++;
    }
    else if(winner == "tie")
    {
        roundCounter++;
    }
}

function CheckWinner() {
    RoundCount();

    if(p1Wins == 1)
    {
        alert("Game Over, Player One Wins!");
        p1Wins = 0;
    }
    else if(comWins == 3)
    {
        alert("Game Over, Player Two Wins!"); 
        comWins = 0;
    }
    else if(roundCounter == 4)
    {
        alert("SUDDEN DEATH C:<");
    }
}