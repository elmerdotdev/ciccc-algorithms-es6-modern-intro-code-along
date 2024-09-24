
let student = {
  firstName: "John",
  lastName: "Smith",
  age: 20,
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  greeting: function() {
    return `My name is ${this.getFullName()}. I am ${this.age} years old.`
  }
}

// console.log(student.greeting())


function sayHello() {
  return "Hello"
}

// console.log(sayHello())


const sayHelloAgain = (loggedIn) => loggedIn && "You are logged in"

// console.log(sayHelloAgain(false))

// let employees = [] // we protect the integrity of this array using const
// schools.push("CICCC", "Harvard")
// console.log(schools)

// const employee = {
//   firstName: "Jane"
// }
// employee.lastName = "Smith"
// console.log(employee)

const students = [
  { firstName: "John", age: 20, salary: 2000 }, //0
  { firstName: "Mary", age: 25, salary: 1500 }, //1
  { firstName: "Joe", age: 24, salary: 3000 } //2
]

// for (const student of students) {
//   console.log(student.firstName)
// }

// for (let i = 0; i < students.length; i++) {
//   console.log(`My name is ${students[i].firstName}. I earn $${(students[i].salary * 12).toLocaleString()} annually`)
// }


// function checkLoggedIn(status) {
//   if (status === true) {
//     return "You are logged in"
//   } else {
//     return "You are not logged in"
//   }
// }

const checkLoggedIn = status => status === true ? "You are logged in" : "You are not logged in"

// console.log(checkLoggedIn(false))



function checkWeather(day, weather = "sunny") {
  return `Today it's ${day}. It's ${weather} outside.`
}

// console.log(checkWeather("Tuesday", "rainy"))

let firstName = "Timothy"

const worker = {
  firstName: "John",
  lastName: "Smith",
  age: 50,
  city: "Vancouver",
  country: "Canada"
}

const { firstName: workerFN, lastName: workerLN, ...rest } = worker
// console.log(workerFN, workerLN, rest.city, rest.age)

// for (let key in worker) {
//   console.log(`${key}: ${worker[key]}`)
// }