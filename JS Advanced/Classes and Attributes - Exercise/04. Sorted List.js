class List {
    constructor() {
        this.arr = []
        this.size = this.arr.length
    }
    add(num) {
        this.arr.push(num)
        this.size = this.arr.length
        this.arr.sort((a, b) => a - b)
    }
    remove(index) {
        if(index < 0 || index>=this.size){
            throw new Error ('Invalid Index!')
        }
        this.arr.splice(index, 1)
        this.size = this.arr.length

    }
    get(index){
        if(index < 0 || index>=this.size){
            throw new Error ('Invalid Index!')
        }
        // this.size = this.arr.length
        return this.arr[index]

    }

}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
// console.log(arr)
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));