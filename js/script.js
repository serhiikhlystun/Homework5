// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: this.name,
//   specialty: this.specialty,
//   averageScore: this.averageScore,
//   missedLessons: this.missedLessons,
//   showInfo() {
//     console.group('Інформація про студента:');
//     console.log(`Ім'я студента - ${this.name}`);
//     console.log(`Спеціальність - ${this.specialty}`);
//     console.log(`Середній бал - ${this.averageScore}`);
//     console.log(`Кількість пропущених занять - ${this.missedLessons}`);
//     console.groupEnd();
//   },
// };

// let student1 = {
//   name: 'Іван',
//   specialty: 'інженер',
//   averageScore: 38,
//   missedLessons: 5,
// };

// let student2 = {
//   name: 'Анна',
//   specialty: 'медик',
//   averageScore: 87,
//   missedLessons: 2,
// };

// let student3 = {
//   name: 'Тарас',
//   specialty: 'актор',
//   averageScore: 84,
//   missedLessons: 4,
// };

// student.showInfo.call(student1);
// student.showInfo.apply(student2);
// student.showInfo.bind(student3)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// Оголошення змінних, з якими будемо працювати
// const divBtns = document.querySelector('div');
// const btnHtml = document.getElementById('btn-html');
// const btnCss = document.getElementById('btn-css');
// let text = document.createElement('p');
// textHtml =
//   'HTML - це HyperText Markup Language — мова розмітки гіпертексту стандартизована мова розмітки документів для перегляду вебсторінок у браузері.';
// textCss =
//   'CSS (абревіатура від Cascading Style Sheets, що в перекладі означає каскадні таблиці стилів) - це спеціальна мова (мова стилів), за допомогою якої описують вигляду документів (як і де відображати елементи веб-сторінки), написаних мовами розмітки даних. Найчастіше CSS використовується для документів, котрі розмічені мовою HTML, XHTML та XML.';

// Варіант №1 з двома функціями (окрема для кожної кнопки)

// btnHtml.addEventListener('click', () => {
//   text.innerText = textHtml;
//   divBtns.appendChild(text);
// });

// btnCss.addEventListener('click', () => {
//   text.innerText = textCss;
//   divBtns.appendChild(text);
// });

// Варіант №2 з однією функцією та умовою if

// function showInfo(selector) {
//   selector.addEventListener('click', () => {
//     if (selector === btnHtml) {
//       text.innerText = textHtml;
//     } else if (selector === btnCss) {
//       text.innerText = textCss;
//     }
//     divBtns.appendChild(text);
//   });
// }
// showInfo(btnHtml);
// showInfo(btnCss);

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const shop = function (product, priceForKg, quantity) {
//   let price = priceForKg * quantity;
//   return function () {
//     return (
//       'Ціна за ' +
//       product +
//       ' в кількості ' +
//       quantity +
//       'кг становить ' +
//       price
//     );
//   };
// };

// let banana = shop('banana', 30, 4.5);
// console.log(banana());
// let cherry = shop('cherry', 58, 1.3);
// console.log(cherry());
// let jrange = shop('jrange', 89, 3.4);
// console.log(jrange());
