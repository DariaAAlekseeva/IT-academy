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
        array.push(parseFloat(valuesArray[i]));
    }
    return array;
}

function multyply() {
    let array = parseValue();
    let res = 1;
    for (i = 0; i < array.length; i++) {
        res *= array[i];
    }
    document.getElementById('result').innerHTML = res;
}

function divide() {
    let array = parseValue();
    let res = array[0];
    for (i = 1; i < array.length; i++) {
        res /= array[i];
    }
    document.getElementById('result').innerHTML = res;
}


function plus() {
    
    let res = 0;
    for (i = 0; i < array.length; i++) {
        res += array[i];
    }
    document.getElementById('result').innerHTML = res;
}


function minus() {
    let array = parseValue();
    let res = array[0];
    for (i = 1; i < array.length; i++) {
        res -= array[i];
    }
    document.getElementById('result').innerHTML = res;
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

function calculate(action) {
    let array = parseValue();
    let isValueNan=validate(array);
    if
}

function validate(array){
   
    for (let i=0; i<array.length; i++){
        if (isNaN(array[i])) {
            
        }
    } 
}