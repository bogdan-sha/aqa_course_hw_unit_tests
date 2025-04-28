/* 
   Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена 
*/

async function createTodo(task) {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const response = await fetch(url, {
            method: 'post',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(task),
        });

        if (response.status !== 201) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        for (let key in task) {
            if (key !== "id" && task[key] !== data[key]) {
                throw new Error(`Data not correspond for: ${key}`);
            }
        }

        return data;
    }
    catch (error){
        console.error('Error:', error);
    } finally {
        console.log('Function finished');
    }
};

createTodo({
    userId: 1,
    id: 1, 
    title: 'delectus aut autem',
    completed: false
});