// Global variable declaration
var x = 10; // Global scope

// Function using a local variable
function showLocalSum() {
    var x = 99; // Local variable
    document.write("Local variable used: 10 + " + x + " = " + (10 + x) + "<br>");
}

// Function using the global variable
function showGlobalSum() {
    document.write("Global variable used: " + x + " + 11 = " + (x + 11) + "<br>");
    console.log("Debugging global variable:", x);
}

// Function with an intentional error to debug in Chrome Dev Tools
function errorFunc() {
    let msg = "This message won't show properly because of a typo.";
    console.log(msgg); // 'msgg' is not defined — intentional typo
}

// Function with an if statement to update content based on time
function get_Date() {
    let hour = new Date().getHours();
    if (hour < 18) {
        document.getElementById("Greeting").innerHTML = "It is currently before 6 PM.";
    } else {
        document.getElementById("Greeting").innerHTML = "It's after 6 PM now.";
    }
}

// Function to check if number is even or odd (if-else)
function get_Reply() {
    var user_input = document.getElementById("userInput").value;
    var reply;

    if (user_input === "") {
        reply = "Please enter a number.";
    } else if (user_input % 2 === 0) {
        reply = "You entered an even number!";
    } else {
        reply = "You entered an odd number!";
    }

    document.getElementById("feedback").innerHTML = reply;
}

// Function using time of day (if / else if / else)
function Time_function() {
    var hour = new Date().getHours();
    var Reply;

    if (hour > 0 && hour < 12) {
        Reply = "It is morning time!";
    } else if (hour >= 12 && hour < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}
