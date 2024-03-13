class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return "It is a Tesla car!";
  }
}

class BMW extends Auto {
  info() {
    return "It is a BMW car!";
  }
}

class Audi extends Auto {
  info() {
    return "It is a Audi car!";
  }
}

function visitor(auto) {
  if (auto instanceof Tesla)
    auto.export = console.log(`Exported data: ${auto.info()}`);
  if (auto instanceof BMW)
    auto.export = console.log(`Exported data: ${auto.info()}`);
  if (auto instanceof Audi)
    auto.export = console.log(`Exported data: ${auto.info()}`);
}

const tesla = new Tesla();
const bmw = new BMW();
const audi = new Audi();

tesla.accept(visitor);
bmw.accept(visitor);
audi.accept(visitor);
