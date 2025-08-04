// 1. Display the data type of a Boolean variable
var isActive = false;
document.write("Data type of isActive: " + typeof isActive + "<br>");

// 2. Combine string and number (type coercion)
document.write("Combining '10' and 5: " + "10" + 5 + "<br>");

// 3. Using == (loose equality, checks value only)
document.write("Is 10 == '10'? : " + (10 == '10') + "<br>");

// 4. Using === (strict equality, checks value AND type)
let a = 7;
let b = "7";
document.write("Is 7 === '7'? : " + (a === b) + "<br>");

// 5. Using > and && operators (both true)
document.write("Is 20 > 10 && 15 > 5? : " + (20 > 10 && 15 > 5) + "<br>");

// 6. Using < and || operators (one false, one true)
document.write("Is 4 < 2 || 8 < 10? : " + (4 < 2 || 8 < 10) + "<br>");

// 7. Using ! (NOT operator) — triggered by a function
function showNotResult() {
    document.getElementById("notExample").innerHTML = "Result of !(3 > 1): " + !(3 > 1);
}
