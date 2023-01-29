const images = [ "backimg1.jpg" ,"backimg2.jpg" ,"backimg3.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const abc = document.createElement("img");

abc.src = `img/${chosenImages}`;

document.body.appendChild(abc);


const body = document.querySelector("body");





