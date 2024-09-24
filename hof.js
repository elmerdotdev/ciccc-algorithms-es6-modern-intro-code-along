// MAP

const numbers = [2, 4, 6, 8]
const doubledNums = numbers.map((num, index) => {
  return num + 5
})
console.log(numbers)
console.log(doubledNums)

const persons = [
  { firstName: "John", age: 20, country: 'Japan' },
  { firstName: "Jane", age: 25, country: 'Mexico' },
  { firstName: "Joe", age: 18, country: 'Ghana' }
]

const adults = persons.filter(person => person.age > 21)
// console.log(adults)

const legalPersons = persons.map(person => {
  return {
    ...person, // this will copy over all the properties
    isLegal: person.age > 21 ? true : false
  }
})
// console.log(legalPersons)


const wadStudents = [
  { firstName: "Daz", isWorking: true, age: 20 },
  { firstName: "July", isWorking: false, age: 20 },
  { firstName: "Kendrick", isWorking: true, age: 22 },
  { firstName: "Tomoya", isWorking: false, age: 23 },
]

const workingStudents = wadStudents.filter(student => student.isWorking)
// console.log('Working', workingStudents)

const legalStudents = wadStudents.filter(student => student.age >= 21)
// console.log('Can drink', legalStudents)

const adultStudents = wadStudents.map(student => {
  return {
    ...student,
    canDrink: student.age >= 21
  }
})

// console.log(legalStudents)
// console.log(adultStudents)

const products = [
  { item: 'apple', expiry: 2022 },
  { item: 'orange', expiry: 2025 }, // match
  { item: 'grapes', expiry: 2020 },
  { item: 'pineapple', expiry: 2026 }
]

const notExpired = products.filter(product => product.expiry >= 2024)
console.table(notExpired)

notExpired.forEach((product, index) => {
  console.log(index, product.item)
})

const digits = [4,6,3,2,5,2,6,7]

const sum = digits.reduce((total, currentElement) => {
  return total + currentElement
}, 0)
console.log(sum)

const digits2 = [10, 5, 35, 8, 92, 43]

const getMax = digits2.reduce((max, current) => current > max ? current : max, 0)

console.log(getMax)


// FIND OCCURENCES
const fruits = ["apple", "banana", "apple", "apple", "orange", "orange", "mango"]
const fruitCounter = fruits.reduce((object, current) => {
  object[current] = (object[current] || 0) + 1
  return object
}, {})
// {}
// { apple: 3, banana: 1 }

console.log(fruitCounter)