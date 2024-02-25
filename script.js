let currentInput = '';

function updateDisplay() {
    document.querySelector('.result span').textContent = currentInput || '0';
}

function appendInput(input) {
    currentInput += input;
    updateDisplay();
}

function appendOperator(operator) {
    if (operator === 'x') {
        operator = '*';
    }
    appendInput(operator);
}

function toggleSign() {
    if (currentInput.startsWith('-')) {
        currentInput = currentInput.slice(1);
    } else {
        currentInput = '-' + currentInput;
    }
    updateDisplay();
}

function calculatePercentage() {
    try {
        currentInput = eval(currentInput + '/100');
        updateDisplay();
    } catch (error) {
        currentInput = '';
        updateDisplay();
        alert('Hatalı giriş! Lütfen doğru bir hesaplama yapınız.');
    }
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = '';
        updateDisplay();
        alert('Hatalı giriş! Lütfen doğru bir hesaplama yapınız.');
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

document.querySelectorAll('.select').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (!isNaN(parseInt(buttonText)) || buttonText === '.') {
            appendInput(buttonText);
        } else if (buttonText === '+' || buttonText === '-' || buttonText === 'x' || buttonText === '/') {
            appendOperator(buttonText);
        } else if (buttonText === '=') {
            calculate();
        } else if (buttonText === 'AC') {
            clearDisplay();
        } else if (buttonText === '%') {
            calculatePercentage();
        } else if (buttonText === '+/-') {
            toggleSign();
        }
    });
});
