let timeOutId;
const add = function() {
    //refresh setTimeout time
    if(timeOutId) {
        console.log('clear' + timeOutId);
        clearTimeout(timeOutId);
    }
    const pElement = document.querySelector('.p');
    pElement.innerHTML = 'Added'
    timeOutId = setTimeout(function() {
        pElement.innerHTML = ''
    },2000);
}