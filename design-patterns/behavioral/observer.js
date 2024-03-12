class AutoNews {
  constructor(news = "", observers = []) {
    this.news = news;
    this.observers = observers;
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    this.observers.forEach((observer) => observer.inform(this.news));
  }

  register(observer) {
    this.observers.push(observer);
  }

  unregister(observer) {
    this.observers = this.observers.filter(
      (elem) => elem.name !== observer.name
    );
  }
}

const John = {
  name: "John",
  inform(news) {
    console.log(`${this.name} has been informed about: ${news}`);
  },
};

const Jack = {
  name: "Jack",
  inform(news) {
    console.log(`${this.name} has been informed about: ${news}`);
  },
};

const autoNews = new AutoNews();

autoNews.register(John);
autoNews.register(Jack);

autoNews.setNews("Storm");

autoNews.unregister(Jack);

autoNews.setNews("Politics");
