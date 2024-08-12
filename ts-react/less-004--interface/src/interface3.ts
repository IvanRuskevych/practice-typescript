/*
 * Тип функції через type або interface:
 * Це по суті те саме, використовуйте те, що вам більше подобається.
 */

// // Тип функції через type
// type addFunc = (n1: number, n2: number) => number;

// Тип функції через interface
interface addFunc {
  (n1: number, n2: number): number;
}

let add: addFunc;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
