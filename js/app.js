// pin generate 
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const caleInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            caleInput.value = '';
        }
    } else {
        const previousNumber = caleInput.value;
        const newNumber = previousNumber + number;
        caleInput.value = newNumber;
    }

});

// verify pin 
function verifyPin() {
    const generatePin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('verify-success');
    const verifyError = document.getElementById('verify-fail');
    if (generatePin == typedNumbers) {
        successMessage.style.display = 'block';
        verifyError.style.display = 'none';
    } else {
        successMessage.style.display = 'none';
        verifyError.style.display = 'block';
    }
}

