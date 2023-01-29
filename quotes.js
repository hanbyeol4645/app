const quotes = [
    {
        quote: " 그럴수도 있지 ",
        author: "이한별",
    },
    {
        quote: " 오늘 당장 해야 할것을 해라 ",
        author: "이한별",
    },
    {
        quote: " 몇년이 걸리든 이루면 그만 ",
        author: "이한별",
    },
    {
        quote: " 일단 해라 ",
        author: "이한별",
    },
    {
        quote: " 다 울었니? 그럼 이제 할거 하자 ",
        author: "이한별",
    },
    {
        quote: " 해매고 밟은 만큼 내 땅이 된다 ",
        author: "이한별",
    },
    {
        quote: " 가치 없는 일은 없다. 모든일은 어떤일의 밑걸음이다 ",
        author: "이한별",
    },
    {
        quote: " 외롭다고 사람에게 기대지 말것 ",
        author: "이한별",
    },
    {
        quote: " 돈이 전부는 아니지만 돈은 내 자존감이자 자신감 ",
        author: "이한별",
    },
    {
        quote: " 겁먹지말고 일단 해봐라. 다 너의것이 되리라 ",
        author: "이한별",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
