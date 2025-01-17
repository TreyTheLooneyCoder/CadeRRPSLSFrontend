// P1 Logic
let p1Choice = "";

let p1Rock = document.getElementById('p1Rock');
p1Rock.addEventListener('click', function() {
    p1Choice = "rock"
    console.log("p1 chose rock");
    CheckChoices();
    CheckWinner();
});

let p1Paper = document.getElementById('p1Paper');
p1Paper.addEventListener('click', function() {
    p1Choice = "paper"
    console.log("p1 chose paper");
    CheckChoices();
    CheckWinner();
});

let p1Scissors = document.getElementById('p1Scissors');
p1Scissors.addEventListener('click', function() {
    p1Choice = "scissors"
    console.log("p1 chose scissors");
    CheckChoices();
    CheckWinner();
});

let p1Lizard = document.getElementById('p1Lizard');
p1Lizard.addEventListener('click', function() {
    p1Choice = "lizard"
    console.log("p1 chose lizard");
    CheckChoices();
    CheckWinner();
});

let p1Spock = document.getElementById('p1Spock');
p1Spock.addEventListener('click', function() {
    p1Choice = "spock"
    console.log("p1 chose spock");
    CheckChoices();
    CheckWinner();
});

// P2 Logic
let p2Choice = '';

let p2Rock = document.getElementById('p2Rock');
p2Rock.addEventListener('click', function() {
    p2Choice = "rock"
    console.log("p2 chose rock");
    CheckChoices();
    CheckWinner();
});

let p2Paper = document.getElementById('p2Paper');
p2Paper.addEventListener('click', function() {
    p2Choice = "paper"
    console.log("p2 chose paper");
    CheckChoices();
    CheckWinner();
});

let p2Scissors = document.getElementById('p2Scissors');
p2Scissors.addEventListener('click', function() {
    p2Choice = "scissors"
    console.log("p2 chose scissors");
    CheckChoices();
    CheckWinner();
});

let p2Lizard = document.getElementById('p2Lizard');
p2Lizard.addEventListener('click', function() {
    p2Choice = "lizard"
    console.log("p2 chose lizard");
    CheckChoices();
    CheckWinner();
});

let p2Spock = document.getElementById('p2Spock');
p2Spock.addEventListener('click', function() {
    p2Choice = "spock"
    console.log("p2 chose spock");
    CheckChoices();
    CheckWinner();
});

// Logic for game
let winner = "";

function CheckChoices() {
    // P1 chose rock
    if(p1Choice == 'rock' && p2Choice == 'rock')
        {
            winner = "tie";
    }
    else if(p1Choice == 'rock' && p2Choice == 'paper')
    {
        winner = "p2";
    }
    else if(p1Choice == 'rock' && p2Choice == 'scissors')
    {
        winner = "p1";
    }
    else if(p1Choice == 'rock' && p2Choice == 'lizard')
    {
        winner = "p1";
    }
    else if(p1Choice == 'rock' && p2Choice == 'spock')
    {
        winner = "p2";
    }
    // P1 chose paper    
    else if(p1Choice == 'paper' && p2Choice == 'rock')
    {
        winner = "p1";
    }
    else if(p1Choice == 'paper' && p2Choice == 'paper')
    {
        winner = "tie";
    }
    else if(p1Choice == 'paper' && p2Choice == 'scissors')
    {
        winner = "p2";
    }
    else if(p1Choice == 'paper' && p2Choice == 'lizard')
    {
        winner = "p2";
    }
    else if(p1Choice == 'paper' && p2Choice == 'spock')
    {
        winner = "p1";
    }
    // P1 chose scissors
    else if(p1Choice == 'scissors' && p2Choice == 'rock')
    {
        winner = "p2";
    }
    else if(p1Choice == 'scissors' && p2Choice == 'paper')
    {
        winner = "p1";
    }
    else if(p1Choice == 'scissors' && p2Choice == 'scissors')
    {
        winner = "tie";
    }
    else if(p1Choice == 'scissors' && p2Choice == 'lizard')
    {
        winner = "p1";
    }
    else if(p1Choice == 'scissors' && p2Choice == 'spock')
    {
        winner = "p2";
    }
    // P1 chose lizard
    else if(p1Choice == 'lizard' && p2Choice == 'rock')
    {
        winner = "p2";
    }
    else if(p1Choice == 'lizard' && p2Choice == 'paper')
    {
        winner = "p1";
    }
    else if(p1Choice == 'lizard' && p2Choice == 'scissors')
    {
        winner = "p2";
    }
    else if(p1Choice == 'lizard' && p2Choice == 'lizard')
    {
        winner = "tie";
    }
    else if(p1Choice == 'lizard' && p2Choice == 'spock')
    {
        winner = "p1";   
    }
    // P1 chose spock
    else if(p1Choice == 'spock' && p2Choice == 'rock')
    {
        winner = "p1";        
    }
    else if(p1Choice == 'spock' && p2Choice == 'paper')
    {
        winner = "p2";        
    }
    else if(p1Choice == 'spock' && p2Choice == 'scissors')
    {
        winner = "p1";        
    }
    else if(p1Choice == 'spock' && p2Choice == 'lizard')
    {
        winner = "p2";        
    }
    else if(p1Choice == 'spock' && p2Choice == 'spock')
    {
        winner = "tie";
    }      
}

function CheckWinner() {
    if(winner == "p1")
    {
        alert("Player one Wins!");
    }
    else if(winner == "p2")
    {
        alert("Player Two Wins!"); 
    }
    else
    {
        alert("Tie Game!"); 
    }
}