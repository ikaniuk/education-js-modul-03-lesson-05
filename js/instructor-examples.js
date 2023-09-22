// Модуль 3. Заняття 1. Об'єкти
// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys()
// та for...of
// const user = {
//     name: 'Jony',
//     age: 25,
//     nation: 'Ukrainian',
//     hobby: 'pool',
//     preimium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.preimium = false;

// // console.log(user);

// const userKeys = Object.keys(user);

// // console.log(userKeys);

// for (const key of userKeys) {
//     console.log(`${key}:${user[key]}`)
// }


// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const peoples = {
//   John: 100,
//   Ann: 200,
//   Pete: 300,
// };

// const calculatePeopleSalaries = function (values) {
//     let sum = 0;
//     const valuesOfSalaries = Object.values(values);
//     for (const value of valuesOfSalaries) {
//         sum += value;
//     }

//     return sum;
// }

// console.log(calculatePeopleSalaries(salaries));
// console.log(calculatePeopleSalaries(peoples));


// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName),
// яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з таким ім'ям,
// ціною та кількістю з об'єкта

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         } else {
//             return 'Такого каменю немає';
//         }
//     }
// }

// console.log(calcTotalPrice(stones, 'dfg'));
// console.log(calcTotalPrice(stones, 'Смарагд'));


// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи
// з балансом та історією транзакцій.


/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
    createTransaction(amount, type) {
        const transaction = {
            id: this.transactions.length,
            type,
            amount,
        }
        return transaction;    
    },
    

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    },
    

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('зняття такої суми не можливе, недостатньо коштів.');
            return;
        }
        this.balance -= amount;
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
    },
    
    

  /*
   * Метод повертає поточний баланс
   */
    getBalance() {
        return this.balance;
  },

  /*
   *  шукає та повертає об'єкт транзакції по id
   */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
          }
      }
    },
    

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
    getTransactionTotal(type) {
        let sum = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                sum += transaction.amount;
            }
        }
        return sum
  },
};


account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
console.log(account);

account.withdraw(2000);
account.withdraw(500);
console.log(account);

account.withdraw(1000);

console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));


