const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

/* Error Messages */
const nanInput = document.getElementById('valid-error');
const lowInput = document.getElementById('greater-than-error');
const highInput = document.getElementById('lesser-than-error');


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
const inputInt = parseInt(userInput.value);
/* const validInput = () => {

    return;
} */

const displayResult = () => {
    if (!userInput.value || isNaN(userInput.value)) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        nanInput.classList.remove('hide');
        return;
    }
    else if(userInput.value < 0) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        lowInput.classList.remove('hide');
        return;
    }

    else if(userInput.value > 4000) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        highInput.classList.remove('hide');
        return;
    }
    else {
        output.classList.remove('hide');
        output.classList.remove('number-result');
        return;
    }
}

convertBtn.addEventListener('click', displayResult);