"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Nduka";
      const str = `Oh, and your're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      const output = "NEw output";
      console.log(output);
    }
    console.log(output);
    console.log(millenial);
    // console.log(add(2, 3));
  }

  printAge();
  return age;
}

const firstName = "prime";
calcAge(1991);
