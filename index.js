let score1 = 0;
let score2 = 0;

let team1 = document.getElementById("score1");
let team2 = document.getElementById("score2");
let message = document.getElementById("lead");

function run()
{
    team1.innerText = score1;
    team2.innerText = score2;
    if(score1 < score2)
    {
        message.innerText = "Guest Team is leading!";
    }
    else if(score1>score2)
    {
        message.innerText = "Home Team is leading!";
    }
    else{
        message.innerText = "No Team is leading!";
    }
}

function a1()
{
    score1 += 1;
    run()
}

function a2()
{
    score1 += 2;
    run()
}

function a3()
{
    score1 += 3;
    run()
}

function b1()
{
    score2 += 1;
    run()
}

function b2()
{
    score2 += 2;
    run()
}

function b3()
{
    score2 += 3;
    run()
}

