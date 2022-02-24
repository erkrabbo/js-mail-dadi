let inputMail = document.querySelector("form").email;
let logForm = document.querySelector("form");

const users= ['asohaoh@gmail.com', 'asjfhaihiu@gmail.com', 'ciao@live.it', 'ciaociao@hotmail.it', 'hello@libero.it']

logForm.addEventListener("submit", log);

function log(e){
    let registered = false;
    
    for(i=0; i < users.length; i++){
        if(users[i]==inputMail.value){
            registered = true;
        }
    }

    registered ? console.log('ci sei fra!') : console.log('non sei registrato');

    e.preventDefault();
}