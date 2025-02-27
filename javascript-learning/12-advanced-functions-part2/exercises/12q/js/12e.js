const add = function () {
    const pElement = document.querySelector('.p');
    pElement.innerHTML = 'Added'
    setTimeout(() => {
        pElement.innerHTML = ''
    }, 1000);
}

document.querySelector('.js-btn').addEventListener('click', () => {
    add();
})