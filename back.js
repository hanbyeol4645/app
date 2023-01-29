const bg = document.querySelector(".random_BG");

const bgList = [
    "https://user-images.githubusercontent.com/59393359/74718667-0adb8a80-5276-11ea-8bc3-0e36c67cf28a.jpg",
    "https://user-images.githubusercontent.com/59393359/74718765-30689400-5276-11ea-8a91-dd7ce797074b.jpg",
    "https://user-images.githubusercontent.com/59393359/74718795-3f4f4680-5276-11ea-9f52-58bb99cb2db0.jpg",
    "https://user-images.githubusercontent.com/59393359/74720865-cb16a200-5279-11ea-9318-05e4f75b1106.jpg",
    "https://user-images.githubusercontent.com/59393359/74720904-e2ee2600-5279-11ea-9440-3b3eb9904c22.jpg",
    "https://user-images.githubusercontent.com/59393359/74720910-e41f5300-5279-11ea-9c63-ff84698e3c7f.jpg",
    "https://user-images.githubusercontent.com/59393359/74720914-e4b7e980-5279-11ea-9532-c262caf64f00.jpg"
];

const randNum = Math.floor(Math.random() * bgList.length);

bg.style.backgroundImage = `url(${bgList[randNum]})`;