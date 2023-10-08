/**
 * Generic
 */

let arr1: Array<string | number> = []; // var 1 запису generic
arr1 = ['string', 1];

let arr2: (string | number | boolean)[]; // var 2 запису generic
arr2 = ['string', 1, true];

const promise: Promise<string> = new Promise((resolve) => {
  resolve('String--promise');
});

promise.then((data) => {
  console.log(data);
});

// async fn - самовизивающаяся (()=>{})()
(() => {
  async function promiseFn(): Promise<string> {
    return 'String--promiseFn()';
  }

  promiseFn().then((data) => {
    console.log(data);
  });
})();
