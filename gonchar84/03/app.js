// 1 задание
// написать функцию калькулятор, которая
// запрашивает у пользователя данные в таком
// порядке: число - действие - число - и в
// зависимости от действия - производит
// соответствующее вычисление

let number1 = Number(prompt("Введите число:"));
console.log(number1);

let action = (prompt("Введите действие: '+', '-', '*', '/' "));
console.log(action);

let number2 = Number(prompt("Введите число:"));
console.log(number2);

if (action == '+') {
    console.log(number1 + number2);
} else if (action == '-') {
    console.log(number1 - number2);
} else if (action == '*') {
    console.log(number1 * number2);
} else if (action == '/') {
    console.log(number1 / number2);
} else {
    console.log('Ошибка. Введите другие числа или дествие')
}

// 2  задание
// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.

let obj = {
    Петя: 1000,
    Миша: 800,
    Коля: 1200
};
alert(obj["Миша"]);
alert(obj["Коля"]);

// 3 задание 
// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные
// скобки и как свойство объекта 

let obj1 = { a: 1, b: 2, c: 3 };
alert(obj1['c']);
alert(obj1.c);


// 4 задание
// Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.


let object = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс" };
alert(object[1]);
let day = 3;
alert(object[day]);