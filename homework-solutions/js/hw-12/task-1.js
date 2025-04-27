/* 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать 
спустя 2 секунды после вызова delayTwoSeconds */
function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
}

delayTwoSeconds(() => {
    console.log("Timeout with 2 seconds finished");
  });

/* 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1.
Обработайте промис методом .then и выведите результат его резолва в консоль */
const truePromise = new Promise((resolve, reject) => {
    resolve(1);
});

truePromise.then((result) => {
    console.log(result);
});

/* 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
Обработайте промис методом .catch и выведите результат его реджекта в консоль */
const failPromise =  new Promise((resolve, reject) => {
    reject("Promise failed");
});

failPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
    console.error(error);
});

/* 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число. */
function promiseNumber(number) {
    const p = new Promise((resolve, reject) => {
        resolve(number);
    });
    return p;
}

/* 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
в консоль результаты работы каждого промиса через .then */
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then((values) => {
        values.forEach((value, index) => {
            console.log(`Result of ${index + 1} promise is:`, value);
        });
    });

/* 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты 
и последовательно выведите в консоль статус и результат каждого промиса через .then */
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log(`Fulfilled result: ${result.value}`);
        } else {
            console.log(`Rejected result: ${result.reason}`);
        }
    })
})

//7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function promiseAll(num1, num2, num3) {
    try {
        const p = await Promise.all([promiseNumber(num1), promiseNumber(num2), promiseNumber(num3)]);
        p.forEach((value, index) => {
            console.log(`Async result of ${index + 1} promise is:`, value);
        }); 
    }
    catch (error){
        console.error('Rejected result:', error);
    }
}

async function promiseAllSettled(num1, num2, num3) {
    try {
        const p = await Promise.allSettled([promiseNumber(num1), promiseNumber(num2), promiseNumber(num3)]);
        p.forEach((result, index) => {
            console.log(`Fulfilled result: ${result.value}`);
        });
    }
    catch (error){
        console.error(`Error result: ${error}`);
    }
}

promiseAll(4,5,6);
promiseAllSettled(7,8,9);