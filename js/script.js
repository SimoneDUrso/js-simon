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

// Funzione che nasconde i numeri
function hideNumbers() {
    document.getElementById('numbers').innerHTML = '';
}

// Funzione per mostrare i numeri all'utente su schermo
function showNumbers(numbers) {
    document.getElementById('numbers').innerHTML = numbers.join(' ');
}

// Funzione per chiedere all'utente di inserire i numeri tramite prompt
function promptUser() {
    let userNumbers = [];
    for (let i = 0; i < 5; i++) {
        let userInput = parseInt(prompt("Inserisci uno dei numeri che hai visto:"));
        if (!isNaN(userInput)) {
            userNumbers.push(userInput);
        } else {
            alert("Per favore, inserisci un numero valido.");
            i--;
        }
    }
    checkNumbers(userNumbers);
}

// Funzione che controlla i numeri inseriti dall'utente
function checkNumbers(userNumbers) {
    let Count = 0;
    let correctNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < userNumbers.length; j++) {
            if (numbers[i] === userNumbers[j]) {
                Count++;
                correctNumbers.push(numbers[i]);

            }
        }
    }

    document.getElementById('results').innerHTML = `Hai indovinato ${Count} numeri, ovvero: ${correctNumbers.join(' ')}`;
}



