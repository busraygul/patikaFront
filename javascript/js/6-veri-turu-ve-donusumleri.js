let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)
console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

//string veri tipini int ve floata dönüştürmek

let number = "11"
console.log(
    "number: ",number ,typeof(number)
) //->string döndü

let number1 = "12"

number1 = parseInt(number1)
console.log(
    "number1= ", number1, typeof(number1)
)//numbera dönüştürdük.

let number2 = "12px"

number2 = parseInt(number2)
console.log(
    "number2= ", number2, typeof(number2)
)
let number3 = "12.1"

number3 = parseInt(number3)
console.log(
    "number3= ", number3, typeof(number3)
)

let number4 = "12.4px"

number4 = parseFloat(number4)
console.log(
    "number4= ", number4, typeof(number4)
)

//number veri tipinden stringe dönüştürmek

let number5 = 55

number5 = number5.toString()
console.log(number5, typeof(number5))