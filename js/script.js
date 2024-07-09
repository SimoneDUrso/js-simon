// Funzione per la generazione dei 5 numeri casuali
function randomNumbers() {
    let randomNumbers = [];

    while (randomNumbers.length < 5) {
        let num = Math.floor(Math.random() * 100 + 1)

        if (!randomNumbers.includes(num)) {
            randomNumbers.push(num);
        }
    }
    return randomNumbers;
}

// Funzione che avvia il timer di 30 secondi
function Timer(duration, show) {
    let timer = duration;
    let interval = setInterval(function () {
        show.innerHTML = timer + " secondi rimanenti";

        if (timer-- < 0) {
            clearInterval(interval);
            show.innerHTML = '';
            hideNumbers();
            setTimeout(promptUser, 500);
        }
    }, 1000);
}




