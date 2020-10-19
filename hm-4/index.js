//Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.
/*let num = +process.argv[2];
if(num > 0)
{
    console.log('Положительное');
}
else
{
    if(num === 0)
    {
        console.log('Равно нулю');
    }
    else 
    {
        console.log('Отрицательное');
    }
}*/

//Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
/*let age = +process.argv[2];
if(age >= 0 && age <= 120)
{
    console.log('Данные введены корректно');
}
else 
{
    console.log('Попробуйте еще раз');
}*/

//Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).
/*let num = +process.argv[2];
console.log(`|${num}| = `,Math.abs(num));*/

//Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.

/*let hours = +process.argv[2];
let min = +process.argv[3];
let sec = +process.argv[4];
if(hours >=0 && hours <= 24)
{
    console.log('Часы введены верно');
}
else 
{
    console.log('Попробуйте еще раз');
}
if(min >=0 && min <= 60)
{
    console.log('Минуты введены верно');
}
else 
{
    console.log('Попробуйте еще раз');
}
if(sec >=0 && sec <= 60)
{
    console.log('Минуты введены верно');
}
else 
{
    console.log('Попробуйте еще раз');
}*/


//Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.

/*let x = +process.argv[2];
let y = +process.argv[3];
if(x === 0 && y === 0)
{
    console.log('начало координат');
}
else
{
    if(x > 0 && y > 0)
    {
        console.log('Первая четверть');
    }
    else 
    {
        if(x < 0 && y > 0)
        {
            console.log('Вторая четверть');
        }
        else
        {
            if(x < 0 && y < 0)
            {
                console.log('Третья четверть');
            }
            else
            {
                if(x > 0 && y < 0)
                {
                    console.log('Четвертая четверть');
                }
                else 
                {
                    console.log('На координатной оси');
                }
            }
        }
    }
}*/

//Запросить у пользователя номер месяца и вывести на экран его название. 

/*let month = +process.argv[2];
switch(month)
{
    case 1:
        console.log('Январь');
        break;
    case 2:
        console.log('Февраль');
        break;
    case 3:
        console.log('Март');
        break;
    case 4:
        console.log('Апрель');
        break;
    case 5:
        console.log('Май');
        break;
    case 6:
        console.log('Июнь');
        break;
    case 7:
        console.log('Июль');
        break;
    case 8:
        console.log('Август');
        break;
    case 9:
        console.log('Сентябрь');
        break;
    case 10:
        console.log('Октябрь');
        break;
    case 11:
        console.log('Ноябрь');
        break;
    case 12:
        console.log('Декабрь');
        break;
    default:
        console.log('Поробуйте еще раз');
        break;
}*/

//Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.

/*let first_number = +(process.argv[2]);
let second_number = +(process.argv[3]);
let operator = process.argv[4];

if(isNaN(first_number) || isNaN(second_number)) {
    console.log('Введены некорректные числа');
} else if (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/'
) {
    console.log('Введен некорректный оператор');
} else {
    let result;

    switch(operator) {
        case '+':
            result = first_number + second_number;
            break;
        case '-':
            result = first_number - second_number;
            break;
        case '*':
            result = first_number * second_number;
            break;
        case '/':
            if(second_number === 0)
            console.log('Нельзя делить на 0');
            result = first_number / second_number;
            break;
    }
    alert(${first_number} ${operator} ${second_number} = ${result});
}*/
