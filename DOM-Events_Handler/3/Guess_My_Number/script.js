'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number'
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value = 50);

*/

let score = 20;
document.querySelector('.highscore')
let highscore = 0;
const displayMessage = function(message) 
{
    document.querySelector('.message').textContent = message;
}

let number = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When ther is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'Please input a valid number'
        displayMessage('Please input a valid number')
    }

    // When guess is correct
    else if (guess == number)
    {
        // document.querySelector('.message').textContent = 'Correct Number';
        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style.width = '30rem'
        
        if (score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }

    // When guess is wrong
    else if (guess != number) {
        
        if (score > 1)
        {
            document.querySelector('.message').textContent = 
             guess > number ?'Too High!' : 'Too low';
            score--
            document.querySelector('.score').textContent = score;
        }
        else
        {
            // document.querySelector('.message').textContent = 'You lost the game'
            displayMessage('You lost the Game')
        }
    }})
    
//     else if (guess > number)
//     {
//         if (score > 1)
//         {
//             document.querySelector('.message').textContent = 'Too High! '
//             score--
//             document.querySelector('.score').textContent = score;
//         }
//         else
//         {
//             document.querySelector('.message').textContent = 'You lost the game'
//         }
        
//     }

//     // When guess is lower
//     else if (guess < number)
//     {
//         if (score > 1)
//         {document.querySelector('.message').textContent = 'Too low!';
//         score--
//         document.querySelector('.score').textContent = score;}
//         else 
//         {
//             document.querySelector('.message').textContent = 'You lost the game'
//         }
//     }
    
// });


document.querySelector('.again').addEventListener
('click', function () 
{
    score = 20
    document.querySelector('.score').textContent = score;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
