const changeText = function() {
    const buttonElement = document.querySelector('.btn');
    buttonElement.innerHTML = 'Loading...'
    setTimeout(function() {
        buttonElement.innerHTML = 'Finished!'
    },1000);
}