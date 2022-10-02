import Bingo from "./Bingo.js";
export default class Card {
  constructor(title) {
    // the constructor is called when you create a new instance of the class
    this.title = title;
    console.log(`Created a new card with title: ${title}`);
  }

  markDone(target) {
    // 🔥🔥🔥 TODO 5: mark or unmark (toggle) a bingo card when clicked
    console.log("Marking card as done");
    console.log(target);
    target.classList.toggle("bingo__card--done"); // to mark a card as done, we add a class .bingo__card--done to it
  }

  render(counter) {
    // 🔥🔥🔥 TODO3: build the HTML element and append it to the DOM
    let board = document.querySelector(".bingo__board");
    let card = document.createElement("div"); // rendering the card to the screen is done by building up a string of HTML

    card.dataset.number = counter + 1;
    card.classList.add("bingo__card");
    card.setAttribute("id", "bingo__card" + counter);
    card.innerHTML = this.title;
    board.appendChild(card); // after that, we append the HTML to the DOM - check the index.html file to see what structure to use

    // 🔥🔥🔥 TODO4: when we click an item, we want to check for winners and we want to save the selection to storage
    card.addEventListener("click", (e) => {
      this.markDone(e.target);
      Bingo.checkWinner(); // call checkWinner() on the Bingo class
      Bingo.save(); // try to call the save() method on the Bingo class
    });
  }
}
