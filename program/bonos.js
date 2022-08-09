// Confirm whether given number is a 3 digit number?
//  var a = 3422
//  var b = ''+a 
//  if (b.length == 3){
//     console.log("its a 3 digit number")
//  }
//  else 
//  {
//     console.log("its not a 3 digit number")
//  }


 // Confirm whether given number is an 'N' digit number?
//  var a = 1234
//  a = ''+a;

//  var num = 4;
//  l = a.length

//  if (num == a.length){
//     console.log(`its a ${num} digit number`)
//  }
//  else{
//     console.log(`its not a ${num} digit number`)
//  }

//  student > 75% // if he has more than 75, allow to exam
 // if he doesnt has ask for permission, if yes allow him, if not dont allow him

//  let atten = 80;
//  if(atten>75){
//     console.log("you cab write the exam")

//  } else{
//     console.log("Ask permision to write exam from Principal")
//     if(true){
//         console.log("you can write the exam" )
//     }else
//     {
//         console.log("you are not allowed to write the exam")
//     }
//  }

// Find whether a given number is a prime number or not?
num = 3
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

//3