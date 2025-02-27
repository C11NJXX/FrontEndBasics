const changeText = function() {
    setTimeout(() => {
        const buttonElement = document.querySelector('.btn');
        buttonElement.innerHTML = 'Finished!'
    },1000);
}