console.log('<<<<< ========== GENERIC--EXTENDS ========== >>>>>');

function mergeExtends<T extends object, U extends object, V extends object>(
  objA: T,
  objB: U,
  objC: V
) {
  return Object.assign({}, objA, objB, objC);
}

const toMerge11 = {
  name: 'Max',
};
const toMerge22 = {
  age: 21,
};
const toMerge33 = {
  meried: true,
};

// const merged2 = mergeExtends('toMerge22', 'toMerge33', 'toMerge11'); // тут помилки не видає, але ми передбачали що тут має бути object, тому ...
const merged2 = mergeExtends(toMerge22, toMerge33, toMerge11); // ... тому використаємо extends і запишемо у функцію що <T extends object, U extends object, V extends object>
merged2.name;
merged2.age;

merged2.meried;

/**
 * Обмеження дженеріка, щоб було лише те що нам потрібно
 */

interface ILength {
  length: number;
}

function getLength<T extends ILength>(str: T): number {
  return str.length;
}

console.log("getLength('10'):", getLength('10')); // = 2
console.log("getLength(['10', 10]):", getLength(['10', 10])); // = 2
console.log("getLength(['10', 10, 20]):", getLength(['10', 10, 20])); // = 3

const obj = {
  length: 10,
};

// getLength(10); // err
console.log('getLength(obj):', getLength(obj)); // = 10
