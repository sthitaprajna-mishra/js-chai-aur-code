class User {
    constructor(username) {
        this.username = username
    }

    logMe = function() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chaiteacher", "ct@chaitea.com", "123abc")
chai.logMe()
chai.addCourse()