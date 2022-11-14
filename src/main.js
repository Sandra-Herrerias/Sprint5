"use strict";
exports.__esModule = true;
exports.Main = void 0;
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.API_URL = 'https://icanhazdadjoke.com';
        this.API_URL_CHUCKNORRIS = 'https://api.chucknorris.io/jokes/random';
        this.HTMLResponse = document.getElementById('#textJokes');
        this.reportAcudits = [];
        //Fetch Dad Joke
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
    }
    Main.prototype.randomJoke = function () {
        //create random number from 0 to 1
        this.randomNum = Math.floor(Math.random() * 2);
        if (this.randomNum == 0) {
            this.renderJokes();
        }
        else if (this.randomNum == 1) {
            //this.renderJokesChuck();
        }
    };
    return Main;
}());
exports.Main = Main;
