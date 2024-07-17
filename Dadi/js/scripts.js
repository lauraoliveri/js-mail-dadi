// genero numero random per l'user

const UserNumber = Math.floor((Math.random() * 6) + 1);
console.log('Il tuo numero', UserNumber);

// genero numero random per il computer

const ComputerNumber = Math.floor((Math.random() * 6) + 1);
console.log('Numero robot', ComputerNumber);

// stabilisco il vincitore 

if( UserNumber > ComputerNumber ){
    alert('Hai vinto! :-)');
}
else if(ComputerNumber > UserNumber) {
    alert('Hai perso! :-(')
}
else {
    alert('E\' un pareggio!')
}
