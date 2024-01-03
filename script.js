function calculateTax() {
    var income = parseFloat(document.getElementById('income').value);

    if (isNaN(income)) {
        alert('Please enter a valid income.');
        return;
    }

    var taxRate = 0.2; // Adjust the tax rate as needed
    var taxAmount = income * taxRate;
    var result = `Your tax amount is $${taxAmount.toFixed(2)}`;

    document.getElementById('result').innerText = result;
}