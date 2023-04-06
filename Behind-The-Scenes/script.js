"use strict";

/*
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
*/
/*
console.log(me);
console.log(job);
console.log(year);

var me = "Prime";
let job = "Student";
const year = 2003;


console.log(addDecl(2, 3));
console.log();
console.log();

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

*/

console.log(this);

/*const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(2003);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(2003);
calcAgeArrow(2005);

const jonas = {
  year: 2003,
  calcAge: function (birthYear) {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
console.log(matilda);
matilda.calcAge();
const f = jonas.calcAge;
console.log(f);
f();
*/
/*
const jonas = {
  firstname: "prime",
  year: 2003,
  calcAge: function (birthYear) {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: function () {
    console.log(`Hey ${this.firstname}`);
  },
};
jonas.greet();
*/
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
