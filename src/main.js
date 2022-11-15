"use strict";
exports.__esModule = true;
exports.Main = void 0;
window.onload = function () {
    var main = new Main();
    main.getPosition();
};
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.API_URL = 'https://icanhazdadjoke.com';
        this.API_URL_CHUCKNORRIS = 'https://api.chucknorris.io/jokes/random';
        this.HTMLResponse = document.getElementById('#textJokes');
        this.renderJokes = function () {
            fetch("".concat(_this.API_URL), {
                method: 'GET',
                headers: {
                    "Accept": "application/json"
                }
            })
                .then(function (response) { return response.json(); })
                .then(function (text) { return _this.HTMLResponse.innerHTML = _this.currentJoke; })["catch"](function (error) { return console.log(error); });
            document.querySelector('buttonsScore').style.display = 'block';
        };
        this.renderJokesChuck = function () {
            fetch("".concat(_this.API_URL_CHUCKNORRIS), {
                method: 'GET',
                headers: {
                    "Accept": "application/json"
                }
            })
                .then(function (response) { return response.json(); })
                .then(function (text) { return _this.HTMLResponse.innerHTML = _this.currentJoke; })["catch"](function (error) { return console.log(error); });
            document.querySelector('buttonsScore').style.display = 'block';
        };
    }
    Main.prototype.randomJoke = function () {
        //create random number from 0 to 1
        this.randomNum = Math.floor(Math.random() * 2);
        if (this.randomNum == 0) {
            this.renderJokes();
        }
        else if (this.randomNum == 1) {
            this.renderJokesChuck();
        }
    };
    /*afegir la broma amb la puntuació i la data a un array, si ja existeix la broma en l'array, actualitzar l'objecte*/
    Main.prototype.scoreJoke = function (score) {
        var d = new Date();
        var textDate = d.toISOString();
        //buscar a l'array d'acudits si existeix en alguna posició de l'array el que estic puntuant i obtenir la seva posició
        //si ja existeix en l'array, actualitzar el contingut de la posició on es troba
        //si no existeix, afegir un nou objecte a l'array
        var scoreObj = {
            joke: this.currentJoke,
            score: score,
            date: textDate
        };
        var posJoke = this.reportAcudits.map(function (x) { return x.joke; }).indexOf(this.currentJoke);
        //let objectFound = this.reportAcudits[posJoke];
        console.log(scoreObj.score);
        if (posJoke == -1) {
            this.reportAcudits.push(scoreObj);
        }
        else {
            this.reportAcudits[posJoke] = scoreObj;
        }
        console.log(this.reportAcudits);
    };
    Main.prototype.getPosition = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var long = position.coords.longitude;
                var lat = position.coords.latitude;
                fetch("https://api.open-meteo.com/v1/forecast?latitude=".concat(lat, "&longitude=").concat(long, "&hourly=temperature_2m&current_weather=true"), {
                    method: "GET"
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    var weatherDesc = _this.convertCodeToWeatherDescription(data.current_weather.weathercode);
                    var myContainer = document.querySelector("#weather");
                    myContainer.innerHTML += weatherDesc;
                    myContainer.innerHTML += '<span class="px-2">&#124;</span>';
                    myContainer.innerHTML += data.current_weather.temperature + '°C';
                });
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    Main.prototype.convertCodeToWeatherDescription = function (weatherCode) {
        var weather;
        switch (weatherCode) {
            case 0:
                /* weather = "Clear sky";*/
                weather = '<i class="fa-solid fa-sun"></i>';
                break;
            case 1:
            case 2:
            case 3:
                /*weather = 'Mainly clear, partly cloudy, and overcast';*/
                weather = '<i class="fa-solid fa-cloud-sun"></i>';
                break;
            case 45:
            case 48:
                /*weather = 'Fog and depositing rime fog';*/
                weather = '<i class="fa-solid fa-cloud-fog"></i>';
                break;
            case 51:
            case 53:
            case 55:
                /*weather = 'Drizzle: Light, moderate, and dense intensity';*/
                weather = '<i class="fa-solid fa-cloud-drizzle"></i>';
                break;
            case 56:
            case 57:
                /*weather = 'Freezing Drizzle: Light and dense intensity';*/
                weather = '<i class="fa-solid fa-cloud-showers"></i>';
                break;
            case 61:
            case 63:
            case 65:
                /*weather = 'Rain: Slight, moderate and heavy intensity';*/
                weather = '<i class="fa-solid fa-cloud-rain"></i>';
                break;
            case 66:
            case 67:
                /*weather = 'Freezing Rain: Light and heavy intensity';*/
                weather = '<i class="fa-solid fa-cloud-hail"></i> ';
                break;
            case 71:
            case 73:
            case 75:
                /*weather = 'Snow fall: Slight, moderate, and heavy intensity';*/
                weather = '<i class="fa-solid fa-cloud-hail-mixed"></i>';
                break;
            case 77:
                /*weather = 'Snow grains';*/
                weather = '<i class="fa-solid fa-cloud-snow"></i>';
                break;
            case 80:
            case 81:
            case 82:
                /*weather = 'Rain showers: Slight, moderate, and violent';*/
                weather = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
                break;
            case 85:
            case 86:
                /*weather = 'Snow showers slight and heavy';*/
                weather = '<i class="fa-solid fa-cloud-sleet"></i>';
                break;
            case 95:
                /*weather = 'Thunderstorm: Slight or moderate';*/
                weather = '<i class="fa-solid fa-cloud-bolt-sun"></i>';
                break;
            case 96:
            case 99:
                /*weather = 'Thunderstorm with slight and heavy hail';*/
                weather = '<i class="fa-solid fa-cloud-bolt"></i> ';
                break;
        }
        return weather;
    };
    return Main;
}());
exports.Main = Main;
