console.log('<<<<< ========== LESS-005 ADVANCED TYPES ========== >>>>>');

/**
 * Intersection Types#
 */
type Admin1 = {
  name: string;
  privilages: string[];
};

type User1 = {
  name: string;
  startDate: Date;
};

// type AdminUser = Admin & User;

// const user: AdminUser = {};

interface Admin2 {
  name: string;
  privilages: string[];
}

interface User2 {
  name: string;
  startDate: Date;
}

interface AdminUser extends Admin2, User2 {}

/**
 * Type Guards
 */
type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

type AdminOrUser = Admin1 | User1;

function showFields(el: AdminOrUser) {
  console.log(el.name);

  if ('startDate' in el) {
    console.log(el.startDate);
  }

  if ('privilages' in el) {
    console.log(el.privilages);
  }
}

abstract class Guy {
  constructor(public name: string) {}
}

class Good extends Guy {
  advice() {
    console.log('advice');
  }
}

class Bad extends Guy {
  insult() {
    console.log('insult');
  }
}

const good = new Good('GoodBoy');
const bad = new Bad('BadBoy');

function guys(user: Guy) {
  if (user instanceof Good) {
    user.advice();
  }
  if (user instanceof Bad) {
    user.insult();
  }
}

/**
 * Type Casting
 */
// var 1
const input1 = document.getElementById('inputElement') as HTMLInputElement;
input1.value;

// var 2
const input2 = document.getElementById('inputElement');
// var 2.1
if (input2) {
  (input2 as HTMLInputElement).value;
}
// var 2.2
if (input2) {
  const newInput = input2 as HTMLInputElement;
  newInput.value;
}

/**
 * Index properties
 */

type Person1 = {
  name: string;
  //   [x: string]: string | number; // приклад
  [x: string]: any; // найчастіше використовують any
};

const user1: Person1 = {
  name: 'Max',
  gender: 'man',
  age: 12,
};

interface Person2 {
  name: string;
  additionInfo?: {
    someInfo: string;
  };
}

const user2: Person2 = {
  name: 'Alex',
};

console.log(user2?.additionInfo?.someInfo);

/**
 * Nullish Coalescing#
 */
const userInput = '';

const store1 = userInput || 'DEFAULT';
console.log('Nullish Coalescing-->>', store1);

const store2 = userInput ?? 'DEFAULT';
console.log('Nullish Coalescing-->>', store2);

/**
 * Перегрузка операторов (function overloads)#
 */

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number | string, b: number | string) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
