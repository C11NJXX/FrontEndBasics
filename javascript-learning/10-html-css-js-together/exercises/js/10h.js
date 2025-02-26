function calculateMoney() {
    //Get the amount of money from input
    const moneyElement = document.querySelector('.money');
    const messageElement = document.querySelector('.message');
    if (Number(moneyElement.value) < 0) {
        // add a class to make the message font color to red
        messageElement.classList.add('error-message');
        messageElement.innerHTML = `Error: cost cannot be less than $0`;
        return;
    }
    const moneyAmount = Number(moneyElement.value) >= 40 ? Number(moneyElement.value) : Number(moneyElement.value) + 10;
    // Show the final money amount in the p element down below
    // remove error-message class if it's exist
    if (messageElement.classList.contains('error-message')) {
        messageElement.classList.remove('error-message');
    }
    messageElement.innerHTML = `$${moneyAmount}`;
}
function handlePress(event) {
    if (event.key === 'Enter') {
        calculateMoney();
    }
}