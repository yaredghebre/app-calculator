function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastDigit() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendDigit(digit) {
    let display = document.getElementById('display');
    let inputValue = display.value;

    // condition to prevent starting with an operator
    if (inputValue === '' && (digit === '+' || digit === '-' || digit === '*' || digit === '/')) {
        return;
    }

    let lastDigit = inputValue[inputValue.length - 1];

    if (lastDigit === '+' || lastDigit === '-' || lastDigit === '*' || lastDigit === '/') {
        if (digit === '+' || digit === '-' || digit === '*' || digit === '/') {
            display.value = inputValue.slice(0, -1) + digit;
        } else {
            display.value += digit;
        }
    } else {
        display.value += digit;
    }
}

function calculate() {
    let display = document.getElementById('display');
    let inputValue = display.value;

    let result = eval(inputValue);
    display.value = result === Infinity ? 'Error' : result;

}