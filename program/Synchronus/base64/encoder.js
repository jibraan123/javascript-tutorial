import readlineSync from "readline-sync";

function base64Encoding(){
    //step :1 Accept String input
    let inputString = readlineSync.question("Enter the String you want to encode : ")

    //split Characters
    let splitString = inputString.split("");
    console.log("The String is : ", splitString);

    //Get ASCII Decimal
    let ASCIICodes = splitString.map((char)=>char.charCodeAt());
    //let ASCIIcode=splitstring.map(function(char){
    // return char.charcodeAt();   
    // })
    console.log("The ASCII Array is : ", ASCIICodes);

    let binaryCodes = ASCIICodes.map((num)=>num.toString(2));
    console.log("Binary Codes : ",binaryCodes);

    let code = binaryCodes.map((bin)=>{
        while(bin.length<8){
            bin = "0" +bin;
        }
        return bin;
    })
    
    console.log("Binaries in 8 bit are : ",code);
    
    let onebin = code.join("").split("");
    console.log(onebin);

    //Splitiing into 6 bits
    let newbin=[];
    while(onebin.length!=0){
        newbin.push(onebin.splice(0,6).join(""));
    }
    console.log("Binaries in 6 bits are : ",newbin);

    //padding and add =
    let lastelement = newbin[newbin.length-1];
    if(lastelement.length != 6){
        var counter = 0;
        while(lastelement.length<6){
            lastelement= lastelement + "0";
            counter++;
       }
       newbin[newbin.length-1] = lastelement;
    }
    console.log("Binaries in 6 bits including the last element are : ",newbin);

    let bintoDecimal = newbin.map((str)=>parseInt(str,2));
    console.log("base 64 Decimal : ",bintoDecimal);

    let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    //Decimal to Base 64
    let base64final = bintoDecimal.map((dec)=>base64[dec]);
    console.log("Base 64 String : ",base64final);
    if(counter==2){
        base64final.push("=");
     }else if(counter==4){
        base64final.push("==")
     }
    console.log(" the final out is : ",base64final);

}






base64Encoding();