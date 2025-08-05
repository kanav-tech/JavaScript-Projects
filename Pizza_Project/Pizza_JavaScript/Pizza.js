// Function to start the receipt process
function getReceipt() {
    let summary = "<h3>Your Order:</h3>";
    let sizeTotal = 0;
    let selectedSize = "";
    const sizeOptions = document.getElementsByName("size");

    // Check which pizza size is selected
    for (let i = 0; i < sizeOptions.length; i++) {
        if (sizeOptions[i].checked) {
            selectedSize = sizeOptions[i].value;
            summary += selectedSize + "<br>";
            break;
        }
    }

    // Assign price based on selected size
    switch (selectedSize) {
        case "Personal Pizza":
            sizeTotal = 6;
            break;
        case "Small Pizza":
            sizeTotal = 8;
            break;
        case "Medium Pizza":
            sizeTotal = 10;
            break;
        case "Large Pizza":
            sizeTotal = 14;
            break;
        case "Extra Large Pizza":
            sizeTotal = 16;
            break;
    }

    // Pass size cost and summary to next function
    getToppings(sizeTotal, summary);
}

// Function to calculate toppings and total cost
function getToppings(currentTotal, summary) {
    let toppingTotal = 0;
    let selectedToppings = [];
    const toppings = document.getElementsByClassName("topping");

    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            selectedToppings.push(toppings[i].value);
        }
    }

    // First topping is free
    toppingTotal = Math.max(0, selectedToppings.length - 1);

    for (let i = 0; i < selectedToppings.length; i++) {
        summary += selectedToppings[i] + "<br>";
    }

    const finalTotal = currentTotal + toppingTotal;

    // Output to HTML
    document.getElementById("orderSummary").innerHTML = summary;
    document.getElementById("totalCost").innerHTML = `<h3>Total: $${finalTotal}.00</h3>`;
}
