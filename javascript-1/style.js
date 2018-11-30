// JS DOM Stuff
// ------------------
function updateName(event) {
    var name = prompt('Whats your name?');
    event.target.textContent = "Player 1: " + name;
}
var playerTitleElement = document.getElementById('player_title');
playerTitleElement.addEventListener('click', updateName);

// JS Syntax
// ------------------
var dayIndex = new Date().getDay();
if (dayIndex === 1){
    document.getElementById('day').innerHTML = "\uD83D\uDE00 Have the Monday blues?! Write some JavaScript and it'll make everything better :)";
} else if (dayIndex === 5) {
    document.getElementById('day').innerHTML = "Friday ROCK AND ROLL 💥";
} else {
    document.getElementById('day').innerHTML = "\uD83D\uDE00  Don't worry, Friday is only " + (5 - dayIndex) + " days away!";
}

// JS Functions
// ------------------
var multipleByThree = function(num){
    return num * 3;
}
function multiplyByThree(num) {
    return num * 3;
}
document.getElementById('multiple').innerHTML = multipleByThree(5);
console.log("Yo Yo !!!!!");
console.log(multipleByThree(5));

// Exercise 1
// ------------------
function updateName(event) {
    var color = prompt('Whats your color?');
    event.target.style.color = color;
}
var playerTitleElement = document.getElementById('player_title');
playerTitleElement.addEventListener('click', updateName);

// Exercise 2
// ------------------
console.log(9/3);

// Exercise 3: Tip Calculator
// ------------------
var tipElement = document.getElementById('add_tip');
tipElement.addEventListener('click', calculateTip);

function calculateTip() {
    var meal_cost = document.getElementById('meal_cost').value;
    document.getElementById('tip').innerHTML = meal_cost * .2;
}