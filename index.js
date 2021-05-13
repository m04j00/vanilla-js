/* 1.5
alert('Im Working. Im Js. Im pretty. Im worth it');
console.log('Im Working. Im Js. Im pretty. Im worth it');
*/
/* 1.8
//String
const s = "Min";

//Boolean
const b = true;

//Number
const n = 666;

//Float
const f = 66.6;
*/
/* 1.9
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek);
*/
/* 1-10
const minInfo = {
    name : "Minji",
    age : 18,
    gender : "female",
    favMovies: ["Along the gods", "The Avengers"],
    favFood : [
        {
            name : "Kimchi",
            hot : true
        },
        {
            name : "bulgogi",
            hot : false
        }
    ]
}

console.log(minInfo.name);

minInfo.name = "Min";

console.log(minInfo.name);

console.log(minInfo);
*/
/* 2.0
function sayHello(name, age){
    console.log('Hello', name, "you have", age, "years of age.");
}

sayHello("min", 18);
*/
/* 2-1

function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`;
}

const greetMinji = sayHello("min", 18);
console.log(greetMinji);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiple: function (a, b) {
        return a * b;
    },
    division: function(a, b){
        return a/b;
    },
    power: function(a, b){
        return a**b;
    }

}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiple = calculator.multiple(5, 5);
const division = calculator.division(5, 5);
const power = calculator.power(5, 5);

console.log(plus);
console.log(minus);
console.log(multiple);
console.log(division);
console.log(power);
*/
/*2-2 DOM 
// const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Hi! From Js"
title.style.color = "red";
document.title = "I own you now";
*/

const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "red";
}
title.addEventListener("click", handleClick);