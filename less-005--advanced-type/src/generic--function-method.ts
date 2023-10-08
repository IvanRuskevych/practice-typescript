function merge<T, U, V>(objA: T, objB: U, objC: V) {
  return Object.assign({}, objA, objB, objC);
}

const toMerge1 = {
  name: 'Max',
};
const toMerge2 = {
  age: 21,
};
const toMerge3 = {
  meried: true,
};

const merged = merge(toMerge2, toMerge3, toMerge1);

merged.name;
merged.age;
merged.meried;

// В окремих випадка, за потреби, ми также можем передавать типы при вызове функции.

type Person3 = {
  name: string;
};

type Person4 = {
  age: number;
};

type Person5 = {
  meried: boolean;
};

const merge2 = merge<Person4, Person5, Person3>(toMerge2, toMerge3, toMerge1);
