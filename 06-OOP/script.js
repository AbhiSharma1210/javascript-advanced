// Javascript is a prototype-based language
// in prototype based language, objects directly inherit from other object
const vehicle = {
    type: 'Car',
    Manufacturer() {
        console.log("Mahindra");
    }
};

const cars = Object.create(vehicle);
cars.model = function () {
    console.log('SUV 300');
};

console.log(cars.type);      // Inherited from `vehicle`: Output: "Car"
cars.Manufacturer();         // Inherited method: Output: "Mahindra"
cars.model();                // Own method: Output: "SUV 300"



// Constructors in JS
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        // console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne = new User("Abhinav", 12, true)
// const userTwo = new User("Phoenix", 21, false)
// console.log(userOne.constructor);
//console.log(userTwo);


// 