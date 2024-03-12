class Iterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }

  next() {
    if (this.hasNext()) {
      const { name, ...otherProps } = this.elements[this.index++];
      return { [name]: otherProps };
    }
    // else {
    //   throw new Error("index out of range");
    // }
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const collection = new Iterator([
  { name: "Audi", maxSpeed: 200 },
  { name: "BMV", maxSpeed: 250 },
  { name: "Tesla", maxSpeed: 120 },
  { name: "Nissan", maxSpeed: 180 },
]);

while (collection.hasNext()) {
  console.log(collection.next());
}
