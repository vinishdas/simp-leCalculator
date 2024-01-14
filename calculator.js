const displayValue = document.getElementById('inputValuedisplay');
function insertvalue(value) {
    playButtonClick();
    displayValue.value += value;

}

function clearFully()
{
    playButtonClick();

    displayValue.value = '';
    
}
function calculate(){
    try {
        var result = eval(displayValue.value);
        var historyList = document.getElementById('calculationHistory');
        var listItem = document.createElement('li');
        listItem.textContent = `${document.getElementById('inputValuedisplay').value} = ${result}`;
        historyList.appendChild(listItem);
        displayValue.value = result;
    } catch (error) {
       displayValue.value = 'Error';
    }
}
function elementremoveOne(){
    displayValue.value = displayValue.value.slice(0,-1);
    playButtonClick();
}
function playButtonClick() {
     
    
    var buttonClickSound = document.getElementById('buttonClickSound');
    if (buttonClickSound) {
        buttonClickSound.currentTime = 0;  
        buttonClickSound.playbackRate = 2;
        buttonClickSound.play();
    }
}