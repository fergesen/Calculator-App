//const fs = require('fs')

// let oneBtn = document.getElementById('calc-one')
// let twoBtn = document.getElementById('calc-two')
// let threeBtn= document.getElementById('calc-three')
// let fourBtn = document.getElementById('calc-four')
// let fiveBtn = document.getElementById('calc-five')
// let sixBtn = document.getElementById('calc-six')
// let sevenBtn = document.getElementById('calc-seven')
// let eightBtn = document.getElementById('calc-eight')
// let nineBtn = document.getElementById('calc-nine')
// let zeroBtn = document.getElementById('calc-zero')

let displayBtnElement = document.getElementById('calc-display')
let clearBtn = document.getElementById('calc-clear')
// let modBtn = document.getElementById('calc-mod')
let pointBtn = document.getElementById('calc-point')
// let divideBtn = document.getElementById('calc-divide')
// let multiplyBtn = document.getElementById('calc-multiply')
// let minusBtn = document.getElementById('calc-minus')
// let plusBtn = document.getElementById('calc-plus')

let displayOutput = document.getElementById('user-output')

let displayBtn = '0'
let pendingDisplay
let evalStringArray = []

let calcNumBtns = document.getElementsByClassName('calc-btn-num')
let calcOpBtns = document.getElementsByClassName('calc-btn-op')


function updateDisplayVal(clickObj) {
    let btnText = clickObj.target.innerText

    if(displayBtn === '0') {
        displayBtn = ''
    }
    displayBtn += btnText
    displayBtnElement.innerHTML = displayBtn
}

function performOp(clickObj) { 
    let operator = clickObj.target.innerText
    let prevOp

    switch (operator) {
        case '+':
            pendingDisplay = displayBtn
            displayBtn = '0'
            displayBtnElement.innerText = displayBtn
            evalStringArray.push(pendingDisplay)
            evalStringArray.push('+')
            prevOp = '+'
            break;
        case '-':
            pendingDisplay = displayBtn
            displayBtn = '0'
            displayBtnElement.innerText = displayBtn
            evalStringArray.push(pendingDisplay)
            evalStringArray.push('-')
            prevOp = '-'
            break;
        case '*':
            pendingDisplay = displayBtn
            displayBtn = '0'
            displayBtnElement.innerText = displayBtn
            evalStringArray.push(pendingDisplay)
            evalStringArray.push('*')
            prevOp = '*'
            break;
        case '/':
            pendingDisplay = displayBtn
            displayBtn = '0'
            displayBtnElement.innerText = displayBtn
            evalStringArray.push(pendingDisplay)
            evalStringArray.push('/')
            prevOp = '/'
            break;
        case '%':
            pendingDisplay = displayBtn
            displayBtn = '0'
            displayBtnElement.innerText = displayBtn
            evalStringArray.push(pendingDisplay)
            evalStringArray.push('%')
            prevOp = '%'
            break;  

        case '=':
                
                // Calculate
                evalStringArray.push(displayBtn)
                console.log(evalStringArray)
                let evaluation = eval(evalStringArray.join(' '))
                displayBtnElement.innerText = evaluation
                

            // Create output
            evalStringArray.push('=')
            prevOp = '='
            evalStringArray.push(evaluation)

            let outputString = evalStringArray.join(' ')
            
            //displayOutput.innerText = outputString
            let output = document.createElement("tr")
            output.innerText = outputString
            document.getElementById("user-output").prepend(output)

            // Incase they want to make more calculations reset the string
            evalStringArray = []
            displayBtn = String(evaluation)
            
            break

        default:
            break;
    }
}


for(let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false)
}

for(let i = 0; i < calcOpBtns.length; i++) {
    calcOpBtns[i].addEventListener('click', performOp, false)
}

clearBtn.onclick = () => {
    displayBtn = '0'
    pendingDisplay = undefined
    evalStringArray = []
    displayBtnElement.innerHTML = displayBtn
}

pointBtn.onclick = () => {
    if(!displayBtn.includes('.'))
    displayBtn += '.'
    displayBtnElement.innerHTML = displayBtn
}