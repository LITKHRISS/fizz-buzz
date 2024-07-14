function fizzBuzz(n) {
    let result = '';
    if (n % 3 === 0) {
        result += 'Fizz';
    } 
    if (n % 5 === 0) {
        result += 'Buzz';
    } 
    return result || n.toString();
}

function numberChecker() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    const result = fizzBuzz(inputNumber);
    const resultElement = document.getElementById('result');

    if (result === inputNumber.toString()) {
        resultElement.textContent = "Try another number.";
    } else {
        resultElement.textContent = result;
    }
}