// to print multiple table
// var start=10,end=20
// for (i=start; i<=end;i++){
//     console.log(`-------- ${i} Table ------`)
//     for (j=1;j<=10;j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }

num = 2
let factorfound =false;
if(num<=0){
    console.log(`${num} is not a prime number`)
} 
else if (num == 1){
   console.log(`${num} is neither prime nor composite`)
}
else {
    for (i=2;i<num;i++){
        if (num % i===0){
            console.log(`${num} is not a prime`)
            factorfound = true;
            break;
        }
    }
}
if(factorfound == false){
    console.log(`${num} is a prime number`)
}
