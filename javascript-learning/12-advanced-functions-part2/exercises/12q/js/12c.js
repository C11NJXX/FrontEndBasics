const changeText = function() {
    setTimeout(() => {
        const buttonElement = document.querySelector('.btn');
        buttonElement.innerHTML = 'Finished!'
    },1000);
};

document.querySelector('.js-btn').addEventListener('click',() => {
    changeText();
})