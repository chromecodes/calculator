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
display1 = document.querySelector('.display-1')
display2 = document.querySelector('.display-2')
clearbtn = document.querySelector('.clear')
deletebtn = document.querySelector('.delete')

console.log(nums);


dumpf = '', dumpl = '', operator = '', display = '';

let firstNum, lastNum, ans;


function clear() {
    dumpf = '', dumpl = '', operator = '', display = '';
    firstNum = undefined, lastNum = undefined, ans = undefined;
    display1.textContent = '';
    display2.textContent = '';
}

function deletes(){
    console.log(1);
    console.log(firstNum);
    console.log(lastNum);
    if (lastNum == undefined) {
        firstNum = firstNum.substr(0,(firstNum.length-1));
        dumpf = firstNum
        display2.textContent = firstNum;
    } else {
        lastNum = lastNum.substr(0,(lastNum.length-1));
        dumpl = lastNum
        display2.textContent = lastNum;
    }
}

function asign() {
    if (firstNum !== undefined) {
        if (lastNum !== undefined) {
            operation()
        }
        operator = this.value;
        display1.textContent = `${firstNum} ${operator} `
        console.log(display2.textContent);
        console.log(typeof (operator));
        console.log(lastNum);
    }
}

function initilize() {
    if (operator == '') {
        dumpf += this.value;
        if(`${Number(dumpf)}` == 'NaN' ){
            tempf = dumpf
            dumpf = tempf.substr(0,(tempf.length-1));
        }
        firstNum = dumpf;
        display2.textContent = firstNum;

    } else {
        dumpl += this.value;
        if(`${Number(dumpl)}` == 'NaN' ){
            templ = dumpl
            dumpl = templ.substr(0,(templ.length-1));
        }
        lastNum = dumpl;
        display2.textContent = lastNum;
    }
};

function operation() {
    if (firstNum !== undefined && lastNum !== undefined) {
        dumpl = ''; dumpf = '';
        switch (operator) {
            case '+':
                ans = add(firstNum, lastNum);
                break;
            case '-':
                ans = sub(firstNum, lastNum)
                break;
            case 'x':
                ans = multiply(firstNum, lastNum)
                break;
            case '÷':
                ans = divide(firstNum, lastNum)
                break;
            case '^':
                ans = power(firstNum, lastNum)
                break;
        }
        if ((ans - Math.floor(ans)) !== 0) {
            ans = Math.round(ans * 1000) / 1000
        }
        display1.textContent = `${firstNum} ${operator} ${lastNum} =`
        display2.textContent = ans;

        firstNum = ''+ans;
        operator = '';
        lastNum = undefined;
    } 
}
function add(a, b) {
    return Number(a) + Number(b) ;
}
function sub(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function power (a, b){
    return a**b;
}


nums.forEach(num => num.addEventListener("click", initilize))
oPerators.forEach(oPerator => oPerator.addEventListener('click', asign))
equal.addEventListener('click', operation);
clearbtn.addEventListener('click', clear);
deletebtn.addEventListener('click', deletes);