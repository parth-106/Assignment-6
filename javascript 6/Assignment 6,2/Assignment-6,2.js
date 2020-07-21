console.log("Assignment 6.2");


class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.ludCoins = 0;
        this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in Succesfull`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out Succesfull`);
        return this;
    }
    addCoin(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} added LU-coins is database`);
        return this;
    }
    removeCoins(){
        this.ludCoins--;
        console.log(`${this.name} has ${this.ludCoins} remove LU-Coins from database`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, E-Mail is ${this.email}, Added Coin ${this.luCoins} and ${this.ludCoins} coin has removed for personal things`);
        return this;
    }
}

class Moderator extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

class Admin extends Moderator{
    addCourse(user,courses){
        user.courses.push(courses);
        console.log(user);
    }
    deleteCourse(user,courses){
        user.courses.pop(courses);
        console.log(user);
    }
}

let user1 = new User("Parth", 26, "parth@gmail.com");
user1.login().addCoin().addCoin().addCoin().addCoin().removeCoins().logout();
let user2 = new User("mihir", 29, "mihir@gmail.com");
user2.login().addCoin().addCoin()   .logout();
let user3 = new User("vijay", 32, "vijay@gmail.com");
user3.login().addCoin().addCoin().addCoin().addCoin().addCoin().addCoin().addCoin().removeCoins().logout();
let mod = new Moderator("Patel", 29, "patel@gmail.com");
mod.login().addCoin().addCoin().addCoin().addCoin().addCoin().addCoin().addCoin().addCoin().addCoin().logout();
let admin = new Admin("Prasad", 24, "prasad@gmail.com");
let users = [user1, user2, user3, mod, admin];
users.forEach(element =>{
    console.log(element);
});

admin.addCourse(user1, "Javascript");
admin.addCourse(user1, "Python");
admin.addCourse(user2, "Java");
admin.addCourse(user2, "Advance-Java");
admin.addCourse(user2, "advance -Pyhton");
admin.deleteCourse(user1, "Python");
admin.addCourse(user1, "Python")

// mod.deleteUser(user3);
// console.log(users)

// user1.getDetails();

