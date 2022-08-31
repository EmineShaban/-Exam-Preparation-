function solve(steps, meters, speedkmH) {
    let km = steps * meters
    let speed = speedkmH * 1000 / 3600
    let dopTime = Math.floor(km / 500) * 60
    let time = (km / speed) + dopTime
    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0')
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0')
    let seconds = (time % 60).toFixed(0).padStart(2, '0')
    console.log(`${hours}:${minutes}:${seconds}`)
}
solve(4000, 0.60, 5)
console.log("------")
solve(2564, 0.70, 5.5)