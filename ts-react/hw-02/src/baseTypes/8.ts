/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = "male" | "female";

const myGender1: Gender = "male";
const myGender2: Gender = "female";
// const myGender3: Gender = "xxx";// error

export {};
