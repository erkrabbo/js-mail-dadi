const min = 1;
const max = 6;

let pcNumber;
let userNumber;

do{
    pcNumber = throwDice(min,max);
    userNumber = throwDice(min,max);
}
while (pcNumber == userNumber);

pcNumber > userNumber ? console.log('computer wins') : console.log('user wins');

function throwDice(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}