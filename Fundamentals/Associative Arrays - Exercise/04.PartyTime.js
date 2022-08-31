function solve(arr) {
    let vip = new Set
    let regular = new Set
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let indexParty = arr.indexOf("PARTY")
    for (let i = 0; i < indexParty; i++) {
        let guest = arr[i]
        let a = guest[0]
        if (nums.includes(a)) {
            vip.add(guest)
        } else {
            regular.add(guest)
        }
    }
    for (let index = indexParty + 1; index < arr.length; index++) {
        let guest = arr[index]
        if(vip.has(guest)){
            vip.delete(guest) 
        }else if(regular.has(guest)){
            regular.delete(guest) 
        }
    }
    console.log(vip.size + regular.size)
for (const guest of vip) {
    console.log(guest)
}
for (const guest of regular) {
    console.log(guest)

}
}
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    '9NoBUajQ'
])
console.log("----------------------")
solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])
