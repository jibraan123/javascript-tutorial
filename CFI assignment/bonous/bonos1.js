// // write a program to decide which number is greater for 3?


var a=2,b=3,c=5

if ((a==b) && (b==c) && (c==a))
{
    console.log(`${a} all are equal`)
}
else if ((a==b))
{
    console.log(`${a} and ${b} are equal`)
}
else if ((b==c))
{
    console.log(`${b} and ${c} are equal`)
}
else if ((a==c))
{
    console.log(`${a} and ${c} are equal`)
}
else if ((a>b) && (a>c))
{
    console.log(`${a} is greater`)
}
else if ((b>c) && (b>a))
{
    console.log(`${b} is greater`)
}
else if ((c>a) && (c>b))
{
    console.log(`${c} is greater`)
}
// --------------------------------------------------------------------------------------------------
// to print multiple table
var start=10,end=20
for (i=start; i<=end;i++){
    console.log(`-------- ${i} Table ------`)
    for (j=1;j<=10;j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}