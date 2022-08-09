// 1  10
// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1
// for (let i=1;i<=10;i++){
//     console.log(i,11-i)
// }
// console.log(i)
// for (i=0;i<=50;i++){
//     console.log(i,11-i)
// }

// for (let i=1,j=10; i<=10,j>=1;i++,j--){
//    console.log(i,j)
// }

// 1
// 12
// 123 
// 1234
// 12345
// 123456
// 1234567
// 12345678

// *
// var a = ''
// for(var i=1;i<=8;i++){
// a  = a + i
// console.log(a)
// }
// // *

// let a=''
// count=0
// for (let i=1;i<=8;i++){
//     a = a + i // ''+1
//     console.log(a)
    // count++
// }
// console.log(count)

// Iteration 1: i=1; 1<=8; ''+1; 1
// Iteration 2: i=2; 2<=8; '1'+2 ; '12'
// ...


// a = ''
// a = a+1 // ''+1 = '1'
// a=a+2 // '1' +2 = '12'
// console.log(a)

// 1
// 11
// 111
// 1111
// 11111


// a=''
// for (let i=1;i<=5;i++){
//     a = a + 1
//     console.log(a)
// }


// * * * * *
// * * * *
// * * * 
// * *
// *


// a='';
// for (let i=1;i<=5;i++){         i =1,j=5->1
//     for (let j=5;j>=i;j--){     i = 2,j=5->2,  i =3,j=5->3,
//         a = a+'* ';
//      }
//     console.log(a)
//      a ='';
// }


//         *
//       * *
//     * * *
//   * * * *
// * * * * *
// a=''
// for (let i=1;i<=5;i++){

//     for (let j=1;j<=5-i;j++){ //spaces
//         a += '  '
//     }

//     for (let j=1;j<=i;j++){ //stars
//         a += '* '
//     }

//     console.log(a);
//     a = '';       
// }

// 








// star = ''
// for (var i=1; i<=5;i++){
//     space = ''
    
//     for (var j=1; j<=5-i; j++){
//         space+='  ' 
//     }
//     star += '* '
    
//     console.log(space,star)
// }



//     *
//    **
//   ***
//  ****
// *****

//  a = ''
// for (var i=1; i<=5;i++){
           
//     for (var j=1; j<=5-i; j++){
//         a += ' '
//     }
//     for (let t =1; t<=i;t++ ){
//     a += '*'

//     }


//     console.log(a)
//     a=''
// }



//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 

// star = ''
// for (var i=1; i<=5;i++){
//     space = ''
    
//     for (var j=1; j<=5-i; j++){
//         space+=' ' 
//     }
//     star += '* '
    
//     console.log(space,star)
// }

// a='';
// let spaces = 4;
// for(let i=1; i<=spaces+1; i++){
//     for(let j=spaces; j>=i; j--){
//        a= a+' ';
//     }
//     for(let k=1;k<=i;k++){
//         a = a + "*"
//     }
//     console.log(a);
//     a='';
// }



// a=''
// for (let i=1;i<=10;i++){
//     for (let j=4;j>=i;j--){
//         a = a + " "
//     }
//     for (let k=1;k<=i;k++){
//         a = a+'*'
//     }
//     console.log(a)
//     a=''
// }


// a='';
// let spaces = 4;
// for(let i=1; i<=spaces+1; i++){
//     for(let j=spaces; j>=i; j--){
//        a= a+' ';
//     }
//     for(let k=1;k<=i;k++){
//         a = a + "*"
//     }
//     console.log(a);
//     a='';
// }

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15

// 1
// 22
// 333
// 4444
// 55555
// a = ''
// for (let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++)
//     a += i
//     console.log(a)
//     a = ''
// }


// 1 
// 2 3 
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// a = ''; let count = 1
// for (let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){ // help to print character
//     a += count +' '
//     count++
//     }
//     console.log(a)

//     a = ''
// }

// *****
// ****
// ***
// **
// *
// let  a= ''
// for (i =1;i<=5;i++){
//     for(j=5;j>=i;j--)
//     a +=  '*'
//     console.log(a)
//     a = ''
// }

// 11111
// 1111
// 111
// 11
// 1
// let  a= ''
// for (i =1;i<=5;i++){
//     for(j=5;j>=i;j--)
//     a +=  '1'
//     console.log(a)
//     a = ''
// }
// 54321
// 5432
// 543
// 54
// 5
// let  a= ''
// for (i =1;i<=5;i++){
//     for(j=5;j>=i;j--)
//     a += j
//     console.log(a)
//     a = ''
// }

// 1234
// 123
// 12
// 1
// let a =''
// for (i =4;i>=1;i--){
//     for(j=1;j<=i;j++)
//     a += j
//     console.log(a)
//     a = ''
// }

// 1111
// 222
// 33
// 4
// let a =''
// for (i =1;i<=4;i++){
//     for(j=4;j>=i;j--)
//     a += i
//     console.log(a)
//     a = ''
// } 
  
//     *
//    ***  
//   *****
// let c= 1
// let a =''
// for (i =1;i<=4;i++){
//     for(j=4-1;j>=i;j--){
//         a += ' '        
//     }
// for (let p=1;p<=c;p++){
//         a += '*'
// }

// for(t=4-1;t>=i;t--){
//     a += ' '
// }
//      console.log(a)
//     a = ''
//     c=c+2
// }

// *******
// X*****Y
// XX***YY
// XXX*YYY

// let c = 7
// let a =''
// for (i =1;i<=4;i++){
//     for(j=2;j<=i;j++){
//         a += 'X'        
//     }
// for (let p=1;p<=c;p++){
//         a += '*'
// }

// for(t=2;t<=i;t++){
//     a += 'Y'
// }
//      console.log(a)
//     a = ''
//     c=c-2
// }

//    A   
//   ABC  
//   ABCDE
//  ABCDEFG
let c= 1
let code = 65
let a =''
for (i =1;i<=4;i++){         //line     
    for(j=4-1;j>=i;j--){     // left space
        a += ' '        
    }
for (let p=1;p<=c;p++){      //  triange
        a +=String.fromCharCode(code)
        code++
}

for(t=4-1;t>=i;t--){        // right space
    a += ' '
}
     console.log(a)
    a = ''
    code = 65            //  reseting after every line
    c=c+2                // c is use to increament stars
}