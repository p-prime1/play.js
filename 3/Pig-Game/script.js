'use strict';

// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1'); 
const curent0EL = document.getElementById('current--0');
const curent1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// functions
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};

// Startig conditions;
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden')

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling the dice
btnRoll.addEventListener('click', function()
{
    // 1. Genrating a random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice

    diceEL.classList.remove('hidden');
    // 3.Check for 1: Switch to next player

    diceEL.src = `dice-${dice}.png`;
    console.log(dice);

    if (dice != 1)
    {
        // Add Dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // curent0EL.textContent = currentScore;
    }
    else {
        // Switch to next Player;
        // curent1EL.textContent = currentScore;
        switchPlayer();
        // currentScore += dice;
    }
});

btnHold.addEventListener('click', function()
{
    // 1. Add current score to active player.

    scores[activePlayer] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player score is >100

    // Switch Player
    switchPlayer();
})
