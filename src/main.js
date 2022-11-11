console.log('HELLO WORLD');


const url = 'https://icanhazdadjoke.com/search';





async function fetchJokesJSON() {
    fetch(url)
        .then(response => response.json())
        .then(console.log())
}