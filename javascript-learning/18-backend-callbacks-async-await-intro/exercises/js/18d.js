async function fun() {
    const response = await fetch('https://supersimplebackend.dev/greeting',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'C_11nJxx'
        })
    });
    const data = await response.text();
    console.log(data);
}

fun();