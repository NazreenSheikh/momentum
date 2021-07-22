const myClock = document.getElementById("clock");

function getClock() {
    const date = new Date()
    const hour = String(date.getHours()).padStart(2, 0)
    const minutes = String(date.getMinutes()).padStart(2, 0)
    const seconds = String(date.getSeconds()).padStart(2, 0)
    myClock.innerText = `${hour}:${minutes}:${seconds}`
}
getClock()
setInterval(() => {
    getClock()
}, 1000);