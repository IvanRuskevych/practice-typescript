/** 1
 * Створіть об'єкт Key
 * - є тільки властивість signature
 * - під час створення об'єкта генерує випадкове число та зберігає його у signature
 * - метод getSignature повертає випадкове число з signature
 */

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
    console.log('class Key -- this.signature', this.signature);
  }

  getSignature(): number {
    return this.signature;
  }
}

/** 2
 * Створіть об'єкт Person
 * - конструктор приймає ключ класу Key і зберігає його у властивість key
 * - метод getKey повертає key
 */

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    console.log('class Person--getKey()', this.key);
    return this.key;
  }
}

/** 3
 * Створіть абстрактний клас House, в ньому повинна бути наступна логіка
 * - властивість door – вона може бути закрита, або відкрита.
 * - властивість key – об'єкт класу Key.
 * - конструктор приймає аргумент класу Key та зберігає його у властивість key.
 * - метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.
 * - абстрактний метод openDoor приймає аргумент класу Key
 */

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (!this.door) {
      console.log('Door is close', this.door);
      throw new Error('Door is close');
    }

    this.tenants.push(person);
    console.log('Person inside', 'this.door:', this.door);
  }

  abstract openDoor(key: Key): boolean;
}

/** 4
 * Створіть клас MyHouse, який реалізує клас House
 * - створюємо метод openDoor, оскільки він приймає ключ,
 * - звіряємо збережений ключ у властивості key чи дорівнює він ключу з аргументу,
 * - якщо так, відкриваємо двері.
 */

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key.getSignature() !== key.getSignature()) {
      console.log(
        'MyHouse-->>this.key.getSignature()',
        this.key.getSignature()
      );

      console.log('Key to another door');
      throw new Error('Key to another door');
    }

    return (this.door = true);
  }
}

/** 5
 * Зробіть так, щоб мешканець потрапив додому.
 */

const key1 = new Key();
const house = new MyHouse(key1);
const person1 = new Person(key1);

house.openDoor(person1.getKey());
house.comeIn(person1);

// const key2 = new Key();
// const person2 = new Person(key2);
// house.openDoor(person2.getKey()); // Uncaught Error: Key to another door
// house.comeIn(person2); // ця частина вже не виконується через отримання err на попередньому кроці
