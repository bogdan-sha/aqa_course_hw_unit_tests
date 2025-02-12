/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let n, nn, nnn;
n = 1;
nn = Number(`${n}${n}`);
nnn = Number(`${n}${n}${n}`);

if (typeof n === "number" && n >= 1 && n <= 9) {
  console.log(n + nn + nnn);
} else {
  console.log(`"Error: program not working for n == ${n}"`);
}