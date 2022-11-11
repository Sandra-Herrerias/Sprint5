console.log('HELLO WORLD');


const jokeEndPoint = 'https://icanhazdadjoke.com/search';
/*
function checkStatus(res) {
    if (!res.ok) Promise.reject(new Error(res.statusText));
    return Promise.resolve(res.json());
}


const renderText = (words) => {
    const wrapper = document.getElementById('textJokes');
    let text = '';
    words.forEach(word => text += `${word} `);
    wrapper.append(text);
}

async function renderJoke() {
    try {
        const jokeApiRes = await fetch(jokeEndPoint);
        const jokeApiData = await checkStatus(jokeApiRes);
        // Waits for all the above promises to settle, then runs the rest 

        renderText(jokeApiData);

    } catch (error) {
        console.log('Error:', error)
    }
}

renderJoke();*/

async function getResponse() {
    const response = await fetch(
            jokeEndPoint, {
                method: 'GET',
                headers: {
                    'Accept': 'text/html',
                    'Accept': 'application/json',
                    'Accept': 'text/plain'
                }
            }
        ).then((response) => response.json())
        .then((messages) => { console.log("messages"); });;


    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    console.log(data);
    //return JSON.parse(data);
}

getResponse();