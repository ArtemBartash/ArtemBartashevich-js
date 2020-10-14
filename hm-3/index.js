//Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
/*let num = +process.argv[2];
console.log(num**2);*/

//Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
/*let num1 = +process.argv[2];
let num2 = +process.argv[3];
let arif = (num1 + num2) / 2;
console.log(arif)*/

//Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

/*let side = +process.argv[2];
let square = side**2;
console.log(square);*/

//Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.
/*const km_in_miles = 0.621371;
let kilom = +process.argv[2];
let result = kilom * km_in_miles;
console.log(result)*/

//Калькулятор
/*let num1 = +process.argv[2]
let num2 = +process.argv[3]
let sum = number1 + number2
let min = number1 - number2
let op = number1 * number2
const deg = number1 / number2
console.log(`$sum ${sum} ${min} ${op} ${deg}`)*/

//Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).
/*let trex = prompt('Введите число', '0');
let sec = Math.floor((trex / 10) % 10);
alert(sec);*/


//Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.
/*let a = prompt('Введите число', '0');
let b = prompt('Введите число', '0');
let x = (-b / a);
alert(x);*/ 


//Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
/*let hour = +prompt('Который час?', '0');
let minute = +prompt('Введите минуты', '0');
let time_in_min = ((hour * 60) + minute);
let time_left = (1440 - time_in_min);
let hour_left = (time_left / 60);
let minute_left = (time_left % 60);
alert(hour_left, minute_left);*/

//арплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.
/*const salary = 250;
let sales = +process.argv[2];
let sum = sales * 0.1;
console.log(sum + salary);*/

/*let year = process.argv[2];
switch(year % 4)
{
    case 0:
        console.log("Высокосный");
        break;
    default:
        console.log("Попробуй еще раз");
        break;
}*/