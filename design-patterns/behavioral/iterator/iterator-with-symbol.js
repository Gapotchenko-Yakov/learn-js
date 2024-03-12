class Iterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.elements.length) {
          const { name, ...otherProps } = this.elements[this.index++];
          return { done: false, value: { [name]: otherProps } };
        } else {
          return { done: true };
        }
      },
    };
  }
}

console.group("Iterator using Symbol.iterator:");

const collection = new Iterator([
  { name: "Audi", maxSpeed: 200 },
  { name: "BMV", maxSpeed: 250 },
  { name: "Tesla", maxSpeed: 120 },
  { name: "Nissan", maxSpeed: 180 },
]);

// const collection = new Iterator(["Audi", "Toyota"]);

for (let elem of collection) {
  console.log(elem);
}

console.groupEnd();
