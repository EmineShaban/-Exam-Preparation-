function solve(arr){
let total = 0
let mi = 0
let numOfStudents = Number(arr.shift())
let lecture = Number(arr.shift())
let addBonus = Number(arr.shift())
let attendance = arr.map(Number)
let maxLecures = 0
for (let i = 0; i < numOfStudents; i++) {
    let att = attendance[i]
    total = att / lecture * (5 + addBonus)
if(total> mi){
    mi = total
    maxLecures = arr[i]
}

}
console.log(`Max Bonus: ${Math.ceil(mi)}.`)
console.log(`The student has attended ${Math.ceil(maxLecures)} lectures.`)
}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
])
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])
//let massiv = []


// function bonusSystem(input){
 
//     let studentCount = Number(input.shift());
//     let lecturesCount = Number(input.shift());
//     let initialBonus  = Number(input.shift());
//     let attendaceOfEachStudent = input.map(Number)
//     let maxBonus = 0
//     let maxLecures = 0
 
//     for(let i = 0; i < studentCount; i++){
//         let currentLecture =(attendaceOfEachStudent[i]);
        
    
//         let currentBonus = currentLecture / lecturesCount * (5 + initialBonus);
//         if(currentBonus > maxBonus){
//             maxBonus = currentBonus;
//             maxLecures = attendaceOfEachStudent[i];
            
            
//         }
        
//     }
    
//     console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
//     console.log(`The student has attended ${maxLecures} lectures.`)
 
// }