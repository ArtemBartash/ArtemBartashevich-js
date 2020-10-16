//1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let min_number = Number(process.argv[2]);
let max_number = number(process.argv[3]);
let sum = 0;
for(let i = min_number; i <= max_number; i++)
{ 
    sum += i;
    console.log(sum);
}
