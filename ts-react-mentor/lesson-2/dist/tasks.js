// Partial<T>
function fnUpdateUser1(userProfile, updateUserProfile) {
    return { ...userProfile, ...updateUserProfile };
}
const User1 = { name: 'Max', age: 20, isActive: true, description: 'string' };
const updateUser1 = {
    isActive: false,
    description: 'false',
};
console.log('Задача 1 Partial<T>', fnUpdateUser1(User1, updateUser1));
//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає
// повний конфігураційний об'єкт.
function fnUpdateUser2(updateUserProfile) {
    return {
        name: updateUserProfile.name || 'User',
        age: updateUserProfile.age || null,
        isActive: updateUserProfile.isActive || false,
        description: updateUserProfile.description || '',
    };
}
const updateUserProfile2 = {
    description: 'updateUserProfile: Partial<typeUser1>',
};
console.log('Задача 2 Partial<T>', fnUpdateUser2(updateUserProfile2));
function fnReturnData0(data) {
    data.push(6);
    return data;
}
function fnReturnData(data) {
    // data.push(6); // Помилка компіляції: "push" не існує на типі "Readonly<typeData>"
    return Array.from(data);
}
function fnReturnDataArr(data) {
    // data.push(6); // Помилка компіляції: "push" не існує на типі "ReadonlyArray<number>"
    return Array.from(data);
}
const data = [1, 2, 3, 4, 5];
const dataArr = [5, 4, 3, 2, 1];
console.log('Задача 1 Readonly<T>', fnReturnData(data));
console.log('Задача 1 Readonly<T>', fnReturnDataArr(dataArr));
const User2 = {
    name: 'Max',
    age: 20,
    isActive: true,
    description: 'string',
};
// User2.name = 'User'; // Cannot assign to 'name' because it is a read-only property.
// 3. Pick<T, K>
// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.
// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.
// 4. Record<K, T>
// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.
// Задача 2: Мапа з іменами місяців до кількості днів у них.
// 5. Omit<T, K>
// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.
//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.
// Робота з інтерфейсами
// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.
// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.
// Робота з класами
// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.
// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.
