// var a =5, b=-3, c=-6
// console.log(c!=a)
// console.log('0'=='zero')
// console.log('0==0')

// //strict equality - value + data type
// console.log('00===0')
// console.log('0==0')

// logical operators

// true  - success - pass -active 
//true - 1 - value 

// false - fail - inactive
//false - 0 -  empty

// logical AND - && (Find First False)
// a   b   r
// f1  f2  f1
//  f  t   f
//  t  f   f
//  t1 t2  t2
 
// console.log(3 && 4)// 4
// console.log( 30 && 0 )// 0
// console.log(0 && '')// 0
// console.log('0' && '0.0' && false && 0.0) // false
//           // t      t         f       f 
// console.log('true' && 'false' && true && 1 && 0.1)// 0.1
//         //   t          t         t      t    t
// console.log('0' && 'zero' &&  1 && '0' && 0.0)//0.0
//         //   t      t         t     t      f

// logical OR - || (Find First true)
// a   b   r
// f1  f2  f2
//  f  t   t
//  t  f   f
//  t1 t2  t1

// console.log('90' ||  "0" || '' || 0)//90
//           t       t      f     f 
// console.log('' || " " || 'false' || 0.0)//empty
//           f     t       t         f
// console.log('' ||  "" || ' ' || '  ')//whitespace
        
// console.log('01' &&  '' || 0.0 && ('') && {} || '0.0' && '0' || []) 
//           t       f      f      t       t     t        t     t
//         ( '' ||  0.0 ||  '0' || [])       
//         ( f       f       t     t    
// console.log('hey' && 'false' || false && 00 || '0.0' && 'zero' || 1) 
//           t        t           f       f      t        t       t

// // logical NOT -!
// console.log(!'false')//f
// console.log(!0.0)//t
// console.log(![0])//f      

//increament -post, pre
//PRe Increment

// var a =5
// a= a+1
// a+1=1
//++a
// console.log(++a +a + ++a)
// //          5  + 5 + 6         
// console.log(a + ++a + ++a) // 4 + 5 + 6
// console.log(a)//6

// console.log(++a)
// console.log(a)
// console.log(++a +a + ++a)
// console.log(a + ++a + ++a)
// console.log(a)

// console.log(--a)//4 
// console.log(a)//4
// console.log(--a +a + --a)//3+3+2
// console.log(a + --a + --a)//2+1+0
// console.log(a)//0

// var a = 10
// console.log(--a)
// console.log(a)
// console.log(++a)
// console.log(--a - --a +  --a +a + ++a + --a )
// console.log(a - ++a - --a + --a + a)
// console.log(a)
 
// //post increment
// var a = 10
// console.log(a++)//10
// console.log(a)//11
// console.log(a++ +a + a++ )//35
// console.log(a + a++ + a++)//40
// console.log(a)//15

// var a=12
// console.log(a--)//12
// console.log(a)//11
// console.log(a +a-- + a--)//11 + 11 + 10 = 32
// console.log(a-- + a + a-- )//9 + 8 + 8 = 25
// console.log(a-- - a)//7 - 6 = 1
// console.log(a)//6


// var a=13, b=15
// console.log(a--)//13
// console.log(b--)//15
// console.log(a +b-- + a-- -b--)//12 + 14 + 12 -13 = 25
// console.log(a-- + b + +b-- + a-- )//11 + 12 +12 +10= 45
// console.log(a-- - b)//9 - 11= -2
// console.log(a,b)//8,11

var a=20, b=22
console.log(a,b)//20,22
console.log(++a,++b,a++,b++)//21,23,21(22),23(24)
console.log(++a +b-- + ++a -b++)//24 +25(24) +25 -24 =48
console.log(a-- + b + ++a +b-- + a-- )//25(24) + 25 + 25 + 25(24) + 24(23)= 120
console.log(a-- - b+ a++ -b--)//22(21) -24+21-21(20)
console.log(a,b)//


console.log(true < true)