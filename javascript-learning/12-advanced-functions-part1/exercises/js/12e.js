const add = function() {
    const pElement = document.querySelector('.p');
    pElement.innerHTML = 'Added'
    setTimeout(function() {
        pElement.innerHTML = ''
    },1000);
}