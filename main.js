// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

/*
createUser()
parameters: firstName(string), lastName(string)

return: userobject

{
    firstName, (string)
    lastName, (string)
}
*/

function createUser (firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
}

console.log(createUser('Mesuara', 'Kaleziq'))
console.log(createUser('Timmy', 'Turner'))

/*
setAge()
parameters: user (object), age (number)

return object with age
user = {
    firstName (string)
    lastName (string)
    age (number)
}
*/

function setAge(user, num){
    user.age = num
    return user
}
let user1 = setAge
({firstName: "Timmy", lastName: "Turner"}, 10)
console.log(user1)
console.log(setAge(createUser("Timmy", "Turners"),15))

function incrementAge(user){
    user.age = user.age + 1
    return user
}

function fixCar(car){
    car.needsMaintenance = false
    return car
}

function addGrades(student, newGrades){
    for(let i = 0; i < newGrades.length; i++){
        student.grades.push(newGrades[i])
    }
    return student
}

function getDataType(car, x){
    let a = car[x]
// car = car:make etc.
    return typeof a
// "string" x
}

function addTodo(todos, newTodo){
    todos.push(newTodo)
    return todos
}

function addSong(playlist, newSong){
    playlist.duration = playlist.duration + newSong.duration
    playlist.songs.push(newSong)
    return playlist
}

/*
parameters
reportCard (object)
grade (number)

return reportCard (object)

-update our highest/lowest/average
if statements
if(grade > highest){
    upgrade highest
}
if(grades[grades.length-1] > highest){
    update the highest
}

-update grades array with new grade
    report.grades.push(grade)

    let sum = 0
    for loop

*/

function updateReportCard(reportCard, grade){

    if(grade > reportCard.highestGrade){
        reportCard.highestGrade = grade
    }
    if(grade < reportCard.lowestGrade){
        reportCard.lowestGrade = grade
    }

    reportCard.grades.push(grade)

    let sum = 0
    for(let i = 0; i < reportCard.grades.length; i++){
        sum += reportCard.grades[i]
    }

    reportCard.averageGrade = sum / reportCard.grades.length

    return reportCard
}




// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
