/* Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
Затипизировать надо саму функцию и коллбэк.
Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
где каждый каждый элемент - это элемент исходного массива умноженный на его индекс

Пример:
map([1,2,3,4,5], callback) => [0,2,6,12,20] */

function map<T>(array: T[], callback: (element: T, index: number) => number): number[] {
    const result: number[] = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i));
    }

    return result;
}

const callback = (element: number, index: number): number => {
    return element * index;
};

console.log(map([1,2,3,4,5], callback));