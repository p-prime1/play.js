"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu], this.mainMenu[mainIndex];
  },

  orderDelivery: function(obj){
    console.log(obj);
  },

  restaurant.orderDelivery: ({
    time: '23:30',
    address: 'IT Igbani Street Jabi,Abuja',
    mainIndex: 2,
    starterIndex: 2,
  });
  
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Objects Destructuring;

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [6, 7]];
const [ah, , [j, g]] = nested;
console.log(ah, j, g);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
