//Next gen Javascript
// let & const
//const = Constant
//let = Allows function and global scope 
//var = registers all variables in global function scope. Var is global

//Arrow function
const add = (a: number, b: number = 5) => { //default arguments have to be last on the list
    return a + b
}

console.log(add(10000000000, 1))

const printOutput = (output: string | number) => console.log(output)
printOutput(add(1))

const button  = document.querySelector('button')
if(button) {
    button.addEventListener('click', event => console.log(event)) // No error is ommitted
}

// The spread operator
//Arrays
const hobbies = ['Hiking', 'Reading'];
console.log(hobbies)
const activeHobbies = ['Cooking']
activeHobbies.push(...hobbies)
console.log(activeHobbies)

//Objects
const person = {
    name: 'Michael',
    age: 33
}

console.log(person)

const copiedPerson = {...person}
console.log(copiedPerson)

// Rest parameter
// Allow flexibility in where we want to receieve values
// Array
const addNew = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue
    }, 0)
}

const addedNumbers = addNew(5, 10, 12, 45, 34)
console.log(addedNumbers)

//Tuples
const addTuples = (...numbers: [number, number, number]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue
    }, 0)
}
const addedTuples = addTuples(12,24,24)
console.log(addedTuples)

//Array and Object Destructuring
const [hobby1] = hobbies;
console.log(hobby1) //Hiking

const {age} = person;
console.log(age) //33

