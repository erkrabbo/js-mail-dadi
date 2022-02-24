const min = 1;
const max = 6;
const message = document.createElement('div');

let pcNumber;
let userNumber;

do{
    pcNumber = throwDice(min,max);
    userNumber = throwDice(min,max);
}
while (pcNumber == userNumber);

pcNumber > userNumber ? pcWins() : userWins();

function throwDice(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

function userWins(){
    message.innerHTML=
    `<p>hai fatto: ${userNumber}</p>
    <p>il computer ha fatto: ${pcNumber}</p>
    <h1>HAI VINTO!</h1>
    <span>refresha la pagina per giocare di nuovo.</span>`

    document.body.append(message);
}

function pcWins(){
    message.innerHTML=
    `<p>hai fatto: ${userNumber}</p>
    <p>il computer ha fatto: ${pcNumber}</p>
    <h1>PURTROPPO HAI PERSO..</h1>
    <span>refresha la pagina per giocare di nuovo.</span>`

    document.body.append(message);
}