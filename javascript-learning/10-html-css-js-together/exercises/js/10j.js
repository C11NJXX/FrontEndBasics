        //read calculation from localStorage and create calculation if it's undefined
        let calculation = localStorage.getItem('calculation') || '';
        document.querySelector('.text').innerHTML = calculation;
        function updateCalculation(operator) {
            if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
                calculation += ' ' + operator + ' ';
            } else {
                calculation += operator;
            }
            //Saved in localStorage
            localStorage.setItem('calculation', calculation);
            document.querySelector('.text').innerHTML = calculation;
        }