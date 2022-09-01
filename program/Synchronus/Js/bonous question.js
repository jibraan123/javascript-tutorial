// to check out the value of true and false 

console.log(true == "true");// output is false 
console.log(true >= "false");// output is false
console.log(true <= "true");// output is false
console.log(true == "false");// output is false
console.log(true <= "false");// output is false
console.log(false >= "true");// output is false
console.log(false <= "false");// output is false
console.log(false == "true");// output is false
console.log(false == "false");// output is false
console.log(false < "true");// output is false
console.log(true > "true");// output is false
console.log(true < "true");// output is false


// reason
// true and false is an Boolean data type where as 
// "true" and "false" is an string data type which are present in double qoutes

// for boolean

console.log(true == 1); //output is true
console.log(false == 0); //output is  true

// for strings
console.log(typeof "true");// output is a string 
console.log(typeof "false");// output is a boolean
