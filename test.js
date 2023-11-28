
function printEachChar(stringToPrint){

    var stringCount = stringToPrint.length
    //const arrayedString = stringToPrint.split("")

    for(var i = 0; i<stringCount; i++){
       // let word = arrayedString[i]
        console.log('The '+ i +' letter is ' + stringToPrint.charAt(i))
    }   
    
    console.log('Done printing ' + stringToPrint)
}

printEachChar("Hello World")


function reverseString(string){

    const reversedString = string.split("").reverse()//.join("")
    console.log(reversedString)

}

reverseString("Hello")




