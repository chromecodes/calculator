const num1 = document.getElementById('1');
num2 = document.getElementById('2');
num3 = document.getElementById('3');
num4 = document.getElementById('4');
num5 = document.getElementById('5');
num6 = document.getElementById('6');
num7 = document.getElementById('7');
num8 = document.getElementById('8');
num9 = document.getElementById('9');
num0 = document.getElementById('0');
nums = document.querySelectorAll('.num')
console.log(nums);

nums.forEach(num => num.addEventListener("click", initilize))


dumpf='',dumpl ='';
operator = '+';
console.log(operator);

function initilize(){
if (operator == '') {
    dumpf += this.value;
    parseInt(dumpf);
    firstNum = dumpf
    console.log(operator);
    console.log(1);
} else {

    dumpl += this.value;
    parseInt(dumpl);
    lastNum = dumpl
    console.log(operator);
    console.log(2);
}

};

function operation(firstNum, operator , lastNum){
    switch (operator) {
        case '+':
            return add(firstNum,lastNum);
            break;
        case '-':
            return sub(firstNum,lastNum)
            break;
        case 'x':
            return multiply(firstNum,lastNum)
            break;
        case '÷':
            return divide(firstNum,lastNum)
            break;
    }
}
function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
