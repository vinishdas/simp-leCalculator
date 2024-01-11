const displayValue = document.getElementById('inputValuedisplay');
function insertvalue(value) {
    displayValue.value += value;
}

function clearFully()
{
    displayValue.value = '';
}
function calculate(){
    try {
        var result = eval(displayValue.value);
        displayValue.value = result;
    } catch (error) {
       displayValue.value = 'Error';
    }
}
function elementremoveOne(){
    displayValue.value = displayValue.value.slice(0,-1);
}
