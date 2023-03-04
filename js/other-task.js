// ------------------------------------------------------------
// Задание:
// Исправьте ошибки в коде.

// const user = {
//     name: "admin",
//     email: "admin@example.com",
// };

// console.log(user.name);
// console.log(user.email);

// user.email = "admin@itvdn.com";

// console.log(user.email);


// -------------------------------------------------------------------
//  Задание:
// Создайте два объекта, используя конструктор и литерал.Оба объекта должны содержать
// свойства firstName и lastName
// с произвольными значениями.Создайте функцию print, которая будет принимать в
// качестве параметра объект и выводить свойства
// lastName и firstName полученного объекта на экран.

const user1 = {
    firstName: 'Ihor',
    lastName: 'Kaniuk',
};

const user2 = {
    firstName: 'Kateryna',
    lastName: 'Sosna',
}

function print(object) {
    console.log(`${object.firstName} ${object.lastName}`);
}

print(user1);
print(user2);