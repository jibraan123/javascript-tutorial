1. Accept only numbers, Make a number always positive though given negative? With & without builtin function?
var a = -7;
if(a<0){
a*=(-1)  
console.log(a)
}else {
    console.log(`${a}`)


// 2. A shop will give discount of 10% only if you purchase more than 1000 rupees.
// Any item costs exactly 100 rupees. inputs = quantity of items.
// Result must be Final bill prize
let items = 11 ;
total = items*100;
if (total > 1000){
    console.log(`Your bill is : ${total*0.9}`)
}else{
    console.log(`${total}`)
}

// 3.//Check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?----------
// i) if lengths are given
let a,b,c,d;
a=15,b=15,c=35; 
if (a + b <= c || a + c <= b || b + c <= a)
   { 
     console.log("It is a triangle")
    if ((a==b)&&(b==c)){
   console.log("Equilateral triangle");
    }
       else if((a==b)||(b==c)||(c==a)){
         console.log("Isosceles") }
    else{
    console.log("scalene");
     } 
    }  
    else{
    console.log("Not a triangle");
  }
ii) taking coordinates 
  let x1=7,x2=6,x3=4;
  let y1=1,y2=5,y3=9;
   a=(((x2-x1)^2)-((y2-y1)^2))^1/2
   b=(((x3-x2)^2)-((y3-y2)^2))^1/2
   c=(((x3-x1)^2)-((y3-y1)^2))^1/2
     console.log(a,b,c);
    if (a + b <= c || a + c <= b || b + c <= a)
   { console.log("It is a Triangle")
    if ((a==b)&&(a==c))
    {
   console.log("Equilateral triangle");
        } else if((a==b)||(b==c)|| (a==c)){
    console.log("isosceles");
    }else{
    console.log("scalene");
    } 
}  
else{
    console.log("Not a triangle");
}

//Q4.Build Mini calculator having functionalities - *, /, +, - , %, squareroot, exponentiation, floor, ceil

var a =4,b = 5
sum = a+b
diff = a-b
pro = a*b
qou = a/b
mod = a%b
p = Math.sqrt(a)
r = Math.pow(a,b)
s = Math.floor(a,b)
t = Math.ceil(a,b)    
console.log (`sum of ${a} and ${b} is ${sum}`)
console.log (`diff of ${a} and ${b} is ${diff}`)
console.log (`pro of ${a} and ${b} is ${pro}`)
console.log (`qoutation of ${a} and ${b} is ${qou}`)
console.log (`modulus of ${a} and ${b} is ${mod}`)
console.log (`squareroot of ${a} is ${p}`)
console.log (`expotent of ${a} ^ ${b} is ${r}`)
console.log (`floor of ${a} of ${b} is ${s}`)
console.log (`ceil of ${a} of ${b} is ${t}`)


// 5. Roots of Quadratic Equations, Nature of the Roots
let a,b,c,root1,root2;
a= 8;
b= 6;
c= 7;
d = b*b-4*(a*c);
 root1 = (-b +(d)**1/2) /(2 * a);
 root2 = (-b -(d)**1/2) /(2 * a);
    console.log(`Root1 : ${root1} , Root2 : ${root2}`);
    console.log(`d calculated is ${d}`)
if (d > 0) {
    console.log(`${d} > 0, so Roots are real and different`);
}
else if (d < 0){
    console.log(`${d}< 0, so Roots are Complex`)
} else if (d == 0){
        console.log(`${d}==0, Roots are Equal`)
}




