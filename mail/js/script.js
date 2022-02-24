let userEmail = prompt('Digita la tua mail:');

users= ['asohaoh@gmail.com', 'asjfhaihiu@gmail.com', 'ciao@live.it', 'ciaociao@hotmail.it', 'hello@libero.it']

let registered = false;

for(i=0; i < users.length; i++){
    if(users[i]==userEmail){
        registered = true;
    }
}

registered ? console.log('ci sei fra!') : console.log('non sei registrato');