import { Score } from './Score.model';

export class Main {

    API_URL = 'https://icanhazdadjoke.com';
    API_URL_CHUCKNORRIS = 'https://api.chucknorris.io/jokes/random';
    HTMLResponse = document.getElementById('#textJokes');

    reportAcudits: Score[] = [];
    score!: number;
    currentJoke!: string;
    randomNum!: number;

    constructor(){

    }

    randomJoke() {
        //create random number from 0 to 1
        this.randomNum = Math.floor(Math.random() * 2);
    
        if (this.randomNum == 0) {
            this.renderJokes();
        } else if (this.randomNum == 1) {
            //this.renderJokesChuck();
        }
    }


    //Fetch Dad Joke
renderJokes = ():void => {
    fetch(`${this.API_URL}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
      },
    })
      .then(response => response.json())
      .then((text: string) => this.HTMLResponse!.innerHTML = this.currentJoke)
      .catch(error => console.log(error));
      (document.querySelector('buttonsScore') as HTMLInputElement).style.display = 'block';
    }

  


    /*
renderJokesChuck = async() => {
    try {

        //get response from server
        const respuesta = await fetch(`${this.API_URL_CHUCKNORRIS}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        //get data from server
        const data = await respuesta.json();
        this.currentJoke = data.value;
        (document.querySelector('#textJokes') as HTMLInputElement).innerHTML = `${this.currentJoke}`;

        (document.querySelector('buttonsScore') as HTMLInputElement).style.display = 'block';
    } catch (error) {
        console.log(error);
    }
}*/

}