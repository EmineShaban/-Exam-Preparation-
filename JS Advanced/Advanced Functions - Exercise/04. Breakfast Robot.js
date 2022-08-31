function solution() {
    const recipes = {
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    function restock(element, count) {
        storage[element] += count
        return "Success"
    }

    function prepare(recipe, count) {
        const remainingStorage = {}

        for (const element in recipes[recipe]) {

            let remaining = storage[element] - recipes[recipe][element] * count
            if (remaining < 0) {
                return `Error: not enough ${element} in stock`
            } else {
                remainingStorage[element] = remaining
            }
        }
        Object.assign(storage, remainingStorage)
        return 'Success'

    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }

    function control(str) {
        let [command, item, count] = str.split(' ')
        switch (command) {
            case 'restock':
                return restock(item, Number(count))
            case 'prepare':
                return prepare(item, Number(count))
            case 'report':
                return report()
        }
    }
    return control
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
