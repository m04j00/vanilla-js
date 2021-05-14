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
/* 2-4
const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "red";
}
title.addEventListener("click", handleClick);
*/

/* 2-5
if(10 > 5){
    console.log("hi");
} else{
    console.log("ho");
}

const age = prompt("How old are you?");

if(age > 18 && age <= 21){
    console.log("you cna drink but should not");
} else if(age < 21){
    console.log("go ahed")
} else {
    console.log("too young");
}
*/
/* 2-6
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

function handhandleOffLine(){
    console.log("Bye Bye");
    alert("인터넷 연결 없음");
}

function handhandleOnLine(){
    console.log("Welcom back");
}

window.addEventListener("offline", handhandleOffLine);
window.addEventListener("online", handhandleOnLine);
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);

    // const hasClass = title.classList.contains(CLICKED_CLASS);

    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // } else{
    //     title.classList.add(CLICKED_CLASS);
    // }
}
function init(){
    title.addEventListener("click", handleClick);
}

init();