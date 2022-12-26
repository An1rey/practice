// let out = document.getElementById('out');
// let tmp = '';
// Вивести від 4 до 400
// for (let i = 4; i<=400; i++){
//  tmp = tmp + i + '';
// }
//Вивести вд 4 7 10 13
//for (let i = 4; i<=13; i=1+3){
  //  tmp = tmp + i + '';
//}
//Вивести від 654 до 0
//for (let i = 654; i>=0; i=i-1){
  //  tmp = tmp + i + ' ';
//}
// for (let i = 1983; i<=2017; i++){
//     tmp = tmp + i + ' ';
// }
// Вивести -4 -2 0 2 4 6
// for ( let i = -4; i<=100; i=i+1){
//     tmp = tmp + i + ' ';
// }
//Вивести таблицу умножения на 7 от 1 до 10
//  for (let i = 1; i<=10; i=i+1){
//     tmp = tmp +7 + '*' +i+ ' = '+7*i + ' <br> ';
//  }
//Вивести с помощью цикла спец символов от 1000 до 2000
// for (let i = 1000; i<=2000; i=1+1){
//     tmp = tmp  +'&#' +i+ ' ';
// }
// document.write(tmp);






// 1. Дано два різних числа. Виявити яке з них більше, а яке менше.
//  const a = prompt('Перше число');
//  const b = prompt('Друге число');
// if(a>b){
//  alert("a>b")
//  }
//  else if(a<b){
//      alert("a<b")
//  }
// else {
//     alert("a === b")
// }
//2. Відомо дві дистанції. Одне в кілометрах, інше в футах(1 фут - 0,305м). Яка дистанція менша?
// const distance1 = prompt('перша дистанцці')
// const distance2 = prompt('друга дистанцці')
// const KmMeter = distance1 * 1000;
// const footMeter = distance2 * 0.305;
// if(distance1 > distance2){
//     alert("distance1 > distance2")
// }
// else if (distance1 < distance2){
//     alert("distance1 < distance2")
// }
// else {
//     alert("distance1 === distance2")
// }
// 3. Виявити чи деяке число а є дільником числа b ? І навпаки. (Дати 2 відповіді)
// const a = prompt('Перше число');
// const b = prompt('Друге число');
// if(a % b === 0){
//     alert ('a є дільником b === 0 ')
// }
// else if(b % a === 0){
//     alert('b є дільником a === 0')
// }
// else {
//     alert('Введенно не коректне значення')
// }
//4.Вивести на сторінку в одну строку через зап’яту числа від 10 до 20
//  let out = document.getElementById('out');
//  let tmp = '';
// for (let i = 10; i<=20; i++){
//   tmp = tmp + i + ',';
//  }
//  alert(tmp)
//5.Вивести квадрати чисел від 10 до 20
// function kvadrat(patternString, first) {
//     return first*first;
// }
// let str = '10,11,12,13,14,15,16,17,18,19,20',
//     result =  str.replace(/(\d+)/g, kvadrat);
//
// console.log(result);
//6.Вивести таблицю множення на 7 от 1 до 10
//  for (let i = 1; i<=10; i=i+1){
//     tmp += tmp +7 + '*' +i+ ' = '+7*i + ' <br> ';
//  }
// document.write(tmp);
// 7.Знайти середнє арифметичне всіх цілих чисел від 1 до 500
// let sum = 0;
// for (let i = 1; i <= 100; i++)
// {
//     sum += i;
// }
// console.log(sum/500);
// 8. Знайти добуток усіх цілих чисел від 15 до 35
//  let result = 0
//  for (let i = 15; i <= 35; i++) {
//      const current = i
//      const  next = i + 1
//      const isFirst = current === 15
//      result *= i
//  }
//  console.log(result)
//9.Вивести суму тільки парних чисел в діапазоні від 30 до 80
//  const isEvenNumbers = (num) => num % 2 === 0
//  const isFirstIteration = (firstNum,) => firstNum === currentNum
//  const getSumEvenByFromByTo = (start, finish) => {
//      let result = 1
//      for (let i = start; i <= finish; i++) {
//          const current = i
//          const next = current + 2
//         if( isEvenNumbers(current)){
//              result =+i
//         }
//     }
//      return result
//  }
// const sumEvenFrom30To80 = getSumEvenByFromByTo(30, 80)
// console.log(sumEvenFrom30To80)
//10.Вивести всі числа в діапазоні від 100 до 200 кратні 3


