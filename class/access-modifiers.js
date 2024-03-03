class TestClass {
  #privateProperty = "Secret";
  _protectedProperty = "Property only for subclasses.";
}

const testClass = new TestClass();

// Log to console
console.log(testClass.privateProperty);
console.log(testClass._protectedProperty);
