const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const result = document.getElementById('result');
const test = document.getElementById('test-btn');

const romanValues = [
    {
        symbol: 'I',
        value: 1
    },

    {
        symbol: 'IV',
        value: 4
    },

    {
        symbol: 'V',
        value: 5
    },

    {
        symbol: 'IX',
        value: 9
    },

    {
        symbol: 'X',
        value: 10
    },

    {
        symbol: 'XL',
        value: 40 
    },

    {
        symbol: 'L',
        value: 50   
    },

    {
        symbol: 'XC',
        value: 90   
    },

    {
        symbol: 'C',
        value: 100   
    },

    {
        symbol: 'CD',
        value: 400  
    },

    {
        symbol: 'D',
        value: 500 
    },

    {
        symbol: 'CM',
        value: 900  
    },

    {
        symbol: 'M',
        value: 1000  
    },
]

/* validates if input is valid and displays error message if it is not */
const isInputValid = () => {
    const inputInt = parseInt(userInput.value);
    if (!userInput.value || isNaN(inputInt)) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        output.classList.remove('number-result');
        result.textContent = "Please enter a valid number."
        return false;
    }
    else if(inputInt <= 0) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        output.classList.remove('number-result');
        result.textContent = "Please enter a number greater than or equal to 1"
        return false;
    }
    else if(userInput.value > 3999) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        output.classList.remove('number-result');
        result.textContent = "Please enter a number less than or equal to 3999"
        return false;
    }
    else {
        output.classList.add('hide');
        output.classList.remove('number-result');
        result.textContent = "";
        return;
    }
}

const findValue = () => {
    let inputInt = parseInt(userInput.value);
    const reversedValues = [...romanValues].reverse();
    let symbolArr = [];
    const validInput = isInputValid();

    if(validInput === false) {
        return;
    }

    reversedValues.forEach(romanNumeral => {
        console.log(romanNumeral.value);
        while(romanNumeral.value <= inputInt) {
        symbolArr.push(romanNumeral.symbol);
        inputInt -= romanNumeral.value;
        console.log(symbolArr.join(''));
        const answer = symbolArr.join('');
        output.classList.remove('hide');
        output.classList.add('number-result');
        result.textContent = answer;
        }
    });
}

convertBtn.addEventListener('click', findValue);


