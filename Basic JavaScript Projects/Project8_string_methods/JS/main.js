// main.js

// Using concat() method
function full_sentence() {
    var part_1 = "Guess what day ";
    var part_2 = "it is... ";
    var part_3 = "April Fools!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

// Using slice() method
function slice_Method() {
    var sentence = "Slice and Dice";
    var section = sentence.slice(0, 5); // Slices "Slice"
    document.getElementById("slice").innerHTML = section;
}

// Using toString() method
function string_Method() {
    var myNumber = 2025;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}

// Using toPrecision() method
function precision_Method() {
    var myNumber = 123.45678910111213;
    var precise = myNumber.toPrecision(5); // e.g. "123.46"
    document.getElementById("SpecificLength").innerHTML = precise;
}
