function multyply() {
    let [num1, num2] = getNumbersValue();
    document.getElementById('result').innerHTML = num1 * num2;
}

function divide() {
    let [num1, num2] = getNumbersValue();
    document.getElementById('result').innerHTML = num1 / num2;
}

function plus() {
    let [num1, num2] = getNumbersValue();
    document.getElementById('result').innerHTML = num1 + num2;
}

function minus() {
    let [num1, num2] = getNumbersValue();
    document.getElementById('result').innerHTML = num1 - num2;
}

function getNumbersValue() {
    arr = [];
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    arr.push(Number(a));
    arr.push(Number(b));
    return arr;
}