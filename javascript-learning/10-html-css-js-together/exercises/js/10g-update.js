function handleClick(item) {
    const button = document.querySelector(`.${item}-button`);
    if (button.classList.contains('is-toggled')) {
        button.classList.remove('is-toggled');
    } else {
        // remove the other 2 buttons lights
        removePreviousButtonLights();
        
        button.classList.add('is-toggled');        
    }
}

function removePreviousButtonLights() {
    const previousButton = document.querySelector('.is-toggled');
    if(previousButton) {
        // console.log(previousButton);
        previousButton.classList.remove('is-toggled');
    }
}