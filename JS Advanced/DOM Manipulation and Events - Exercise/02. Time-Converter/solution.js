function attachEventsListeners() {
// 1 day/24 hours/1440 minutes/86400 seconds
let rations = {
    days :  1,
    hours : 24,
    minutes : 1440,
    seconds : 86400
}
function convert(value, unit){
    let inDays = value / rations[unit]
    return{
        days :  inDays,
    hours : inDays * rations.hours,
    minutes : inDays * rations.minutes,
    seconds : inDays * rations.seconds
    }
}

let daysInput = document.getElementById('days')
let hoursInput = document.getElementById('hours')
let minutesInput = document.getElementById('minutes')
let secondsInput = document.getElementById('seconds')

let daysBtn = document.getElementById('daysBtn').addEventListener('click', onClick)
let hoursBtn = document.getElementById('hoursBtn').addEventListener('click', onClick)
let minutesBtn = document.getElementById('minutesBtn').addEventListener('click', onClick)
let secondsBtn = document.getElementById('secondsBtn').addEventListener('click', onClick)

function onClick(e){
let input = e.target.parentElement.querySelector('input[type="text"]')
let time = convert(Number(input.value), input.id)
daysInput.value = time.days
hoursInput.value = time.hours
minutesInput.value = time.minutes
secondsInput.value = time.seconds
}
}