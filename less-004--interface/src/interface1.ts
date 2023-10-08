/**
 * Інтерфейси об'єктів
 */

// Сам інтерфейс зараз працює як тип, він просто показує, які поля повинні бути в об'єкті.
interface IPerson {
  name: string;
  age?: number; // ? необовязкове поле

  greet(phrase: string): void;
}

let user: IPerson;

user = {
  name: 'Ivan',
  //   pilot: true,// err тому що немає у IPerson

  greet(phrase) {
    console.log(phrase + ' ' + this.name);
  },
};

user.greet('Hi, my name is');

// По факту, якщо ми використовуємо його для об'єкта, немає різниці - ми будемо використовувати interface або type.
// І все працює точно так само, різниця починається, коли ми хочемо додати інтерфейс до класу.
// Перепишемо на тип

type IPerson11 = {
  name: string;
  age: number;

  greet(phrase: string): void;
};

let user11: IPerson;

user11 = {
  name: 'Anthony',
  age: 21,

  greet(phrase) {
    console.log(phrase + ' ' + this.name);
  },
};

user11.greet('Hi, my name is');
