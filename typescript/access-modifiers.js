var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, birthDate, passportSeries, passportNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.passportSeries = passportSeries;
        this.passportNumber = passportNumber;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Employee.prototype, "occupation", {
        get: function () {
            return this._occupation;
        },
        set: function (occupation) {
            this._occupation = occupation;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}(Person));
var person = new Person("John", "Smith", "03.03.1990", 1234, 654321);
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
