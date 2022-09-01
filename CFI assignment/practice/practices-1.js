
// 1.Find the cube root of a number ?
function findCube(numb) {
    
    numb = (numb ** 1/3)
    return numb;
}
console.log(findCube(5))
// _______________________________________________________________________
// 2.Write a  program that will accept the base and height of a triangle and compute the area?
function areaOfT(h, b) {
    area = (h * b) / 2
    return area;
}
console.log(areaOfT(5,6))
// _______________________________________________________________________
// 3.Write a  program to compute the distance between the points (x1, y1) and (x2, y2)?
a=[4,6]
b=[4,6]
function dis(d) {
    
    d = ((a[1] - a[0]) ** 2 + (b[0] - b[1]) ** 2) ** (1 / 2)
    return d;
}
console.log(dis())
// // _______________________________________________________________________
// 4.Write a  program to calculate body mass index?
BMI weight/height**2
function bmi (w, h) { //height in metres and weight in kilograms.
    result = w / (h) ** 2
    return result
}
console.log(bmi(65, 1.5))//please enter height in m and weight in kilograms.

// _______________________________________________________________________
// 5.Write a  program to filter the positive numbers from a list?

let numArr = [-5, 10, -3, 12, -9, -5, 90, 0, 1];
final=''
for(i=0;i<=numArr.length;i++){
    if(numArr[i]>=0){
    final=final+numArr[i]+` `
    }
}
    console.log(final)



// _______________________________________________________________________
// 6.Write a  program to test whether a passed letter is a vowel or not? (edited)


function vowels(v){
if(v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u' || v == 'A' || v == 'E' || d == 'I' || d == 'O' || d == 'U' )
    console.log(v + " is Vowel");
else
    console.log(v + " is Consonant");
return v;
}

vowels("i")
