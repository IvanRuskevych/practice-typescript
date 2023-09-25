const btn = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement; // ! - елемент існує, вказуємо тип as HTMLInputElement
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

btn?.addEventListener('click', () => {
  console.log(add(+input1.value, +input2.value)); // з інпуту завжди повертається string тому конвертуємо в число "+input"
});
