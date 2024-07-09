Ciao ragazzi,
Esercizio di oggi: Simon Says
nome repo: js-simon

Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Numero push minimi: 7

Consigli del giorno:

    Pensate prima in italiano.
    Dividete in piccoli problemi la consegna.
    Individuate gli elementi di cui avete bisogno per realizzare il programma.

<!-- SCOMPOSIZIONE PROBLEMA -->

1 - Creare un array vuoto;
2 - Creare un while con all'interno la creazione di 5 numeri random;
3 - SE l'array non ha al suo interno quello specifico numero;
    3.1 - pusha il numero al suo interno;
4 - Creare un setInterval per fare un timer di 30 secondi;
5 - Quando il timer finisce compare un prompt dove devono essere inseriti gli stessi numeri che c'erano a schermo;
6 - Creare un altro array vuoto dove pushamo i numeri inseriti dall'utente;
7 -  SE !isNaN; 
7.1 - Pusha il numero nell'array;
8 - : ALTRIMENTI scriviamo un messaggio per avvisare di inserire un numero valido;
9 - Creare una funzione per la comparazione tra i numeriRandom e i numeri inseriti dall'utente;
10 - Dichiarare un contatore da incrementare successivamente;
11 - Creare un array vuoto per i numeri corretti;
12 - Fare due FOR per scorrere i due array creati all'inizio;
13 - SE il numero creato randomicamente === al numero inserito dall'utente;
    13.1 - Incrementa il contatore e pusha il numero in questione dentro l'array appena creato;
