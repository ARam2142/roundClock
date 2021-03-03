setInterval(runClock, 1000)

const hourHand = document.getElementById('hour-tick');
const minuteHand = document.getElementById('minute-tick');
const secondHand = document.getElementById('second-tick');
console.log(secondHand)

function runClock() {
    const today = new Date();
    const seconds = today.getSeconds()/60
    const minutes = (seconds + today.getMinutes()) / 60;
    const hours  = (minutes + today.getHours()) /12
    setRotation(secondHand, seconds);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio* 360)
}
runClock()