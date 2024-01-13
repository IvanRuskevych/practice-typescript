/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

// 1) порядок елементів у масиві не важливий конкретний

function getPromise1(): Promise<(number | string | boolean | null | undefined)[]> {
  return new Promise((resolve) => {
    resolve(['Text', 50, 'Text']);
  });
}

getPromise1().then((data) => {
  console.log(data);
});

// 2) конкретний порядок елементів у масиві важливий (спершу рядок, потім число)

function getPromise2(): Promise<[number, string, string, boolean, null, undefined]> {
  return new Promise((resolve) => {
    resolve([50, 'Text', 'Text', false, null, undefined]);
    // resolve(['Text', 50]); // error
  });
}

getPromise2().then((data) => {
  console.log(data);
});

export {};
