// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            return x / y;
        default:
            return null; // Return null if the operation is not recognized
    }
}

// Function to get user input and perform the calculation
function runCalculator() {
    let validOperation = false;
    let result;
    
    do {
        // COLLECT FIRST NUMBER FROM USER
        let num1 = parseFloat(prompt("Enter the first number:"));
        
        // COLLECT SECOND NUMBER FROM USER
        let num2 = parseFloat(prompt("Enter the second number:"));
        
        // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
        let operation = prompt("What operation would you like to perform? (add, subtract, multiply, divide)").toLowerCase();
        
        // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
        result = calculate(num1, num2, operation);
        
        // Check if the operation is valid
        if (result !== null) {
            validOperation = true;
            alert(`The result of ${operation}ing ${num1} and ${num2} is: ${result}`);
        } else {
            alert("Invalid operation! Please enter add, subtract, multiply, or divide.");
        }

    } while (!validOperation);
}

// Function to perform the calculation
runCalculator();
