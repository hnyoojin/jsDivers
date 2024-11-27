const fs = require('fs');

function ReadFile(callback) {
    fs.readFile("10816.txt", "utf8", (err, data) => {
        if (err) {
            console.error("에러 발생", err);
            return;
        }

        const lines = data.trim().split('\n');
        const numOfElem = parseInt(lines[0]);
        const cards = lines[1].trim().split(' ').map(Number);
        const numOfRequests = parseInt(lines[2]);
        const requestCards = lines[3].trim().split(' ').map(Number);

        callback({ cards, requestCards });
    });
}

function CardCounter() {
    this.cardCount = {};
}

CardCounter.prototype.CountCards = function(cards) {
    cards.forEach(card => {
        if (this.cardCount[card]) {
            this.cardCount[card] += 1;
        } else {
            this.cardCount[card] = 1;
        }
    });
};

CardCounter.prototype.RequestCards = function(requestCards) {
    return requestCards.map(card => {
        return this.cardCount[card] || 0;
    }).join(" ");
};

ReadFile(({ cards, requestCards }) => {
    const cardCounter = new CardCounter();

    cardCounter.CountCards(cards);

    const result = cardCounter.RequestCards(requestCards);

    console.log(result);
});
