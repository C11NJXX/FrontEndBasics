function handleClick(item) {
    const button = document.querySelector(`.${item}-button`);
    let btn1;
    let btn2;    
    if (item === 'game') {
        btn1 = document.querySelector('.music-button');
        btn2 = document.querySelector('.tech-button');
    } else if (item === 'music') {
        btn1 = document.querySelector('.game-button');
        btn2 = document.querySelector('.tech-button');
    } else if (item === 'tech') {
        btn1 = document.querySelector('.game-button');
        btn2 = document.querySelector('.music-button');
    }
    if (button.classList.contains('is-toggled')) {
        button.classList.remove('is-toggled');
    } else {
        button.classList.add('is-toggled');        
        // remove the other 2 buttons lights
        if (btn1.classList.contains('is-toggled')) {
            btn1.classList.remove('is-toggled');
        }
        if (btn2.classList.contains('is-toggled')) {
            btn2.classList.remove('is-toggled');
        }
    }
}