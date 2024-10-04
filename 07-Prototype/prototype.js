let bikes = ['Ultraviolette f77', 'pulsar', 'splendor']

let randomObject = {
    name: 'F77',
    type: 'EV bike',

    displayName: function () {
        console.log(`The bike's name is ${this.name}`);
    }
}

// adding a prototype directly to the root object

Object.prototype.myName = function () {
    console.log(`This name is Abhinav`);
}

randomObject.myName();
bikes.myName();

// modern syntax
// 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()