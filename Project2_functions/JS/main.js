// Function to concatenate strings and show additional messages
function myFunction() {
  var sentence = "I am learning"; // base string
  sentence += " a lot from this course!"; // concatenate with += operator
  
  // Update the clickable paragraph with the concatenated sentence
  document.getElementById("Concatenate").innerHTML = sentence;
  
  // Show an additional motivational message
  document.getElementById("extraMessage").innerHTML = "Keep going, you're doing great! 🚀";
}
