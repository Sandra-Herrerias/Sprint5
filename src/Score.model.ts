export class Score {
    //Properties
    private _joke!: string;
    private _score!: number;
    private _date!: Date;
    

    /**
     * 
     * @param {string} joke
     * @param {number} score
     * @param {Date} date

     */


    constructor(joke?: string, score?: number, date?: Date) {

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

    /**
     * Getter joke
     * @return {string}
     */
    public get joke(): string {
        return this._joke;
    }

    /**
     * Setter joke
     * @param {string} value
     */
    public set joke(value: string) {
        this._joke = value;
    }

    /**
     * Getter score
     * @return {number}
     */
    public get score(): number {
        return this._score;
    }

    /**
     * Setter score
     * @param {number} value
     */
    public set score(value: number) {
        this._score = value;
    }

    /**
     * Getter date
     * @return {Date}
     */
    public get date(): Date {
        return this._date;
    }

    /**
     * Setter date
     * @param {string} value
     */
    public set date(value: Date) {
        this._date = value;
    }
}
export default Score;