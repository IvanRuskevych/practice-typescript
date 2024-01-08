/* 1.1
 * Задача 1: Partial<T>
 * Уявімо, що у вас є форма редагування профілю користувача.
 * Користувач може вибирати, які поля він хоче оновити.
 * Створіть тип для такої форми на основі існуючого типу User.
 *
 */
function fnUpdateUser(userProfile, updateUserProfile) {
    return { ...userProfile, ...updateUserProfile };
}
const user = {
    name: 'Max',
    age: 20,
    isActive: true,
    description: 'string',
    email: 'user@email.com',
};
const updateuser = {
    isActive: false,
    description: 'false',
};
console.log('Задача 1 Partial<T>', fnUpdateUser(user, updateuser));
/* 1.2
 * Задача 2: Partial<T>
 * У вас є конфігураційний об'єкт з декількома полями.
 * Створіть функцію, яка приймає часткові налаштування та повертає
 * повний конфігураційний об'єкт.
 */
function fnUpdateUser2(updateUserProfile) {
    return {
        name: updateUserProfile.name || 'User',
        age: updateUserProfile.age || null,
        isActive: updateUserProfile.isActive || false,
        description: updateUserProfile.description || '',
    };
}
const updateUserProfile2 = {
    description: 'updateUserProfile: Partial<typeUser>',
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
// Так, існує відмінність між Readonly<typeData> та ReadonlyArray<number> в даному контексті.
// Readonly<typeData>:
// Readonly<T> - це узагальнений тип TypeScript, який робить всі властивості об'єкта T та його вкладених об'єктів доступними тільки для читання.
// У моєму випадку Readonly<typeData> застосовується до масиву чисел typeData, тобто робить сам масив та його властивості доступними лише для читання.
// ReadonlyArray<number>:
// ReadonlyArray<T> - це тип TypeScript, який робить всі методи для зміни масиву (push, pop, splice, і т. д.) недоступними,
// але не робить сам масив доступним лише для читання.
// У моєму випадку ReadonlyArray<number> застосовується до масиву чисел, роблячи методи для зміни масиву недоступними.
// ОТЖЕ: Обидва коди викликають помилку компіляції, оскільки метод push не існує на об'єктах
// з типами Readonly < typeData > та ReadonlyArray<number>.Однак різниця полягає в тому, що Readonly < typeData >
// застосовується до всього типу typeData(включаючи методи), тоді як ReadonlyArray < number > застосовується лише до методів масиву,
// залишаючи сам масив доступним для зчитування.
/* 2.2
 * Задача 2: Readonly<T>
 * Створіть об'єкт конфігурації, який не можна змінювати після його створення.
 */
const User_Readonly = {
    name: 'Max',
    age: 20,
    isActive: true,
    description: 'string',
};
// User_Readonly.name = 'User'; // Cannot assign to 'name' because it is a read-only property.
/*
 * 3. Pick<T, K>
 */
// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.
function fnGetUserPartData(user) {
    return { name: user.name, email: user.email };
}
console.log('Задача 1 Pick<T, K>', fnGetUserPartData(user));
function fnGetApiContent(data) {
    return { title: data.title, content: data.content };
}
const dataApiContent = {
    id: 1,
    title: 'Задача 2 Pick<T, K>',
    content: "type typeGetApiContent = Pick<typeApiContent, 'title' | 'content'>",
    createAt: new Date(),
};
console.log(`${dataApiContent.title}`, fnGetApiContent(dataApiContent));
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
