// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// let index = 0;
// let result = array.reduce(function(sum, elem) {
//  if (elem >= 0) {
//   return sum + elem;
//  } else {
//   return sum;
//  }
// });
// console.log(result);
//     Знайти мінімальний елемент масиву та його порядковий номер.
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// let minValue = array[0];
// let minIndex = 0;
// for (let i = 0;i<array.length; i++){
//     if (array[i]<minValue){
//         minValue = array[i]
//         minIndex = -63;
//     }
// }
// console.log(`minValue: ` + minValue)
// console.log(`minIndex: ` + minIndex)
// Знайти максимальний елемент масиву та його порядковий номер.
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// let maxValue = array[0];
// let maxIndex = 0;
// for (let i = 0;i<array.length; i++){
//     if (array[i]>maxValue){
//         maxValue = array[i]
//         maxIndex = 72;
//     }
// }
// console.log(`minValue: ` + maxValue)
// console.log(`minIndex: ` + maxIndex)
//     Визначити кількість негативних елементів
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let negative = arr.filter(elem =>(elem>0))
// console.log(negative.length)
//     Знайти кількість непарних позитивних елементів.
//  const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//  console.log( array.filter(elem => elem % 2 > 0).length );
//     Знайти кількість парних позитивних елементів.
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// console.log( array.filter(elem => elem % 2 < 0).length );
//     Знайти суму парних позитивних елементів.
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// function getEven(num) {
//     return num.filter(function(e) {
//         return !(e & 1);
//     });
// }
// function arraySum(arr) {
//     return getEven(arr).reduce(function(a, b){
//         return a + b;
//     });
// }
// console.log(arraySum(array))
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// let result = array.reduce(function(sum, elem) {
//     if (elem > 0) {
//         return sum + elem;
//     } else {
//         return sum;
//     }
// });
//
// console.log(result);
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// let result = array.reduce(function(sum, elem) {
//     if (elem >= 0) {
//         return sum + elem;
//     } else {
//         return sum;
//     }
// });
//
// console.log(result);
//     Знайти суму непарних позитивних елементів.
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// let result = array.reduce(function(sum, elem) {
//     if (elem <= 0) {
//         return sum + elem;
//     } else {
//         return sum;
//     }
// });
//
// console.log(result);
//     Знайти добуток позитивних елементів.
// const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let sum = 1;
// for (i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         sum = sum * arr[i];
//     }
// }
// document.write(sum);
//     Знайти найбільший серед елементів масиву, остальні обнулити.
// const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//
// const max = Math.max(...arr);
// const result = arr.map(v => v === max ? v : 0);
//
// console.log(result);