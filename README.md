## Obiettivo
 In questa challenge dovrai implementare una chat seguendo il mockup fornito.
Connettendoti al server tramite web socket inizierai a ricevere uno stream di messaggi provenienti da diversi utenti.
Di seguito le feature che dovrai implementare!

## Feature
- Per ogni nuovo messaggio che arriva, se non stai guardando i messaggi vecchi, la pagina scrolla in automatico al messaggio più recente.
- Se stai consultando i messaggi vecchi ti deve apparire un messaggio che ti avverte che sono disponibili messaggi più recenti, se lo clicchi la pagina scrolla all’ultimo messaggio.
- Tramite un input puoi scrivere messaggi e inviarli.
- Devi prevedere la possibilità di inviare non solo messaggi testuali ma anche immagini e gif.
- Deve poter essere possibile inviare messaggi in chat taggando un utente attualmente loggato p.e. "@user123 hello".

## Valutazione
Valuteremo la qualità del codice da te prodotto, con particolare attenzione all’astrazione, riutilizzo e flessibilità dello stesso.
Inoltre valuteremo come strutturi il progetto e quali tecnologie\librerie decidi di utilizzare.
Non preoccuparti se non riesci ad implementare tutte le feature richieste, ci interessa di vedere come strutturi il codice e come approcci il problema. Più informazioni riesci a veicolare su di te attraverso il tuo lavoro più facile sarà per noi valutarti!

## Start up
Il server websocket è implementato con [socket.io](https://socket.io/). \
Di seguito la lista degli eventi emessi dal server:
- `chat-message` per ricevere i messaggi inviati dagli utenti della chat.
- `user-login` per ricevere l'evento e le informazioni riguardanti un nuovo utente che si aggiunge alla chat.
- `user-logout` per ricevere l'evento riguardante un utente che lascia la chat.
- `current-users` per ricevere la lista degli utenti in chat qunado si entra per la prima volta.
- `me` per ricevere le informazioni sull'utente correntemente loggato sul server.

Per loggarsi con uno username in fase di connessione passare il parametro `username` alla query.

Esempio di payload di un messaggio:

`{
  "user": {
    "id": "12345",
    "name": "John Doe",
    "color": "blue"
  },
  "body": "Hello, world!",
  "taggedUserId": "54321"
}`

Per avviare il server in locale:
- `npm install`
- `npm start`

In alternativa é possibile avviarlo in un container docker.\
Il server sarà in ascolto su `localhost:8080`
