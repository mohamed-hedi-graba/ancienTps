function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    const difficulty = prompt("Facile/1, Intermédiaire/2, Difficile/3").toLowerCase();

    let min, max, attempts;

    switch (difficulty) {
        case "facile":
        case "1":
            min = 1;
            max = 50;
            attempts = 10;
            break;
        case "intermédiaire":
        case "2":
            min = 1;
            max = 100;
            attempts = 7;
            break;
        case "difficile":
        case "3":
            min = 1;
            max = 150;
            attempts = 5;
            break;
        default:
            alert("Niveau invalide ! La difficulté par défaut est réglée sur Intermédiaire.")
            min = 1;
            max = 100;
            attempts = 7;
    }

    const nb = getRandomNumber(min, max);
    let guess;
    let remainingAttempts = attempts;

    while (remainingAttempts > 0) {
        guess = parseInt(prompt(`Devinez le nombre entre ${min} et ${max}. Il vous reste ${remainingAttempts} tentatives.`), 10);

        if (isNaN(guess)) {
            alert("Veuillez entrer un nombre valide!");
            continue;
        }
        if (guess < nb) {
            alert("Trop bas :(");
        } else if (guess > nb) {
            alert("Trop haut :(");
        } else {
            alert(`Félicitations ! Vous avez trouvé le nombre ${nb} en ${attempts - remainingAttempts + 1} tentatives.`);
            return;
        }

        remainingAttempts--;
    }

    alert(`Désolé, vous avez épuisé toutes vos tentatives. Le nombre était ${nb}.`);

    if (confirm("Voulez-vous rejouer ?")) {
        startGame();
    }
}

document.getElementById("startButton").addEventListener("click", startGame);
