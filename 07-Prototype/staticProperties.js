// Static properties in Javascript
// 'static' keyword restricts use of method, function, etc.

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const userObj = new User("Abhinav")

// This will give an error because we have used 'static'.
// console.log(userObj.createId())

// Trying to inherit the 'User' class to see if a child can access 'static' method

class userDetails extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const newUserObj = new userDetails('Abhinav', 'a@b.com')
// console.log(newUserObj.createId);
newUserObj.logMe();
console.log(`Username is: ${newUserObj.username} and email is: ${newUserObj.email}`)