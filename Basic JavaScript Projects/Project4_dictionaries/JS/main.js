// This function creates a dictionary, deletes a key, and displays the result.
function showValue() {
    // Create a dictionary representing a smartphone
    let smartphone = {
        brand: "Samsung",
        model: "Galaxy S22",
        color: "Black",
        year: 2022
    };

    // Delete the 'model' key from the dictionary
    delete smartphone.model;

    // Display the value of 'model' after deletion (will be undefined)
    document.getElementById("Dictionary").innerHTML =
        "Smartphone model: " + smartphone.model;
}
