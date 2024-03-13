const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const result = document.getElementById('result');
const test = document.getElementById('test-btn');

romanValues = [
    {
        romanNumeral: 'I',
        value: 1
    },

    {
        romanNumeral: 'IV',
        value: 4
    },

    {
        romanNumeral: 'V',
        value: 5
    },

    {
        romanNumeral: 'IX',
        value: 9
    },

    {
        romanNumeral: 'X',
        value: 10
    },

    {
        romanNumeral: 'XL',
        value: 40 
    },

    {
        romanNumeral: 'L',
        value: 50   
    },

    {
        romanNumeral: 'XC',
        value: 90   
    },

    {
        romanNumeral: 'C',
        value: 100   
    },

    {
        romanNumeral: 'CD',
        value: 400  
    },

    {
        romanNumeral: 'D',
        value: 500 
    },

    {
        romanNumeral: 'CM',
        value: 900  
    },

    {
        romanNumeral: 'M',
        value: 1000  
    },
]

/* validates if input is valid and displays error message if it is not */
const isInputValid = () => {
    const inputInt = parseInt(userInput.value);
    if (!userInput.value || isNaN(inputInt)) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        result.textContent = "Please enter a valid number."
        return false;
    }
    else if(inputInt <= 0) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        result.textContent = "Please enter a number greater than or equal to 1"
        return false;
    }
    else if(userInput.value > 3999) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        result.textContent = "Please enter a number less than or equal to 3999"
        return false;
    }
    else {
        output.classList.add('hide');
        output.classList.remove('number-result');
        result.textContent = "";
        return true;
    }
}

const convertInput = () => {
    const inputInt = parseInt(userInput.value);
    const inputResult = isInputValid();
    if(inputResult === true) {
        const inputArr = inputInt.toString().split('').map(Number);
        console.log(inputArr); //testing only
        return inputArr;
    }
    else {
        return;
    }
} 

const findValue = () => {
    const inputInt = parseInt(userInput.value);
    const inputResult = isInputValid();
    const inputArrReversed = convertInput().reverse();
    let answer = 0;

    while(inputInt !== answer) {
        romanValues.forEach(romanValue => {
            if(romanValue.value);
        })
        return;
    }
    
}


convertBtn.addEventListener('click', isInputValid);
test.addEventListener('click', findValue);