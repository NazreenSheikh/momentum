const images = ["01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
]
const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);