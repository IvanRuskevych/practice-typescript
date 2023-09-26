/*
 * Опис простих (скалярних) типів
 */
var num;
num = 10;
num = -10;
num = 10.1;
// num = 'string';
var str;
str = 'string';
// str = 10;
var bool;
bool = true;
// bool = 'str';
var person = 'Max'; // у такому разі немає потреби вказувати тип, оскільки це const та по-друге ми вказали тип явно "Маx"
var person2 = 'Max';
// person2 = 1; // видає помилку що не той тип
/**
 * Складні типи даних
 */
var arr = []; // arr type is "never"
// arr = [true, 1, 'string']; //err
var arrString;
arrString = ['string'];
// arrString = ['string', 1]; //err
var arrNumber;
arrNumber = [1, 2, 3];
// arrNumber = [1, 2, "string"]; //err
var arrAny;
arrAny = [1, 2, 'string'];
var arrObj;
arrObj = [{ name: 'Max' }, { name: 'Nax' }, { name: 'Bax' }];
// arrObj = [{ name: 'Max' }, { name: 1 },{ age: 20 }]; //err=1, err=age - відсутній в let arrObj, ми записали лише name
/**
 * Object
 */
var obj1 = {};
var obj2 = {};
var obj3 = { name: 'Alex' }; // такий запис говорить що Alex за замовченням, а name є обовязковим полем при подальшому використанні obj3
var obj4 = {}; // name? -name не є обоаязковим, тому ={}
obj4.name = 'Alex';
var db;
db = {
    id: 1,
    title: 'New',
    info: {
        date: new Date(),
        isNew: true,
    },
    //   another: '',
};
var data = {
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
var someAny;
someAny = 10;
someAny = 'Some string';
someAny = {};
// let numAny: number; // err
// numAny = someAny;
// -->> Unknown
var someUnk;
someUnk = 10;
someUnk = 'Some string';
var numUnk;
if (typeof someUnk === 'number') {
    numUnk = someUnk;
}
// -->> Tuple - кортеж, незмінний масив
var fixed;
fixed = ['Text', 10, true];
// fixed = ['Text', 10, true, null]; // err
// fixed = ['Text', 10]; // err
// fixed = [10, 'Text'];//err
fixed.push('new'); // Є нюанс, якщо ми додамо через push, то компілятор це пропустить, він не відстежує реальний вміст масиву.
fixed.pop(); // Є нюанс, якщо ми додамо через pop, то компілятор це пропустить, він не відстежує реальний вміст масиву.
/**
 * Enum
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
var personEnum = {
    role: Role.ADMIN,
};
if (personEnum.role === Role.ADMIN) {
    console.log('Role: ', Role.ADMIN); // Role: 0
}
var Toggle;
(function (Toggle) {
    Toggle[Toggle["ENABLE"] = 0] = "ENABLE";
    Toggle[Toggle["DISABLE"] = 1] = "DISABLE";
})(Toggle || (Toggle = {}));
var service = {
    status: Toggle.DISABLE,
};
if (service.status === Toggle.ENABLE) {
    console.log('It is active');
}
/**
 * Union Type
 */
var union;
union = 'Text';
union = 10;
// union = true; // err
function combine(param1, param2) {
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
var literal;
literal = 'first';
literal = 'second';
// literal = 'second3';// err
function greeting(action) {
    if (action === 'hello') {
        console.log('Hello user!');
    }
    else {
        console.log('Bye user!');
    }
}
var fruit = [];
function literal2(arr, value, action) {
    if (action === 'add') {
        arr.push(value);
    }
    else {
        var index = arr.indexOf(value);
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
