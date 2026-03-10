const quotes = [
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    text: "The greatest good you can do for another is not just to share your riches, but to reveal to him his own.",
    author: "Benjamin Disraeli"
  },
  {
    text: "The limits of the possible can only be defined by going beyond them into the impossible.",
    author: "Arthur C. Clarke"
  },
  {
    text: "Only those who will risk going too far can possibly find out how far one can go.",
    author: "T.S. Eliot"
  }
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

document.getElementById("quote-text").textContent = randomQuote.text;
document.getElementById("quote-author").textContent = "— " + randomQuote.author;