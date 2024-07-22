let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    if (currentInput === '0') {
        currentInput = char;
    } else {
        currentInput += char;
    }
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.textContent = currentInput;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    display.textContent = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (e) {
        display.textContent = 'Error';
    }
}

// Initialize display
clearDisplay();
