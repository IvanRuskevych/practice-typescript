var btn = document.querySelector('button');
var input1 = document.getElementById('num1'); // ! - елемент існує, вказуємо тип as HTMLInputElement
var input2 = document.getElementById('num2');
function add(num1, num2) {
  return num1 + num2;
}
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener('click', function () {
      console.log(add(+input1.value, +input2.value)); // з інпуту завжди повертається string тому конвертуємо в число "+input"
    });
