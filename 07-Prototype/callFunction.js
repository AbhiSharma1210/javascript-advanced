// Call, Bind, Apply keywords in JS.

function setUsername(username) {
    this.username = username
    console.log("called"); // To tell if the function is called
}

function createUser(username, email, password) {
    setUsername.call(this, username);

    this.email = email
    this.password = password

    return this // required with the 'createUser.call()'
}

const user = new createUser("Abhi", "abhi@gmail.com", "1234")

// another way to do this
// In here instead of the 'new' keyword that creates an empty object.
// We directly pass an empty object '{}' within the call function.
// In this case we also need to use the 'return this' 
const userCall = createUser.call({}, "Abhi", "abhi@gmail.com", "1234")
console.log(user)
console.log(userCall)

