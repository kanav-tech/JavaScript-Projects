// A function using a while loop
function count_to_Ten() {
    let Digit = "";
    let x = 1;
    while (x <= 10) {
        Digit += x + "<br>";
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// A function using a for loop
function for_Loop() {
    const Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    let content = "";

    for (let i = 0; i < Instruments.length; i++) {
        content += Instruments[i] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = content;
}

// A function that uses an array
function color_array() {
    let Colors = [];
    Colors[0] = "Green";
    Colors[1] = "Red";
    Colors[2] = "Blue";
    Colors[3] = "Yellow";
    Colors[4] = "Orange";
    Colors[5] = "Purple";

    document.getElementById("Array").innerHTML = "My favorite color is " + Colors[5] + ".";
}

// A function that uses an object with let
function car() {
    let car = {
        make: "Nissan",
        year: "2023",
        color: "Black"
    };

    document.getElementById("Car_Info").innerHTML =
        "I have a " + car.color + " " + car.year + " " + car.make + ".";
}
