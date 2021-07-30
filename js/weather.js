const city = document.querySelector('#weather span:first-child')
const mausam = document.querySelector('#weather span:last-child')
function onGeoSuccess(position) {
  const API_KEY = 'f36a669d5b5a6e5b3db70c1159fd3968'
  console.log(position)
  const lati = position.coords.latitude
  const longi = position.coords.longitude
  console.log(`you live in ${lati} ${longi}`)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      city.innerText = data.name
      mausam.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoError() {
  alert(`location not found`)
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
