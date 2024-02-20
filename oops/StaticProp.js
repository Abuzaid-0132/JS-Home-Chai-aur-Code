class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const zain = new user("zain");
// console.log(zain.createId());

class Teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = this.email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
