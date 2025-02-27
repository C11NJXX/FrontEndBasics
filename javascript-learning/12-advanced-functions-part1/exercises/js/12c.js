const changeText = function() {
    setTimeout(function() {
        const buttonElement = document.querySelector('.btn');
        buttonElement.innerHTML = 'Finished!'
    },1000);
}