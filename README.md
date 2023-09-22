## Obiettivo
 In questa challenge dovrai implementare una chat twitch like seguendo il mockup fornito.
Connettendoti al server tramite web socket inizierai a ricevere uno stream di messaggi provenienti da diversi utenti.
Di seguito le feature che dovrai implementare!

## Feature
- Con un tasto “join” puoi entrare nella chat e iniziare a ricevere e leggere i messaggi provenienti dal server.
- Una volta entrato tramite un tasto “leave” puoi lasciare la chat- Per ogni nuovo messaggio che arriva, se non stai guardando i messaggi vecchi, la pagina scrolla in automatico al messaggio più recente.
- Se stai consultando i messaggi vecchi ti deve apparire un messaggio che ti avverte che sono disponibili messaggi più recenti, se lo clicchi la pagina scrolla all’ultimo messaggio.
- Tramite un input puoi scrivere messaggi e inviarli.
- Devi prevedere la possibilità di inviare non solo messaggi testuali ma anche immagini e gif.

## Valutazione
Valuteremo la qualità del codice da te prodotto, con particolare attenzione all’astrazione, riutilizzo e flessibilità dello stesso.
Inoltre valuteremo come strutturi il progetto e quali tecnologie\librerie decidi di utilizzare.
Non preoccuparti se non riesci ad implementare tutte le feature richieste, ci interessa di vedere come strutturi il codice e come approcci il problema. Più informazioni riesci a veicolare su di te attraverso il tuo lavoro più facile sarà per noi valutarti!

## Start up
Il server websocket è implementato con [socket.io](https://socket.io/). Per ricevere e inviare messaggi l'evento è `chat-message`
- `npm install`
- `npm start`

Il server sarà in ascolto su `localhost:8080`