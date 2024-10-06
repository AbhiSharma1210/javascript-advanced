// Classes in Javascript

class userData {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.userName.toUpperCase()}`
    }
}

const firstData = new userData('Abhinav', 'abhi@gmail.com', '1234');
console.log(firstData)

console.log(firstData.encryptPassword())

console.log(firstData.changeUsername())

console.log("--------------------------")

// Behind the scenes

function newUserData(userName, email, password) { // This function is now a constructor
    this.userName = userName
    this.email = email
    this.password = password
}

newUserData.prototype.encryptPassword = function () {
    return `@#$${this.password}$#@`
}

newUserData.prototype.changeUsername = function () {
    return this.userName.toUpperCase()
}

const secondUser = new newUserData('Solblaze', 'sol@gamer.io', '567')

console.log(secondUser)

console.log(secondUser.encryptPassword())

console.log(secondUser.changeUsername())

