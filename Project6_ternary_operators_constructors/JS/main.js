// Ternary function to check height input
function Height_Check() {
    var height = document.getElementById("User_Height").value;
    var message = (height >= 120) ? "You're tall enough" : "You're too short";
    document.getElementById("Ride_Message").innerHTML = message + " to enter the amusement park!";
}

// Constructor function
function Student(name, course, year, grade) {
    this.Student_Name = name;
    this.Student_Course = course;
    this.Student_Year = year;
    this.Student_Grade = grade;
}

// Function that creates and displays a student object
function Show_Student_Info() {
    var Zoe = new Student("Zoe", "AI & Robotics", 2026, "A+");

    document.getElementById("Constructor_Output").innerHTML =
        Zoe.Student_Name + " is enrolled in " + Zoe.Student_Course +
        ", graduating in " + Zoe.Student_Year +
        ", with a grade of " + Zoe.Student_Grade + ".";
}

// Nested function example
function Combine_Message() {
    var base = "Learning JavaScript is ";

    function appendMore() {
        let end = "fun and rewarding!";
        return base + end;
    }

    document.getElementById("Nested_Output").innerHTML = appendMore();
}
