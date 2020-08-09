function userCard(number) {
    let balance = 200;
    let transactionLimit = 150;
    let historyLogs = [];
    let key = number <= 3
        ? number
        : 'Key not valid'

    function getCardOptions() {
        return {
            key,
            balance,
            transactionLimit,
            historyLogs
        }
    }

    function addHistory(operationType, credits, operationTime) {
        historyLogs.push({operationType, credits, operationTime})

    }

    function putCredits(credit) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (credit > 0) {
            balance += credit
            addHistory('putCredits', credit, data + '' + time)
        } return true
    }

    function takeCredits(credit) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (credit <= transactionLimit && credit <= balance) {
            balance -= credit;
            addHistory('takeCredits', credit, data + '' + time)
        } else {
            console.log('error in take credit');
        }

    }

    function setTransactionLimit(number) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (number > 0) {
            transactionLimit = number
            addHistory('setTransactionLimit', number, data + '' + time)
        }
    }

    function transferCredits(sum, card) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        let credit = (sum * 1.005).toFixed(2);

        if (credit <= transactionLimit && credit <= balance) {
            balance -= credit
            card.putCredits(sum)
            addHistory('transferCredits', credit, data + '' + time)
        } else {
            console.log('no money')
        }
    }
function getKey() {
        return key

}
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits,
        getKey
    }

}
const  userCard1 = new userCard(1)
const  userCard2 = new userCard(2)


//userCard1.setTransactionLimit(200)
//userCard1.putCredits(120 )
//userCard1.takeCredits(100)
//userCard1.transferCredits(80,userCard2)
console.log(userCard1.getCardOptions());
console.log(userCard2.getCardOptions());

class UserAccount {
    constructor(name) {
        this.name=name
        this.cards=[]
}
    
}
UserAccount.prototype.addCard=function () {
    if (this.cards.length<3){
        this.cards.push(new  userCard(this.cards.length+1))
    } else {
        consol.log('card limint empty')
    }

}
UserAccount.prototype.getCardByKey= function (number) {
  //  return this.cards.find(value =>value.getKey()===number )
    return this.cards.find(value =>value.getCardOptions().key===number )

}
user1= new UserAccount('Vova')
user2= new UserAccount('Petya')
user2.addCard()
user2.addCard()
user1.addCard()
user1.addCard()
user1.addCard()



const  user1card1 = user1.getCardByKey(2)
const  user2card2 = user2.getCardByKey(2)

user1card1.putCredits(2000)
user1card1.setTransactionLimit(2000)
user1card1.transferCredits(500,user2card2)
console.log('----------------------------------');
console.log(user1card1.getCardOptions());
console.log('----------------------------------');
console.log(user2card2.getCardOptions());




// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
// об’єкт з методами:
//     const card3 = userCard(3); // returns an object with methods
// User Card методи:
//     getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про
// карту:
//     card3.getCardOptions(); // returns options object with card info
// Об’єкт має містити такі властивості:
//     • balance (по замовчуванням 100)
// • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
// карти)
// • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
// данної карти)
// • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
// функції. Кожна карта повинна мати унікальний key)
// putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
// карти:
//     card3.putCredits(150);
// takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з
// баланса карти (протилежний за дією від метода putCredits):
// card3.takeCredits(100);
// Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів
// перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати
// відповідне повідомлення у консолі (скористайтеся console.error)
// setTransactionLimit.Ця функція приймає як аргумент число і встановлює його
// як ліміт транзакцій на картці
// card3.setTransactionLimit(5000);
// transferCredits.
//     Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
//     та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
// card3.transferCredits(50, card1);
// Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
// Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
// транзакцій відправника кредитів (card3).
//     Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit
// change операції і зберігайте history log. History log (Дивитись зображення 1)
// інформація має зберігатись в об’єктах з такими властивостями:
//     • operationType (стрічка яка описує здійснену операцію)
// • credits (кількість коштів)
// • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
// Зображення 1 — Приклад виклику функції
// getCardOptions
// 2) Створити UserAccount:
//     Створити класс `UserAccount` (для цього завдання можна використати ES6 класс
// або звичайну функцію):
// const user = new UserAccount('Bob');
// Класс має містити:
//     Властивості акаунту користувача:
//     - name (передати в конструкторі)
// - cards (Масив карток користувача. Масив не має бути довшим ніж 3)
// Методи акаунту користувача:
//     - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до
// cards:
//     user.addCard();
// Користувач повинен мати <= 3 карти.
// - getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти
// /*
//  * Повертає об’єкт {
//  * key: 1,
//  * balance: 150,
//  * ...other card properties
//  * }
//  */
// user.getCardByKey(1);
// Код
// Приклад переказу коштів:
//     let user = new UserAccount('Bob');
// user.addCard()
// user.addCard()
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
// card2.takeCredits(50);
// console.log(card1.getCardOptions()); // див зображення 2
// Зображення 2 - Об’єкт властивостей card1
// console.log(card2.getCardOptions()); // див зображення 3
// Зображення 3 - Об’єкт властивостей card2
// Посилання
// - https://css-tricks.com/javascript-scope-closures/
// - https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Classes