/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

let word = 'racecar'

function isPalindrom(word) {
  if (typeof word !== 'string') return false;

  let palindrom = word.split('').filter(el => el !== '').reverse().join('');
  if (word.toLowerCase() === palindrom.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrom(word));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') return sentence = [];

  let array = sentence.split(' ').filter(el => el !== '');
  let result = [];
  let sentenceLength = 0;
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > sentenceLength) {
      sentenceLength = array[i].length;
      result = [array[i]]; 
    }
    else if (array[i].length === sentenceLength) {
      result.push(array[i]);
    }
  }

  return result;
}

export { isPalindrom, findLongestWords };
