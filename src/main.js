console.log('HELLO WORLD');
class Score {
    constructor(fjoke, fscore, fdate) {
        this.joke = fjoke;
        this.score = fscore;
        this.date = fdate;
    }
}

const API_URL = 'https://icanhazdadjoke.com';
const HTMLResponse = document.querySelector('#textJokes');
var reportAcudits = [];
var score;
var test1;
var flag = false;
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

        if (data.joke) {
            document.getElementById('buttonsScore').style.display = 'block';
        }

        document.addEventListener('click', function(e) {
            if (e.target.closest('button')) {
                e.preventDefault();
                score = e.target.value;
                console.log(typeof(e.target.value));
                console.log(e.target.value);
            }
        })


        console.log(score);

        test1 = new Score(data.joke, score, new Date());

        reportAcudits.push(test1);
        console.log(reportAcudits[0]);
        console.log(reportAcudits);
        console.log(test1.joke);
        console.log(test1.score);
        console.log(reportAcudits);


    } catch (error) {
        console.log(error);
    }

}