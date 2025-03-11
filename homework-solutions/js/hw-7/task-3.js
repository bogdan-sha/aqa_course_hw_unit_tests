/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  if (isNaN(number)) return false;

  let result = number;

  while (result > 9) {
      let str = result.toString();
      let array = str.split('').filter(el => el !== '');

      result = 0;
      for (let i = 0; i < array.length; i++) {
          result += +array[i]; 
      }
  } 
  return result;
}
console.log(digitalRoot(19));

export { digitalRoot };
