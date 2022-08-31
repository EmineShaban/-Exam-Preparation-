function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function solve(area, vol, input) {
    let cubes = JSON.parse(input)
    let result = []
    for (const cube of cubes) {
        result.push({
            area: area.call(cube),
            volume: vol.call(cube),
    })
    }
    return result
}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))