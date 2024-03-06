class Person {
  // public by default
  firstName: string;
  lastName: string;
  private passportSeries: number;
  private passportNumber: number;
  // protected
  protected birthDate: string;

  constructor(
    firstName: string,
    lastName: string,
    birthDate: string,
    passportSeries: number,
    passportNumber: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.passportSeries = passportSeries;
    this.passportNumber = passportNumber;
  }
}

class Employee extends Person {
  protected _occupation: string;
  public get occupation() {
    return this._occupation;
  }
  protected set occupation(occupation: string) {
    this._occupation = occupation;
  }
}

const person = new Person("John", "Smith", "03.03.1990", 1234, 654321);

console.group("PUBLIC");
console.log("🚀 ~ person.firstName:", person.firstName);
console.log("🚀 ~ person.lastName:", person.lastName);
console.groupEnd();
console.group("PROTECTED");
console.log("🚀 ~ person.birthDate:", person.birthDate);
console.groupEnd();
console.group("PRIVATE");
console.log("🚀 ~ person.passportSeries:", person.passportSeries);
console.log("🚀 ~ person.passportNumber:", person.passportNumber);
console.groupEnd();
