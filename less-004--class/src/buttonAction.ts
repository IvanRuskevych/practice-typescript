const button = document.querySelector('#btn')!; // ! - ми говорим TS , що ми впевнені, там є button

// if (button) {
//   button.addEventListener('click', () => {
//     console.log('Click');
//   });
// }

// // перевірка якщо існує (?), або ставимо (!) там де const button
// button?.addEventListener('click', () => {
//   console.log('Click');
// });

button.addEventListener('click', () => {
  console.log('Click');
});
