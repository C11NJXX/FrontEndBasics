const xhr = new XMLHttpRequest();
xhr.addEventListener('load', (response) => {
    console.log(response);
});
xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.send();