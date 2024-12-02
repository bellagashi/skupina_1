// Inicializacija števca
let steviloKlikov = 0;

function pravilnaSklanjatev(stevilo) {
    switch (stevilo ) {
        case 1:
            return 'klik';
        case 2:
            return 'klika';
        case 3:
        case 4:
            return 'kliki';
        default:
            return 'klikov';
    }
}

document.getElementById('cookie-btn').addEventListener('click', function () {
    steviloKlikov++;
    document.getElementById('click-counter').innerText =
        `Kliknil si ${steviloKlikov} ${pravilnaSklanjatev(steviloKlikov)}.`;
});

// Element za preklapljanje temnega načina
const toggleButton = document.getElementById('dark-mode-toggle');

// Dodaj dogodek ob kliku na gumb
toggleButton.addEventListener('click', () => {
    // Preklopi razred "dark-mode" na telesu dokumenta
    document.body.classList.toggle('dark-mode');

    // Dodajanje temnega načina na vse relevantne elemente
    document.querySelector('.header').classList.toggle('dark-mode');
    document.querySelector('.news-section').classList.toggle('dark-mode');

    // Dodaj temni način karticam novic
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => card.classList.toggle('dark-mode'));

    // Dodaj temni način k točkam (dots)
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.toggle('dark-mode'));

    // Posodobi ikono na gumbu
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
});

