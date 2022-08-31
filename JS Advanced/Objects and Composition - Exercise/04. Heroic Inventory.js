function solve(arr) {
    let result = []
    let res = {}
    for (const curr of arr) {
        let [name, level, items] = curr.split(' / ')
        level = Number(level)
        items = items ? items.split(', ') : []
        result.push(name,level,items)
        
        // result.name = name,
        // result.level = level,
        // result.items = items
    }
    // result.reduce(function(name,level, items){
    //     result[name] = name,
    //     result[level] = level,
    //     result[items] = items
    // })
    // array.reduce(function(target, key, index) {
    //     target[index] = key;
    // console.log(JSON.stringify(res))
    // const entries = new Map([arr])
    let obj = Object.fromEntries(result)
    console.log(obj)
    //     ['foo', 'bar'],
    //     ['baz', 42]
    //   ]);
      
    //   const obj = Object.fromEntries(entries);
      
    //   console.log(obj);
    //   // expected output: Object { foo: "bar", baz: 42 }
      
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
console.log("------")
solve(['Jake / 1000 / Gauss, HolidayGrenade'])

// [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]