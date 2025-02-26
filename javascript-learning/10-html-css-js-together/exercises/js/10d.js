function handleClick() {
    const game_button = document.querySelector('.game-button');
    if (game_button.classList.contains('is-toggled')) {
        game_button.classList.remove('is-toggled');
    } else {
        game_button.classList.add('is-toggled');
    }
}