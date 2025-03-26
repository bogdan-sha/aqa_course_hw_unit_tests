/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
console.log(mergeArrays([1,2], [3,4], [5,6]));

function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
let sentence = 'I am super engineer';
console.log(devideBy(sentence));

function devideBy(sentence) {
  let array = sentence.split(' ').filter(el => el !== '');
  let result = '';

  for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        result += array[i].toLowerCase();
      } else {
        result += array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
      }

      if (i < array.length - 1) {
        result += '_';
      }
  }

  return result;
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;
  
  for (let i = 2; i <= n; i++) {
    let result = a + b;
    a = b;
    b = result;
  }

  return b;
}

console.log(fibonacci(8));

export { mergeArrays, fibonacci, devideBy };
