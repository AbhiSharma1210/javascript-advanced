// In Javascript there are some keywords 
// Using these keywords we can implement inheritance

class userData {
    constructor(userName) {
        this.userName = userName
    }

    userLogin() {
        return `${this.userName} is now logged in`
    }
}

class userdetails extends userData {
    constructor(userName, email, id) {
        super(userName);
        this.email;
        this.id
    }

    addDetails() {
        return `The details have been added by ${this.userName}`;
    }
}

const firstUser = new userdetails('Abhi', 'abhi@gmail.com', 21)

console.log(firstUser.userLogin())

const secondUser = new userData()

// parent class object cannot access child class 
console.log(secondUser instanceof userdetails)
