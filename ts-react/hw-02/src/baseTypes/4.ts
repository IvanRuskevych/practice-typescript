/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

type Person = [string, number]; // Tuple

let person: Person = ['Max', 21];

let person2: [string, number] = ['Max', 21];

export {};
