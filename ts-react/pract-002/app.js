console.log('pract 002');
/**
 * Задайте правильні ts типи для класичних js;
 */
var age = 50;
var namePract = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
// let age: number;
// age = 50;
// let namePract: string;
// namePract = 'Max';
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback = (a: number) => number;
// callback = (a) => {
//   return 100 + a;
// };
// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
var anything;
anything = -20;
anything = 'Text';
anything = {};
// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
var person = ['Max', 21];
// let person: [string, number];
// person = ['Max', 21];
// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var page = { load: Status.LOADING };
if (page.load === Status.LOADING) {
    console.log('Page is loading');
}
else {
    console.log('Page has loaded');
}
// enum Load {
//   LOADING,
//   READY,
// }
// const page = {
//   load: Load.READY,
// };
// if (page.load === Load.LOADING) {
//   console.log('Сторінка завантажується');
// }
// if (page.load === Load.READY) {
//   console.log('Сторінка завантажена');
// }
// Зробіть змінну, яка може приймати або рядок, або число.
var union;
union = 'string';
union = 23;
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
var literal;
// Вкажіть типи для наступних функцій
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    },
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
