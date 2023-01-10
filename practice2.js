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
    // Знайти мінімальний елемент масиву та його порядковий номер.
// let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// const min = Math.min(...array)
// const position= array.indexOf(min) + 1
// console.log(min, position)
// Знайти максимальний елемент масиву та його порядковий номер.
// let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// const max = Math.max(...array)
// const position = array.indexOf(max) + 1
// console.log(max, position)
//     Визначити кількість негативних елементів
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let negative = arr.filter(elem =>(elem<0))
// console.log(negative.length)
//     Знайти кількість непарних позитивних елементів.
//  const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//  console.log( array.filter(elem => elem % 2 > 0).length );
    // Знайти кількість парних позитивних елементів.
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//  console.log( array.filter(elem => elem % 2 === 0 && elem >= 0).length );
//     Знайти суму парних позитивних елементів.
// function EvenOddSum(arr, n)
// {
//  let even = 0;
//  let odd = 0;
//  for (let i = 0; i < n; i++)
//  {
//
//   if (i % 2 === 0)
//    even += arr[i];
//   else
//    odd += arr[i];
//  }
//
//  document.write("Even index positions sum " + even);
//  document.write("<br>" + "Odd index positions sum " + odd);
// }
//
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// let n = array.length;
//
// EvenOddSum(array, n);
// const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// const sumEvens = (array) => {
//  let sum = 0;
//  for (let i = 0; i < array.length; i++) {
//   if (i % 2 === 0){
//    sum = sum +array[i];
//   }
//  }
//  return sum;
// }
//
// console.log(sumEvens(array));
//     Знайти суму непарних позитивних елементів.
// function EvenOddSum(arr, n)
// {
//  let even = 0;
//  let odd = 0;
//  for (let i = 0; i < n; i++)
//  {
//
//
//   if (i % 2 === 0)
//    even += arr[i];
//   else
//    odd += arr[i];
//  }
//
//  document.write("Even index positions sum " + even);
//  document.write("<br>" + "Odd index positions sum " + odd);
// }
//
//
// const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let n = arr.length;
//
// EvenOddSum(arr, n);
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