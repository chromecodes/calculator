/**   DOM SELECTORS   **/

const
    nums = document.querySelectorAll('.num');
    oPerators = document.querySelectorAll('.operator');
    equal = document.querySelector('.equal');
    display1 = document.querySelector('.display-1');
    display2 = document.querySelector('.display-2');
    clearbtn = document.querySelector('.clear');
    deletebtn = document.querySelector('.delete');

/**   GLOBAL VARIABLES   **/

let firstNum, lastNum, ans,
    dumpf = '', dumpl = '', operator = '', display = '';

/**   CALCULATOR CLEAR FUNCTION 
 *    { allow the user to clear all the value and completely reset the calculator}   **/

function clear() {
    dumpf = '', dumpl = '', operator = '', display = '';
    firstNum = undefined, lastNum = undefined, ans = undefined;
    display1.textContent = '';
    display2.textContent = '';
}

/**   CALCULATOR DELETE FUNCTION 
 *    { allow the user to delete the last entered value doesn't work on operators, 
 *      to change operator simply select different operator.}   **/

function deletes() {
    if (lastNum == undefined) {
        firstNum = firstNum.substr(0, (firstNum.length - 1));
        dumpf = firstNum
        display2.textContent = firstNum;
    } else {
        lastNum = lastNum.substr(0, (lastNum.length - 1));
        dumpl = lastNum
        display2.textContent = lastNum;
    }
}
/**   CALCULATOR ASIGN FUNCTION 
 *    { set the operator value based on input }   **/

function asign() {
    console.log(1);
    console.log(firstNum);
    if (firstNum !== undefined) {
        if (lastNum !== undefined) {
            operation()
        }
        operator = this.value;
        display1.textContent = `${firstNum} ${operator} `
    }
}

/**   CALCULATOR INITILIZE FUNCTION 
 *    { set the values to the intial based on the input }   **/

function initilize(e) {
    if (operator == '') {
        console.log(this.value);
        dumpf += this.value;
        if (`${Number(dumpf)}` == 'NaN') {
            tempf = dumpf
            dumpf = tempf.substr(0, (tempf.length - 1));
        }
        firstNum = dumpf;
        display2.textContent = firstNum;
        console.log(firstNum);
    } else {
        dumpl +=this.value;
        if (`${Number(dumpl)}` == 'NaN') {
            templ = dumpl
            dumpl = templ.substr(0, (templ.length - 1));
        }
        lastNum = dumpl;
        display2.textContent = lastNum;
    }
};

/**   CALCULATOR OPERATION FUNCTION 
 *    { Call the math function based on the operator selected }   **/

function operation() {
    if (firstNum !== undefined && lastNum !== undefined) {
        dumpl = ''; dumpf = '';
        switch (operator) {
            case '+':
                ans = '' + add(firstNum, lastNum);
                break;
            case '-':
                ans = '' + sub(firstNum, lastNum);
                break;
            case 'x':
                ans = '' + multiply(firstNum, lastNum);
                break;
            case '÷':
                ans = '' + divide(firstNum, lastNum);
                break;
            case '^':
                ans = '' + power(firstNum, lastNum);
                break;
        }
        console.log(ans);
        result();
    }
}

/**   CALCULATOR RESULT FUNCTION 
 *    { showe's the result in display and reset the values }   **/

function result(){
    if(ans == 'ERROR...'){
        display1.textContent = `${firstNum} ${operator} ${lastNum} =`;
        display2.textContent = ans;
        firstNum = undefined, lastNum = undefined, ans = undefined;
        operator = '';
    } else {
        if ((ans - Math.floor(ans)) !== 0) {
            ans = Math.round(ans * 1000) / 1000;
        } else if (ans.length > 10) {
            ans = ans.substr(0, 9) + 'e' + (ans.length - 9);
        }
        display1.textContent = `${firstNum} ${operator} ${lastNum} =`;
        display2.textContent = ans;
        firstNum = ans;
        operator = '';
        lastNum = undefined;
    }
  
}

/**   MATH FUNCTION  **/

function add(a, b) {
    return Number(a) + Number(b);
}
function sub(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if ( b != '0'){
        return a / b; 
    } else {
       return  'ERROR...'
    }
}
function power(a, b) {
    return a ** b;
}
 
/**   KEYBOARD FUNCTIONALITY  **/

function keyboard(e) {
    if (e.key >= 0 && e.key < 10) {
        document.getElementById(`${e.key}`).click()
    } else if (e.key == '+' || e.key == '-' || e.key == '/' || e.key == '*' || e.key == '^') {
        document.getElementById(`${e.key}`).click()
    } else if (e.key === 'Backspace') {
        document.querySelector('.delete').click();
    } else if (e.key === 'Delete') {
        document.querySelector('.clear').click();
    } else if (e.key === '=' || e.key === 'Enter') {
        document.querySelector('.equal').click();
    }
}

/**   EVENT LISTENERS  **/

nums.forEach(num => num.addEventListener("click", initilize))
oPerators.forEach(oPerator => oPerator.addEventListener('click', asign))
equal.addEventListener('click', operation);
clearbtn.addEventListener('click', clear);
deletebtn.addEventListener('click', deletes);
window.addEventListener('keydown', keyboard)