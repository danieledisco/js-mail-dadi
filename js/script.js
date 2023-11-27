console.log("Works!");

/*  Request:
 - Mail
Chiedi all’utente la sua email, controlla che sia 
nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore
sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio 
più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: 
Che ci sia un array da qualche parte? 
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

 - Tools
 Lista mail (array)
prompt/alert per comunicare con utente
if per i confronti
Math.random per generare i lanci dei dadi
    Precisazione: Math.random() * N genera 
    i numeri casuali tra 0 ed N (con tante cifre decimali)
    Per ottenere solo interi usiamo floor 
    (che arrotonda verso il basso ==> pavimento )
    Allora se utilizziamo l'istruzione
    Math.random * 6 ==> numeri casuali tra 0 e 6, ma 
    arrotondando verso il basso 6 non verrà mai raggiunto
    L'istruzione allora da usare è:
    Math.floor(Math.random()*6 + 1)
*/

// Gnereiamo la lista delle mail autorizzate a gicare
const authorizedMails = ["pippo@gmail.com", "pluto@libero.it",
                        "topolino@tin.it", "paperino@iao.it"];

// Chiediamo all'utente di inserire la sua email
const playerEmail = prompt("Ciao il computer ti sfida al gioco dei dadi.\nSe sei registrato inseirsci la tua email");

// Verifichiamo l'ingresso in console
console.log(playerEmail);

// Verifichiamo se playerEmail è presente nella lista delle
// email autorizzate a giocare
let play=0;

// Cicliamo sulla lista di email autorizzate per verificare
// se la mail del giocatore è presente
// Nel caso lo troviamo settiamo la varibile play a 1
// e con break interrompiamo il ciclo
for (let i = 0; i < authorizedMails.length; i++)
{
    if (authorizedMails[i].localeCompare(playerEmail) == 0)
    {
        play = 1;
        break;
    }
}

// Se la mail edl giocatore non è stata trovata play è 
// rimasta a 0 ed allora si comunica la gicatore che non 
// può giocare e lo salutiamo 
if ( play == 0 )
{
    alert("Mi dispiace non sei autorizzato a giocare\nArrivederci");
}
else
{
    // la mail è presente
    confirm("Benvenuto tra un po giochioamo");

    // Lancio dato per il Computer
    const dieComputer = Math.floor((Math.random() * 6) + 1);

    // Lancio dado per Giocatore
    const diePlayer = Math.floor((Math.random() * 6) + 1);

    if (dieComputer > diePlayer)
    {
        confirm(" Il computer ha fatto: " + 
        dieComputer +
        " tu hai fatto: " +
        diePlayer +
        " Mi dispiace ha vinto il computer");
    }
    else if (dieComputer < diePlayer)
    {
        confirm(" Il computer ha fatto: " + 
        dieComputer +
        " tu hai fatto: " +
        diePlayer +
        " Complimenti hai vinto tu");
    }
    else
    {
        confirm(" Il computer ha fatto: " + 
        dieComputer +
        " tu hai fatto: " +
        diePlayer +
        " Avete pareggiato");

    }
    
}

