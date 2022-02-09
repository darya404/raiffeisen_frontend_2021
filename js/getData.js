// Напишите `GET` запрос получения данных с сервера `/data`
// Выведите массив с данными в консоль
// Добавьте функции параметр callback
// После получения данных, если callback был передан вызовите его с полученными данными

export const getData = async (callback) => {
   await fetch(new URL('data', window.location.href)) //window.location.href = http://localhost:3000, =>new URL = http://localhost:3000/data
    .then((response) =>{
        //console.log(response.json);
       return response.json();      
    })
    .then((data) => {
        console.log(data);
        if (typeof callback === 'function') {
            callback(data);
        }
    })
    .catch(console.error);
};