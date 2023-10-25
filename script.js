let array = [];

function addData() {
    let selectedInputValue = document.getElementById('data');
    let inputValue = selectedInputValue.value;
    array.push(inputValue);
    showArray();
    selectedInputValue.value = '';
}

function deleteFirstElem() {
    if (array.length > 0) {
        array.shift();
        showArray()
    }
}

function deleteLastElem() {
    if (array.length > 0) {
        array.pop();
        showArray();
    }
}

function showArray() {
    let selectedOutput = document.getElementById('arrayInfo');
    let outputString = '';
    for (let i = 0; i < array.length; i++) {
        outputString += `${i + 1}. ${array[i]} <br>`;
    }
    selectedOutput.innerHTML = outputString;
}

function showDeleteForm() {
    document.getElementById('elemNum').style.display = "inline-block";
    document.getElementById('buttonDeleteN').style.display = "inline-block";
    document.getElementById('elemNum').value='';
}

function hideDeleteForm() {
    document.getElementById('elemNum').style.display = "none";
    document.getElementById('buttonDeleteN').style.display = "none";
}

function deleteNElem() {
    let selectedInputElemNum = document.getElementById('elemNum');
    let elemNumValue=selectedInputElemNum.value;
    if (validateElementNum(elemNumValue)){
        array.splice((elemNumValue * 1 - 1), 1);
        showArray();
        hideDeleteForm();
    }
}

function validateElementNum(elemNumValue) {
    if (isNaN(elemNumValue) || elemNumValue <= 0 || elemNumValue > array.length) {
        alert('Invalid value, enter a new value');
    } else {
        return true;
    }
}