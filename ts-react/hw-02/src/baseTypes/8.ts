/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female".
  Створіть змінну myGender цього типу.
*/

type Mail = 'male';
type Female = 'female';

type typeGender = Mail | Female;
// type typeGender = 'male' | 'female'; // Literal Type це частковий випадок Union Type

const myGender: typeGender = 'male';

export {};
