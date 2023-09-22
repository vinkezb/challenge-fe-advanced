## Obiettivo
 In questa challenge dovrai implementare una chat twitch like, seguendo il mockup fornito.
Connettendoti al server tramite web socket inizierai a ricevere uno stream di messaggi provenienti da diversi utenti.

## Caratteristiche
Vorremmo che tu realizzassi una chat con le seguenti caratteristiche:
- Con un tasto “join” puoi entrare nella chat e iniziare a ricevere e leggere i messaggi provenienti dal server.
- Una volta entrato tramite un tasto “leave” puoi lasciare la chat.
- Per ogni nuovo messaggio che arriva, se non stai guardando i messaggi vecchi, la pagina scrolla in automatico al messaggio più recente ricevuto.
- Se stai consultando i messaggi vecchi ti deve apparire un messaggio che ti avverte che sono disponibili messaggi più recenti, se ci clicchi sopra la pagina scrolla all’ultimo messaggio.
- Tramite un input puoi scrivere messaggi e inviarli.
- Devi prevedere la possibilità di inviare non solo messaggi testuali ma anche immagini e gif.

## Valutazione
Valuteremo la qualità del codice da te prodotto, con particolare attenzione all’astrazione, riutilizzo e flessibilità.
Inoltre valuteremo come strutturi il progetto e quali tecnologie utilizzerai.
Non preoccuparti se non riesci ad implementare tutte le feature richieste, ci interessa di più vedere come strutturi il codice e approcci il problema piuttosto che se hai completato tutte le attività.

## Start up
- `npm install`
- `npm start`

Il server sarà in ascolto su `localhost:4200`