// ---------------------Методы обЪектов----------------------------------

/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
  
//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },

//   updateReting(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },

// }

// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks);
// console.log(playlist.getTrackCount());


// playlist.changeName('Super playlist');
// playlist.addTrack('трек-4');
// playlist.updateReting(6);

// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks);
// console.log(playlist.getTrackCount());


// -------------------------------------------------------------------
/*
* Работа с коллекцией (массивом объектов)
*/
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// console.log(friends);

// /*
//  * Ищем друга по имени
// */

// function findFriend(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return 'Нашел!';
//     }
//   }

//   return 'Не нашел!';
// }

// console.log(findFriend(friends, 'Mango'));

// /*
//  * Получаем имена всех друзей
// */

// function getAllFriendsName(allFriends) {
//   const allFriendsName = []
  
//   for (const friend of allFriends) {
//     allFriendsName.push(friend.name);
//   }
  
//   return allFriendsName;
// }

// console.log(getAllFriendsName(friends));

// /*
//  * Получаем имена только друзей которые онлайн
// */

// function getOnlineFriends(allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

// /*
//  * Получаем имена только друзей которые офлайн
// */

// function getOfflineFriends(allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }

//   return offlineFriends;
// }

// console.log(getOfflineFriends(friends));

// // создать 2 массива онлайн и офлайн?
// // если тру - в первый, если нет - во второй

// function getFriendsByStatus(allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   }

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//     } else {
//       friendsByStatus.offline.push(friend);
//     }
//   }

//   return friendsByStatus;
  
// }

// console.log(getFriendsByStatus(friends));





// // ------------------------------------------------
// // Example 1 - Основы обьектов
// // Напиши скрипт, который, для объекта user, последовательно:

// // добавляет поле mood со значением 'happy'
// // заменяет значение hobby на 'skydiving'
// // заменяет значение premium на false
// // выводит содержимое объекта user в формате ключ:значение
// // используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`)
// }


// // ------------------------------------------------------
// // Example 2 - метод Object.values()
// // У нас есть объект, в котором хранятся зарплаты нашей команды.
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// // Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// let totalSalary = 0;

// for (const value of values) {
//   totalSalary += value;
// }

// console.log(totalSalary)


// // -------------------------------------------------------------
// // Example 3 - Массив объектов
// // Напишите ф - цию calcTotalPrice(stones, stoneName), которая принимает массив
// // обьектов и строку с названием камня.Ф - ция считает и возвращает общую стоимость
// // камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     // console.log(stone);
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'Щебень'))


// ----------------------------------------------------------------------------
// // Example 4 - Комплексные задачи
// // Напиши скрипт управления личным кабинетом интернет банка.
// // Есть объект account в котором необходимо реализовать методы для работы с балансом и
// // историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//   */
//   createTransaction(amount, type) {
//     const transactions = {
//       id: this.transactions.length,
//       type,
//       amount,
//     };

//     return transactions;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('снятие такой суммы не возможно, недостаточно средств');
//       return;
//     }

//     this.balance -= amount;
//     this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }

//     // return this.transactions.find((transaction) => transaction.id === id);
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//      let sum = 0;

//       for (const transaction of this.transactions) {
//         if (transaction.type === type) {
//           sum += transaction.amount;
//         }
//       }

//     return sum;
//   },
// };


// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// // console.log(account);

// account.withdraw(1000);
// account.withdraw(500);

// console.log(account);

// account.withdraw(1000);

// console.log(account);

// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));