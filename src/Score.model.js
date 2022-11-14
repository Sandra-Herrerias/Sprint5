"use strict";
exports.__esModule = true;
exports.Score = void 0;
var Score = /** @class */ (function () {
    /**
     *
     * @param {string} joke
     * @param {number} score
     * @param {Date} date

     */
    function Score(joke, score, date) {
        if (joke != undefined) {
            this._joke = joke;
        }
        if (score != undefined) {
            this._score = score;
        }
        if (date != undefined) {
            this._date = date;
        }
    }
    Object.defineProperty(Score.prototype, "joke", {
        /**
         * Getter joke
         * @return {string}
         */
        get: function () {
            return this._joke;
        },
        /**
         * Setter joke
         * @param {string} value
         */
        set: function (value) {
            this._joke = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Score.prototype, "score", {
        /**
         * Getter score
         * @return {number}
         */
        get: function () {
            return this._score;
        },
        /**
         * Setter score
         * @param {number} value
         */
        set: function (value) {
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Score.prototype, "date", {
        /**
         * Getter date
         * @return {Date}
         */
        get: function () {
            return this._date;
        },
        /**
         * Setter date
         * @param {string} value
         */
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    return Score;
}());
exports.Score = Score;
exports["default"] = Score;
