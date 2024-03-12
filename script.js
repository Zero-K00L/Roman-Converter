const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const result = document.getElementById('result');

/* Error Messages */


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
const validInput = () => {
    const inputInt = parseInt(userInput.value);
    if (!userInput.value || isNaN(inputInt)) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        result.textContent = "Please enter a valid number."
        return;
    }
    else if(inputInt <= 0) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        result.textContent = "Please enter a number greater than or equal to 1"
        return;
    }
    else if(userInput.value > 3999) {
        output.classList.remove('hide');
        output.classList.add('error-result');
        result.textContent = "Please enter a number less than or equal to 3999"
        return;
    }
    else {
        output.classList.add('hide');
        output.classList.remove('number-result');
        result.textContent = "";
        return;
    }
}



convertBtn.addEventListener('click', validInput);