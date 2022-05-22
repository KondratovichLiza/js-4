// 1)
let student = {
    name: "Liza",
    surname: "Kondratovich",
    age: 25,
    "course of study": "Frontend-разработка",
    "english level": "A2",
}
console.log(student);
delete student["english level"]
    // 2)
let book = {
    numberOfPages: 545,
    cover: true,
    isTheAuthorAlive: false,
    isBestseller: true,
    booksEditions: 20000000,
}
for (let key in book) {
    if (typeof book[key] === "boolean") {
        console.log(book[key])
    }
}
// 3) 
let car = {
    brand: "BMV",
    color: "black",
    doors: 4,
    horsepower: 400,
    "engine capacity": 3.0,
    "gearbox type": "automatic",
};

let myCar = {};

for (let key in car) {
    myCar[key] = car[key];
}

console.log(car, myCar)

Object.assign(myCar, car);

console.log(car, myCar);
// 4)
let animalObj = {
    name: "cat",
    legs: 4,
    color: "black",

}

function animal(obj) {
    console.log("This " + obj.color + " " + obj.name + " has " + obj.legs + " legs");
}

animal(animalObj);


// 5)
let train = {
    locomotiveLength: 25,
    totalCoachCars: 4,
    coachLength: 15,
};

function lengthTrain(obj) {
    let sum = 0; {
        sum = obj.locomotiveLength + obj.totalCoachCars * obj.coachLength;
    }
    return sum;
}

let result = lengthTrain(train);
console.log(result);

// 6)
let studentObj = {
    name: "Иван",
    surname: "Иванов",
    ["group number"]: 1,

    student(obg) {
        console.log("Это студент " + "-" + this.name + "-" + this.surname + " " + "из группы " + "-" + this["group number"] + "-")
    }
}
studentObj.student()

// 7)
function Animal(animal, legs, predator, name) {
    this.animal = animal;
    this.legs = legs;
    this.predator = predator;
    this.name = name;
}
let animalCat = new Animal("Cat", 4, "No", "Tom");
console.log(animalCat);