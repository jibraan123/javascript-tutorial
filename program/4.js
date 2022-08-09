//comparision of var , let , const
// Hoisting 


var a = 3

a = 3;
console.log(typeof a)


let a= 7; // declare
a =8;// re-define
console.log(typeof a)

//can not re-declare let twice but it can be declare twice if we declare inside the block
let a =7 ;
let a=8 ;
console.log(a)
 case :1

let a=3
console.log(a)
{
   let a = 4
   console.log(a)
} 
let b = 3
console.log(b)

 case :2

 a=3
console.log(a)
{
   let a = 4
   console.log(a)
   {
    let a=8
    console.log(a)
   }
} 
a = 5
console.log(a)

const a = 5;{
 a = 6; 
console.log(a);}
 
console.log(a);

case -2 
const a = 5;{
    let a = 6; 
   console.log(a);}
    
   console.log(a);

let a =8
{
    console.log(a)
    {
        let a =9
        console.log(a)
            }
            console.log(a)

        }
        console.log(a)

// array 
 let a = ['a','b','c','d','e','f']
 console.log(a, typeof a);

//  //indexing
 console.log(a[0])
 console.log(a[1])
 console.log(a[2])

 console.log(a.slice(1,3,5));
 console.log(a.reverse());

let a = ['a','b',['c','d'],'e','f']
console.log(a[2][1])

// push 
// Pop
// Slice 
// splice 

var abc = {
    a: [9,99,999],
    b: [1,2,3,4,5],
    c: ["abc", {a: 11, b:12}]
}

console.log(abc.c[1].a)