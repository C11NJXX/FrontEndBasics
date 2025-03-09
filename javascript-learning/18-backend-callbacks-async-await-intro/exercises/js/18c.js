async function fun() {
    const response = await fetch('https://supersimplebackend.dev/greeting');
    const data = await response.text();
    console.log(data);
}

fun();