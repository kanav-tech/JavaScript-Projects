// Adds two numbers and displays the result
function addNumbers() {
  var sum = 10 + 5;
  document.getElementById("Math").innerHTML = "10 + 5 = " + sum;
}

// Subtracts two numbers and displays the result
function subtractNumbers() {
  var difference = 20 - 7;
  document.getElementById("Math").innerHTML = "20 - 7 = " + difference;
}

// Multiplies two numbers and displays the result
function multiplyNumbers() {
  var product = 6 * 8;
  document.getElementById("Math").innerHTML = "6 x 8 = " + product;
}

// Uses the modulus operator to find the remainder
function modulusOperator() {
  var remainder = 25 % 6;
  document.getElementById("Math").innerHTML = "25 % 6 leaves a remainder of: " + remainder;
}

// Increments a number and displays the result
function incrementOperator() {
  var x = 5;
  x++;
  document.getElementById("Math").innerHTML = "After incrementing, x = " + x;
}

// Decrements a number and displays the result
function decrementOperator() {
  var y = 5.25;
  y--;
  document.getElementById("Math").innerHTML = "After decrementing, y = " + y;
}

// Generates and displays a random number between 0 and 1
function randomNumber() {
  var rand = Math.random();
  document.getElementById("Math").innerHTML = "Random number between 0 and 1: " + rand;
}

// Demonstrates use of Math object method (square root)
function useMathObject() {
  var result = Math.sqrt(64);
  document.getElementById("Math").innerHTML = "The square root of 64 is: " + result;
}
