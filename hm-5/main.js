//1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.
/*let min_number = Number(process.argv[2]);
let max_number = Number(process.argv[3]);
let sum = 0;
for(let i = min_number; i <= max_number; i++)
{ 
    sum += i;
}
console.log(sum);*/

//2.Запросить 2 числа и найти только наибольший общий делитель.
/*let first_number = Number(process.argv[2]);
let second_number = Number(process.argv[3]);
while(first_number != second_number)
{
    if(first_number > second_number)
    {
        first_number = first_number - second_number;
    }
    else
    {
        second_number = second_number - first_number;
    }
}
console.log(first_number);*/

//3.Запросить у пользователя число и вывести все делители этого числа.
/*let number = Number(process.argv[2]);
for(let i = 1; i <= number; i++)
{
    if(number % i === 0)
    {
        console.log(i);
    }
}*/