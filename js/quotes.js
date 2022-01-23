const quotes = [
    {
        quote: "Never goes to sleep without a request to your subconcious",
        author: "Thomas Eddison",
    },
    {
        quote: "No matter what situation you are in, attitude towards life is your freedom to choose.",
        author: "Victor Frankl",
    },
    {
        quote: "Everyday in everyway I am getting better and better",
        author: "Emile Coue",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Never go on trips with anyone you do not love.",
        author: "Hemmingway",
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
    },
];
  
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;