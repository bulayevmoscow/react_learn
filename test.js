let user = {
  firstName: "Вася",
  sayHi() {
    // console.log(this)
    console.log(`Привет, ${this.firstName}!`);
  }
};


let user1 = {
  firstName: 'Alex1'
}
let user2 = {
  firstName: 'Alex2'
}

setTimeout(user.sayHi.bind(user2), 1000);