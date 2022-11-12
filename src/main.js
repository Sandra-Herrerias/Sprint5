console.log('HELLO WORLD');


const API_URL = 'https://icanhazdadjoke.com';
const HTMLResponse = document.querySelector('#textJokes');

const renderJokes = async() => {
    try {
        //get response from server
        const respuesta = await fetch(`${API_URL}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        console.log(respuesta);

        //get data from server
        const data = await respuesta.json();
        console.log(data.joke);
        HTMLResponse.innerHTML = `${data.joke}`;

    } catch (error) {
        console.log(error);
    }

}





/*


fetch(`${API_URL}/search`, {
        method: 'GET', // data can be `string` or {object}!
        headers: {
            'Accept': 'application/json',
            'Accept': 'text/plain',
            'Accept': 'text/html'
        }
    })
    .then((response) => response.json())
    .then((jokes) => {
        const data = jokes.map((joke) => `<li>${joke.joke}</li>`);
        HTMLResponse.innerHTML = `<ul>${data}</ul>`;
    })
    .then(result => console.log('success:', result))
    .catch(error => console.log('error:', error));*/