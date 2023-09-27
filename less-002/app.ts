/*
 * Опис простих (скалярних) типів
 */

let num: number;
num = 10;
num = -10;
num = 10.1;
// num = 'string';

let str: string;
str = 'string';
// str = 10;

let bool: boolean;
bool = true;
// bool = 'str';

const person = 'Max'; // у такому разі немає потреби вказувати тип, оскільки це const та по-друге ми вказали тип явно "Маx"

let person2 = 'Max';

// person2 = 1; // видає помилку що не той тип

/**
 * Складні типи даних
 */

let arr = []; // arr type is "never"
// arr = [true, 1, 'string']; //err

let arrString: string[];
arrString = ['string'];
// arrString = ['string', 1]; //err

let arrNumber: number[];
arrNumber = [1, 2, 3];
// arrNumber = [1, 2, "string"]; //err

let arrAny: any[];
arrAny = [1, 2, 'string'];

let arrObj: { name: string }[];
arrObj = [{ name: 'Max' }, { name: 'Nax' }, { name: 'Bax' }];
// arrObj = [{ name: 'Max' }, { name: 1 },{ age: 20 }]; //err=1, err=age - відсутній в let arrObj, ми записали лише name

/**
 * Object
 */

const obj1: object = {};
const obj2: {} = {};

const obj3: { name: string } = { name: 'Alex' }; // такий запис говорить що Alex за замовченням, а name є обовязковим полем при подальшому використанні obj3

const obj4: { name?: string } = {}; // name? -name не є обоаязковим, тому ={}
obj4.name = 'Alex';

let db: {
  id: number;
  title?: string;
  info?: {
    date: Date;
    isNew: boolean;
  };
};

db = {
  id: 1,
  title: 'New',
  info: {
    date: new Date(),
    isNew: true,
  },
  //   another: '',
};

const data: {
  id: number;
  price: number;
  permission: string[];
  details: {
    title: string;
    description?: string;
  };
} = {
  id: 1,
  price: 10.99,
  permission: ['read', 'write'],
  details: {
    title: 'New product',
    description: 'This is awesome product!',
  },
};

/**
 * Типи, яких немає в js
 */

// -->> Any
let someAny: any;

someAny = 10;
someAny = 'Some string';
someAny = {};

// let numAny: number; // err
// numAny = someAny;

// -->> Unknown

let someUnk: unknown;
someUnk = 10;
someUnk = 'Some string';

let numUnk: number;
if (typeof someUnk === 'number') {
  numUnk = someUnk;
}

// -->> Tuple - кортеж, незмінний масив
let fixed: [string, number, boolean];

fixed = ['Text', 10, true];
// fixed = ['Text', 10, true, null]; // err
// fixed = ['Text', 10]; // err
// fixed = [10, 'Text'];//err

fixed.push('new'); // Є нюанс, якщо ми додамо через push, то компілятор це пропустить, він не відстежує реальний вміст масиву.
fixed.pop(); // Є нюанс, якщо ми додамо через pop, то компілятор це пропустить, він не відстежує реальний вміст масиву.

/**
 * Enum
 */

enum Role {
  ADMIN,
  USER,
}

const personEnum = {
  role: Role.ADMIN,
};

if (personEnum.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN); // Role: 0
}

enum Toggle {
  ENABLE,
  DISABLE,
}

const service = {
  status: Toggle.DISABLE,
};

if (service.status === Toggle.ENABLE) {
  console.log('It is active');
}

/**
 * Union Type
 */

let union: string | number;

union = 'Text';
union = 10;
// union = true; // err

function combine(param1: number | string, param2: number | string) {
  // return param1 + param2; // err

  if (typeof param1 === 'string' || typeof param2 === 'string') {
    return param1.toString() + param2.toString();
  }

  return param1 + param2;
}

console.log(combine(1, 2));
console.log(combine(1, '2'));
console.log(combine('1', '2'));

/*
 * Literal Type
 */

let literal: 'first' | 'second';

literal = 'first';
literal = 'second';
// literal = 'second3';// err

function greeting(action: 'hello' | 'bye') {
  if (action === 'hello') {
    console.log('Hello user!');
  } else {
    console.log('Bye user!');
  }
}

const fruit: string[] = [];

function literal2(arr: string[], value: string, action: 'add' | 'delete') {
  if (action === 'add') {
    arr.push(value);
  } else {
    const index = arr.indexOf(value);
    arr.splice(index, 1);
  }
  return arr;
}

literal2(fruit, 'banan', 'add');
literal2(fruit, 'peach', 'add');
literal2(fruit, 'stroubery', 'add');
console.log(fruit);

literal2(fruit, 'stroubery', 'delete');

console.log(fruit);

/*
 * Типи для методів та функцій
 */

// Return Type
function returnResult(num: number): number {
  return num;
}

// Void
function print(): void {
  console.log('Print some text');
}
// Never
function generateError(message: string, status: number): never {
  throw { message, status };
}

// generateError('An error', 500);

function customError(): never {
  throw new Error('Some error');
}

/**
 * Function Type
 */

let foo: () => void;
foo = () => {
  console.log('Some text');
};

let fn: (param1: number, param2: string) => void;
fn = (param1: number, param2: string) => {
  console.log(`${param2} ${param1}`);
};

function culc(
  num1: number,
  num2: number,
  cb: (arg1: number, arg2: number) => number
) {
  return cb(num1, num2);
}

function cbFn(num1: number, num2: number) {
  return num1 + num2;
}

const result = culc(1, 2, cbFn);

console.log('culc-->>result', result);

/**
 * Custom Types
 */
// Опишемо тип
type DatabaseDate = {
  id: number;
  price: number;
  permission: string[];
  details: {
    title: string;
    description?: string;
  };
};

// Призначимо тип для об'єкта
const dbDate: DatabaseDate = {
  id: 1,
  price: 10.99,
  permission: ['read', 'write'],
  details: {
    title: 'New product',
    description: 'This is awesome product!',
  },
};

type PersonType = {
  readonly name: string;
  age?: number;

  showName: () => void;
};

const person3: PersonType = {
  name: 'Max',
  showName() {
    console.log(this.name);
  },
};
const person4: PersonType = {
  name: 'Hax',
  showName() {
    console.log(this.name);
  },
};
// person1.name = 'New'; // err becouse readonly

person3.showName();
person4.showName();
