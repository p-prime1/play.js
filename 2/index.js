 'use strict';
// 2
/*
const calcavg = (score1, score2, score3) => 
{
    return (score1 + score2 + score3)/3;
}
const test = calcavg(1,2,3)
console.log(test)
const avgDolphin = calcavg(44, 23, 71);
const avgKoala = calcavg(65, 54, 49);
function checkWinner (avgDolphins, avgKoalas)
{
    if (avgDolphins >= avgKoalas * 2  )
    {
        console.log(`Team Dolphins win with an averagr of ${avgDolphins} and team Dolphins has an average of ${avgKoalas}`)
    }
    else if (avgKoalas >= avgDolphins * 2 )
    {
        console.log(`Team Koalas win with an average of ${avgKoalas} and Team Dolphins has an average of ${avgDolphins}`)
    }
    else
    {
        console.log('Nobody wins')
    }
}
checkWinner(avgDolphin, avgKoala);
*/

// const prime = 
// {
//     firstName: 'Precious',
//     lastName: 'Nwaka',
//     age : 2023 - 2003,
//     Job: 'Student',
//     friends: ['Stefan', 'Afolabi', 'Obed', 'David',]
// };
// console.log(prime);
// console.log(prime.friends);
// const key = 'Name'
// console.log(prime['first' + key]);


// console.log(`${prime.firstName} has ${prime.friends.length} friends, and his bet friend is called ${prime.friends[0]}`)

// const Interested = prompt('Choose between firstName,lastName,age,Job,friends')
// console.log(prime[Interested])

// for (let i = 0; prime[Interested] == true; i++)
// {
// if (prime[Interested] == true)
// {
//     console.log(prime[Interested])
// }
// else
// {
//     console.log('Try again');
//     const Interested = prompt('Choose between firstName,lastName,age,Job,friends')

// }
// }
const years = [2001,2002,2003,2004,2005,2006];
// const ages = [];
// for (let i = 0; i < years.length; i++)
// {
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

const prime = 
{
    firstName: 'Precious',
    lastName: 'Nwaka',
    age : 2023 - 2003,
    Job: 'Student',
    friends: ['Stefan', 'Afolabi', 'Obed', 'David',]
};

for (let i = prime.length - 1; i >= 0; i--)
{
    console.log(prime.i[i]);
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6)
{
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
console.log('');
console.log('');
