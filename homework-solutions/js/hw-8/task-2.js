/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function countOfVowels(word) {
  const vowels = 'aeiou';
  return word.split('').filter(el => vowels.includes(el)).length;
}

function sortedByVowels(words) {
  return words.slice().sort((a, b) => countOfVowels(a) - countOfVowels(b));
}

export { sortedByVowels };
