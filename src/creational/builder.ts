export class Builder {
  /*Build Profile*/
  private name?: string;
  private email?: string;
  private gender?: string;
  private age?: number;

  /*Builder List*/

  addName(name: string) {
    this.name = name;
    return this;
  }

  addEmail(email: string) {
    this.email = email;
    return this;
  }

  addGender(gender: string) {
    this.gender = gender;
    return this;
  }

  addAge(age: number) {
    this.age = age;
    return this;
  }

  build() {
    return new UserDetails(this.name, this.email, this.gender, this.age);
  }
}

class UserDetails {
  constructor(
    public name?: string,
    public email?: string,
    public gender?: string,
    public age?: number
  ) {}
}
