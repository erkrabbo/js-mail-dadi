let inputMail = document.querySelector("form").email;
let logForm = document.querySelector("form");

const check = document.createElement("h1");

const users= ['asohaoh@gmail.com', 'asjfhaihiu@gmail.com', 'ciao@live.it', 'ciaociao@hotmail.it', 'hello@libero.it']

logForm.addEventListener("submit", log);

function log(e){
    let registered = false;

    for(i = 0; i < users.length; i++){        //confronto l'input con ogni valore del DB, se c'è una ricorrenza lo segno come registrato
        if(users[i] == inputMail.value){
            registered = true;
        }
    }

    registered ? userConfirmed() : userNotConfirmed();      //se è registrato lancio la funzione userConfirmed altrimenti lancio userNotConfirmed

    e.preventDefault();
}


function userConfirmed(){
    check.innerText = ('ci sei fra!');

    logForm.append(check);
}

function userNotConfirmed(){
    check.innerText = ('non sei registrato');

    logForm.appendChild(check);
}