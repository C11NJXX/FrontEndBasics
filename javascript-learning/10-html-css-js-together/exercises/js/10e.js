function handleClick(item) {
    const button = document.querySelector(`.${item}-button`);
    if (button.classList.contains('is-toggled')) {
        button.classList.remove('is-toggled');
    } else {
        button.classList.add('is-toggled');
    }
}