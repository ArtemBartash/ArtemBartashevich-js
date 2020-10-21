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

//4.Определить количество цифр в введенном числе. 
/*let number = Number(process.argv[2]);
let quantity = 0;
while(number > 1)
{
    number /= 10;
    quantity++;
}
console.log(quantity);*/

//7.Запросить у пользователя число и на сколько цифр его сдвинуть.Запросить у пользователя число и на сколько цифр его сдвинуть.
/*let number = Number(process.argv[2]);
let sdvig = Number(process.argv[3]);
let quantity = number;
let k = 0;
let separated;
    while(quantity > 1)
    {
        quantity /= 10;
        k++;
    }
for(let i = 0; i < sdvig; i++)
{
    separated %= Math.pow(10,(k - 1));
    
}
console.log(k);
console.log(separated);*/
