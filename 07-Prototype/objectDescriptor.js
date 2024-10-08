/**
 * Math.PI is a constant, but why?
 * can we change it? no, but why?
 * To answer this we look at following example
 */

// An obvious way, but this is not what we want
let pi = Math.floor(Math.PI)
console.log(pi)

console.log(Math.ceil(Math.PI));

// In JS we have a method `getOwnPropertyDescriptor`, 
// This method returns various hidden properties of an object.
// In our case its PI.
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const userDetails = {
    name: 'Abhinav',
    id: 1210,
    isAvailable: true,

    discordId: function () {
        console.log("Solblaze");
    }
}

console.log(Object.getOwnPropertyDescriptor(userDetails, "name"));

// disabling/hiding a particular property 
Object.defineProperty(userDetails, 'name', {
    //writable: false,
    enumerable: false,

})

console.log(Object.getOwnPropertyDescriptor(userDetails, "name"));

for (let [key, value] of Object.entries(userDetails)) {
    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);
    }
}