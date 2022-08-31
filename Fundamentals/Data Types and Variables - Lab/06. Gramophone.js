function solve(band, album, song){

let sum = (band.length * album.length) * song.length / 2
let result = Math.ceil(sum/ 2.5)
console.log(`The plate was rotated ${result} times.` )

}
solve('Black Sabbath', 'Paranoid', 'War Pigs')
solve('Rammstein', 'Sehnsucht', 'Engel')