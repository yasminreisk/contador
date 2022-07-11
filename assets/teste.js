var currentNumberWrapper = document.getElementById ('currentNumber')
var currentNumber = 0 //mudar o html dele

function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; //html dentro dele
}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber; 
}