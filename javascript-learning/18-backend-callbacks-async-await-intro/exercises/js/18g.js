async function greeting() {
    try {
        const response = await fetch('https://supersimplebackend.dev/greeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            /*
            body: JSON.stringify({
                name: 'C_11nJxx'
            })*/
        });
        if (response.status >= 400) {
            throw response;
        };
        const text = await response.text();
        console.log(text);
    } catch (error) {
        if(error.status === 400) {
            const errorText = await error.json();
            console.log(errorText);
        }else {
            console.log('Network error.Please try again later.');
        }
    }
}

greeting();