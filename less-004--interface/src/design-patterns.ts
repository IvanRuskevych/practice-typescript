/**
 * Шаблони проектування
 */

console.log('<<<---  Singleton --->>>');
// Цей шаблон дозволяє не плодити об'єкти, повертаючи той самий екземпляр.
// Це класична реалізація, зробити constructor приватним та створювати об'єкт через статичний метод.
class Singleton1 {
  private static instance: Singleton1;

  private constructor() {}

  public static getInstance(): Singleton1 {
    if (!Singleton1.instance) {
      Singleton1.instance = new Singleton1();
    }

    return Singleton1.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}

const s11 = Singleton1.getInstance();
const s12 = Singleton1.getInstance();

if (s11 === s12) {
  console.log('Той самий об`єкт Singleton1');
} else {
  console.log('Щось не так, отримали різні об`єкти Singleton1');
}

// Але, оскільки ми використовуємо JS під капотом, ми можемо схитрувати.

class Singleton2 {
  private static instance: Singleton2;

  constructor() {
    if (Singleton2.instance) {
      return Singleton2.instance;
    }

    Singleton2.instance = this;

    return Singleton2.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}

const s21 = new Singleton2();
const s22 = new Singleton2();

if (s21 === s22) {
  console.log('Той самий об`єкт Singleton2');
} else {
  console.log('Щось не так, отримали різні об`єкти Singleton2');
}

console.log('<<<---  Фабрика --->>>');
// Використовується, коли нам потрібно багато однотипних об'єктів із загальним інтерфейсом.

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    // Викликаємо фабричний метод, щоби отримати об'єкт-продукт.
    const product = this.factoryMethod();
    // Далі працюємо з цим продуктом.
    return `Creator: I'm starting ${product.operation()}`;
  }
}

interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return 'ConcreteProduct1';
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return 'ConcreteProduct2';
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

const concrete1 = new ConcreteCreator1();
const concrete2 = new ConcreteCreator2();

console.log(concrete1.someOperation());
console.log(concrete2.someOperation());

// Але це класична фабрика, вона мені не подобається. Ось ще один підхід.
interface IProduct {
  getInfo(): void;
}

class Small implements IProduct {
  getInfo(): void {
    console.log("I'm small");
  }
}
class Big implements IProduct {
  getInfo(): void {
    console.log("I'm big");
  }
}

class Factory {
  private objects = {
    small: Small,
    big: Big,
  } as any;

  create(type: string): IProduct {
    const { objects } = this;

    type = type.toLowerCase();
    if (!objects[type]) {
      throw new Error('No classes to create');
    }

    return new objects[type]();
  }
}

const factory = new Factory();

const small = factory.create('small');
const big = factory.create('big');

small.getInfo();
big.getInfo();
