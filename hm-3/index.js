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