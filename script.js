const deleteButton = document.getElementById('deleteButton');
deleteButton.setAttribute('disabled', '');

function getInputValues() {
    let array = [];
    let inputElements = getInputElements();
    for (i = 0; i < inputElements.length; i++) {
        array.push(inputElements[i].value);
    }
    return array;
}

function parseValue() {
    let array = [];
    let valuesArray = getInputValues();
    for (i = 0; i < valuesArray.length; i++) {
        if (valuesArray[i] == '') {
            array.push(NaN);
        } else {
            array.push(Number(valuesArray[i]));
        }
    }
    return array;
}

function multyply() {
    calculate('*');
}

function divide() {
    calculate('/');
}

function plus() {
    calculate('+');
}

function minus() {
    calculate('-');
}

function addInput() {
    let divInput = document.createElement('div');
    let newInput = document.createElement('input');
    let container = document.getElementById('input_container');
    let elements = getInputElements();
    if (elements.length >= 2) {
        deleteButton.disabled = false;
    } else {
        deleteButton.disabled = true;
    }
    divInput.append(`${elements.length + 1}.`, newInput);
    container.append(divInput);
}

function getInputElements() {
    let elements = document.querySelectorAll('#input_container input');
    return elements;
}

function deleteInput() {
    let elements = getInputElements();
    let elem = document.querySelectorAll('#input_container div:last-child');
    elem[0].remove();
    if (elements.length <= 3) {
        deleteButton.disabled = true;
    }
}

function calculate(operation) {
    showErrors();
    let array = parseValue();
    let valiadateResult = validate(array);
    if (valiadateResult.validateFlag) {
        document.getElementById('result').innerHTML = doCalculate(array, operation);
    } else {
        showErrors(valiadateResult.validateResultArray);
        document.getElementById('result').innerHTML = 'Invalid input value(s)'
    }    
}

function validate(array) {
    let validateResult = {
        validateResultArray: [],
        validateFlag: true
    }
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            validateResult.validateFlag = false;
            validateResult.validateResultArray.push(false);
        } else {
            validateResult.validateResultArray.push(true);
        }
    }
    return validateResult;
}

function doCalculate(array, operation) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result = eval(result + operation + array[i]);
    }
    return result;
}

function showErrors(array) {
    let elem = document.querySelectorAll('#input_container div input');
    if (array !== undefined) {
        for (let i = 0; i < array.length; i++) {
            if (!array[i]) {
                elem[i].style.background = '#ff9595';
            }
        }
    } else {
        for (let i = 0; i<elem.length; i++) {
            elem[i].style.background = 'white';
        }
    }
    return;
}