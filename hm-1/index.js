let n = 26;
let sum = 0;
for(let i = 0; i <= n; i++)
{
    if((Math.sqrt(i)) % 10 == 0)
    {
        sum += i;
    }
}
console.log(sum);

/*let a = '123';

console.log(a);*/