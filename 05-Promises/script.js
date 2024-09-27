// Basic syntax
const newPromise = new Promise(function (resolve, reject) { // resolve is a method here. 
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        // console.log('Async task is compelete');
        resolve() // Its important to call resolve() for .then to work.
    }, 1000)
})

newPromise.then(function () { //then is directly associated with resolve.
    // console.log("Promise consumed");
})

// Another way to use promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task 2')
        resolve();
    }, 1000)
}).then(function () {
    // console.log('Promise consumed 2')
})

// Another use case is when you want to return values 

const anotherPromise = new Promise(function (resolve, reject) {
    resolve({ username: 'Abhinav', nickname: 'Abhi' })
})

anotherPromise.then(function (userData) {
    // console.log(`Userdata is: \n${userData.username}, ${userData.nickname}`);
})

// Use of reject
// based on some condition, the promise is either resolved or rejected.
const rejectPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Abhinav", id: "Solblaze" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

rejectPromise
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (rejected) { //.catch is used with reject. It handles the code if promise is rejected.
        console.log(rejected);
    }).finally(() => console.log("The promise is completed 4"))



// Other ways to handle promise
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong in Async function')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()