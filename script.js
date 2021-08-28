document.addEventListener("DOMContentLoaded", () => {
    var cardArray = [
        { name: "ghost1", img: "images/ghost1.jpg" },
        { name: "ghost1", img: "images/ghost1.jpg" },
        { name: "ghost2", img: "images/ghost2.jpg" },
        { name: "ghost2", img: "images/ghost2.jpg" },
        { name: "ghost3", img: "images/ghost3.jpg" },
        { name: "ghost3", img: "images/ghost3.jpg" },
        { name: "ghost4", img: "images/ghost4.jpg" },
        { name: "ghost4", img: "images/ghost4.jpg" },
        { name: "ghost5", img: "images/ghost5.jpg" },
        { name: "ghost5", img: "images/ghost5.jpg" },
        { name: "ghost6", img: "images/ghost6.jpg" }, 
        { name: "ghost6", img: "images/ghost6.jpg" },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const cards = document.querySelector(".card");
    const resultDisplay = document.querySelector("#result");
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //make card grid
    function createCard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "images/skeletonhand.jpg");
            card.setAttribute("data-id", i);
            card.addEventListener("click", rotate);
            cards.appendChild(card);
        }
    }

    //matches
    function checkForMatch() {
        var cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match!");
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute("src", "images/skeletonhand.jpg");
            cards[optionTwoId].setAttribute("src", "images/skeletonhand.jpg");
            alert("Sorry, try again");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations! You found them all!";
        }
    }

    //rotate
    function rotate() {
        var cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createCard();
});
console.log("you did it!");
