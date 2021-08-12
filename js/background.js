const docBody = document.getElementById('docBody')
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg']
const chosenImg = images[Math.floor(Math.random() * images.length)]
if (chosenImg === '02.jpg' || chosenImg === '03.jpg') {
  docBody.style.color = 'white'
}

const bgImg = document.createElement('img')
bgImg.src = `/${chosenImg}`
document.body.appendChild(bgImg)
