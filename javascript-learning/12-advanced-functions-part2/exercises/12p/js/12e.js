const add = function() {
    const pElement = document.querySelector('.p');
    pElement.innerHTML = 'Added'
    setTimeout(() => {
        pElement.innerHTML = ''
    },1000);
}