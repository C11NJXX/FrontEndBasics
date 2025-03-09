fetch('https://supersimplebackend.dev/greeting').then((response) => {
    return response.text();
}).then((data) => {
    console.log(data);
});