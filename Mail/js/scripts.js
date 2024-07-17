// chiedi email all'user

const UserEmail = prompt('Metti la tua email');
console.log('la tua email è');

// lista degli user che possono accedere
const Users = [
    'laura9@gmail.com',
    'alvinmiao@hotmail.it',
    'emispsc@virgiglio.it',
    'hulksmash@gmail.com'
];
console.log('Users', Users);
console.log(Users.length)

// flag di verifica (per far capire al computer che non abbiamo trovato l email)
let found = false

for ( let i = 0; i < Users.length; i++) {

    // se l email messa dall user è una di quelle che possono accedere
    if (Users[i] == UserEmail) {
        found = true;
    }
}

if (found) {
    alert('Metti la password per accedere');
}
else {
    alert('Accesso negato');
}

