class Score {
    constructor(fjoke, fscore, fdate) {
        this.joke = fjoke;
        this.score = fscore;
        this.date = fdate;
    }
}

const API_URL = 'https://icanhazdadjoke.com';
const API_URL_CHUCKNORRIS = 'https://api.chucknorris.io/jokes/random';
const HTMLResponse = document.querySelector('#textJokes');

var reportAcudits = [];
var score;
var currentJoke;
var randomNum;


function randomJoke() {
    //create random number from 0 to 1
    randomNum = Math.floor(Math.random() * 2);

    if (randomNum == 0) {
        renderJokes();
    } else if (randomNum == 1) {
        renderJokesChuck();
    }
}


const renderJokes = async() => {
    try {
        //get response from server
        const respuesta = await fetch(`${API_URL}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        //get data from server
        const data = await respuesta.json();
        currentJoke = data.joke;
        HTMLResponse.innerHTML = `${currentJoke}`;

        document.getElementById('buttonsScore').style.display = 'block';
    } catch (error) {
        console.log(error);
    }
}

const renderJokesChuck = async() => {
    try {

        //get response from server
        const respuesta = await fetch(`${API_URL_CHUCKNORRIS}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        //get data from server
        const data = await respuesta.json();
        currentJoke = data.value;
        HTMLResponse.innerHTML = `${currentJoke}`;

        document.getElementById('buttonsScore').style.display = 'block';
    } catch (error) {
        console.log(error);
    }
}


/*afegir la broma amb la puntuació i la data a un array, si ja existeix la broma en l'array, actualitzar l'objecte*/
function scoreJoke(score) {

    const d = new Date();
    let textDate = d.toISOString();

    //buscar a l'array d'acudits si existeix en alguna posició de l'array el que estic puntuant i obtenir la seva posició
    //si ja existeix en l'array, actualitzar el contingut de la posició on es troba
    //si no existeix, afegir un nou objecte a l'array

    var scoreObj = new Score(currentJoke, score, textDate);

    var posJoke = reportAcudits.findIndex(obj => obj.joke == currentJoke);

    console.log(scoreObj.score);

    if (posJoke == -1) {
        reportAcudits.push(scoreObj);
    } else {
        reportAcudits[posJoke] = scoreObj;
    }

    console.log(reportAcudits);
}


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true`, {
                method: "GET"
            })
            .then((response) => response.json())
            .then((data) => {
                var weatherDesc = convertCodeToWeatherDescription(data.current_weather.weathercode);
                document.querySelector('#weather').innerHTML = weatherDesc;
            });
    });
} else {
    alert("Geolocation is not supported by this browser.");
}

function convertCodeToWeatherDescription(weatherCode) {
    var weather;
    switch (weatherCode) {
        case 0:
            weather = "Clear sky";
            break;
        case 1:
        case 2:
        case 3:
            weather = 'Mainly clear, partly cloudy, and overcast';
            break;
        case 45:
        case 48:
            weather = 'Fog and depositing rime fog';
            break;
        case 51:
        case 53:
        case 55:
            weather = 'Drizzle: Light, moderate, and dense intensity';
            break;
        case 56:
        case 57:
            weather = 'Freezing Drizzle: Light and dense intensity';
            break;
        case 61:
        case 63:
        case 65:
            weather = 'Rain: Slight, moderate and heavy intensity';
            break;
        case 66:
        case 67:
            weather = 'Freezing Rain: Light and heavy intensity';
            break;
        case 71:
        case 73:
        case 75:
            weather = 'Snow fall: Slight, moderate, and heavy intensity';
            break;
        case 77:
            weather = 'Snow grains';
            break;
        case 80:
        case 81:
        case 82:
            weather = 'Rain showers: Slight, moderate, and violent';
            break;
        case 85:
        case 86:
            weather = 'Snow showers slight and heavy';
            break;
        case 95:
            weather = 'Thunderstorm: Slight or moderate';
            break;
        case 96:
        case 99:
            weather = 'Thunderstorm with slight and heavy hail';
            break;
    }

    return weather;
}