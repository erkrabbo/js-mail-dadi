let inputMail = document.querySelector("form").email;
let accedi = document.querySelector("form").accedi;

const users= ['asohaoh@gmail.com', 'asjfhaihiu@gmail.com', 'ciao@live.it', 'ciaociao@hotmail.it', 'hello@libero.it']

accedi.addEventListener('click', Log);

function Log(e){
    let registered = false;
    
    for(i=0; i < users.length; i++){
        if(users[i]==inputMail.value){
            registered = true;
        }
    }
    
    registered ? console.log('ci sei fra!') : console.log('non sei registrato');

    e.preventDefault();
}