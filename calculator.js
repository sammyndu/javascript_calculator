// function for addition
const add = (num1, num2) => {
    const ans = num1+num2;
    if (ans.toString().length > 8) {
        return ans.toExponential(2);
    }
    else {
        return ans;
    }
}
// function for subtraction
const subtract = (num1, num2) => {
    const ans = num1-num2;
    if (ans.toString().length > 8) {
        return ans.toExponential(2);
    }
    else {
        return ans;
    }
} 
// function for multiplication
const multiply = (num1, num2) => {
    const ans = num1*num2;
    if (ans.toString().length > 8) {
        return ans.toExponential(2);
    }
    else {
        return ans;
    }
} 
// function for division
const divide = (num1, num2) => {
    const ans = num1/num2;
    if (ans.toString().length > 8) {
        return ans.toExponential(2);
    }
    else {
        return ans;
    }
}

const handleExp = () => {
    // handles calculation involving exponential
    const val = screen.textContent.indexOf('+');
    if (screen.textContent.includes('+', val+2)) {
        const splitPoint = screen.textContent.indexOf('+',val+2)
        const ans1 = screen.textContent.slice(0,splitPoint);
        const ans2 = screen.textContent.slice(splitPoint+1);
        console.log(ans1);
        screen.textContent = add(Number(ans1), Number(ans2)) ;
    }
    else {
        if (screen.textContent.includes('-', val+2)) {
            const splitPoint = screen.textContent.indexOf('-',val+2)
            const ans1 = screen.textContent.slice(0,splitPoint);
            const ans2 = screen.textContent.slice(splitPoint+1);
            console.log(ans1);
            screen.textContent = subtract(Number(ans1), Number(ans2)) ;
        }
        else if (screen.textContent.includes('x', val+2)) {
            const splitPoint = screen.textContent.indexOf('x',val+2)
            const ans1 = screen.textContent.slice(0,splitPoint);
            const ans2 = screen.textContent.slice(splitPoint+1);
            console.log(ans1);
            screen.textContent = multiply(Number(ans1), Number(ans2)) ;
        }
        else if (screen.textContent.includes('/', val+2)) {
            const splitPoint = screen.textContent.indexOf('/',val+2)
            const ans1 = screen.textContent.slice(0,splitPoint);
            const ans2 = screen.textContent.slice(splitPoint+1);
            console.log(ans1);
            screen.textContent = divide(Number(ans1), Number(ans2)) ;
        }
        else if (e.target.textContent === '='){
                
        }
        else{
            screen.textContent += e.target.textContent;
        }
        
    }
}

const numlist = document.querySelectorAll('.number'); //lsit of all elements with class number

const oplist = document.querySelectorAll('.operation'); //lsit of all elements with class operator
let ans;
let screen = document.querySelector(".screen-text");


//function for inputing number in the calc
const inputNumber = (e) => {
    if (screen.textContent !== '0'){
        if (screen.textContent === 'NaN') {
            screen.textContent = e.target.textContent;
        }
        else {
            screen.textContent = screen.textContent + e.target.textContent;
        }
        
    }
    else {
        if (e.target.textContent !== '0'){
            screen.textContent = e.target.textContent;
        }
    }
}

//function for inputing anything other than number in the calc
const inputAction = (e) => {
    if (screen.textContent === '0') {
        if (e.target.textContent === '-'){
            screen.textContent = e.target.textContent;
        }
    }
    else if (screen.textContent === 'NaN') { 
        
    }
    else if (e.target.textContent === 'del') {
        if (screen.textContent.length == 1) {
            screen.textContent = '0';
        }
        else{
            let newtext = screen.textContent.split("");
            newtext.pop() 
            screen.textContent = newtext.join("");
        }
    }
    else if (e.target.textContent === 'AC') { 
        screen.textContent = "0";
    }
    
    else{        
        if (screen.textContent.length >= 3) {
            if (e.target.textContent === '=') {
                if (screen.textContent.includes('+', 1)) {
                    if (screen.textContent.includes('e', 1)) { 
                        handleExp();
                    }
                    else{
                        ans = screen.textContent.split('+');
                        screen.textContent = add(Number(ans[0]), Number(ans[1])) ;
                    }      
                    
                }
                else if (screen.textContent.includes('-', 1)) {
                    if (screen.textContent[0] === '-') {
                        if (screen.textContent.includes('e', 1)) {
                            handleExp();
                        }
                        else{
                            ans = screen.textContent.slice(1).split('-');
                            screen.textContent = subtract(Number(-ans[0]), Number(ans[1]));
                        }     
                    }
                    else{
                        ans = screen.textContent.split('-');
                        screen.textContent = subtract(Number(ans[0]), Number(ans[1]));                        
                    }
                }
                else if (screen.textContent.includes('x', 1)) {
                    ans = screen.textContent.split('x');
                    screen.textContent = multiply(Number(ans[0]), Number(ans[1]));
                    
                }
                else if (screen.textContent.includes('/', 1)) {
                    ans = screen.textContent.split('/');
                    screen.textContent = divide(Number(ans[0]), Number(ans[1]));
                    
                }
            }
            else {
                if (screen.textContent.includes('+', 1)) {
                    if (screen.textContent.includes('e', 1)) {
                        handleExp();
                    }
                    else{
                        ans = screen.textContent.split('+');
                        screen.textContent = add(Number(ans[0]), Number(ans[1])) + e.target.textContent;
                    }                   
                    
                }
                else if (screen.textContent.includes('-', 1)) {
                    if (screen.textContent[0] === '-') {
                        if (screen.textContent.includes('e', 1)) {
                            handleExp();
                        }
                        else{
                            ans = screen.textContent.slice(1).split('-');
                            screen.textContent = subtract(Number(-ans[0]), Number(ans[1]));
                        }       
                        
                        
                    }
                    else{
                        ans = screen.textContent.split('-');
                        screen.textContent = subtract(Number(ans[0]), Number(ans[1]));
                        
                    }
                }
                else if (screen.textContent.includes('x', 1)) {
                    ans = screen.textContent.split('x');
                    screen.textContent = multiply(Number(ans[0]), Number(ans[1])) + e.target.textContent;
                    
                }
                else if (screen.textContent.includes('/', 1)) {
                    ans = screen.textContent.split('/');
                    screen.textContent = divide(Number(ans[0]), Number(ans[1])) + e.target.textContent;
                    
                }
                else {
                    screen.textContent += e.target.textContent;
                }
            }
            
        }
        else {
            screen.textContent += e.target.textContent;
        }
    }
}

numlist.forEach(num => {
    num.addEventListener('click', inputNumber); // adding event listener to every class number
});

oplist.forEach(op => {
    op.addEventListener('click', inputAction); // adding event listener to every class operation
});



