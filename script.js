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
oPerators = document.querySelectorAll('.operator');
equal = document.querySelector('.equal');





dumpf='',dumpl ='';
operator = '';

let firstNum,lastNum,ans;

function asign(){
    operator = this.value;   
    console.log(firstNum);
    console.log(operator);
    console.log(lastNum);
    if(lastNum !== undefined){
        console.log(lastNum);
    }
}

function initilize(){
if (operator == '') {
    dumpf += this.value;
    firstNum = dumpf;
} else {
    dumpl += this.value;
    lastNum = dumpl;
}
};

function operation(){
    dumpl = 0;
    switch (operator) {
        case '+':
            ans = add(firstNum,lastNum);
            break;
        case '-':
            ans =  sub(firstNum,lastNum)
            break;
        case 'x':
            ans =  multiply(firstNum,lastNum)
            break;
        case '÷':
            ans =  divide(firstNum,lastNum)
            break;
    }
    
    console.log(ans);
    firstNum = ans;

}
function add(a,b){
    return parseInt(a) + parseInt(b);
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


nums.forEach(num => num.addEventListener("click", initilize))
oPerators.forEach(oPerator => oPerator.addEventListener('click',asign))
equal.addEventListener('click',operation);