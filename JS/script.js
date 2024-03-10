


//  Where we will interpret the code and display the output

// Custom console.log implementation
var consoleOutput = '';
var customConsole = {
    log: function(message) {
        consoleOutput += message + '\n';
    }
};

function interpret() {
    var code = document.getElementById('code').value;
    try {
        // Reset consoleOutput before each interpretation
        consoleOutput = '';
        // Replace console.log with custom implementation
        var codeWithCustomConsole = code.replace(/console.log/g, 'customConsole.log');
        // Evaluate the code
        eval(codeWithCustomConsole);
        // Display consoleOutput
        displayOutput(consoleOutput);
    } catch (error) {
        displayOutput('Error: ' + error.message);
    }
}

function displayOutput(output) {
    var outputDiv = document.getElementById('output');
    outputDiv.textContent = output;
}