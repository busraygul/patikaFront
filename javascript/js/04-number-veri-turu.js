let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat: ", price,
    "KDV Oranı: ", tax,
    "KDV Tutarı: ", priceTax,
    "Fiyat: ", total 
)
 let stringNumber = "11"; //string olarak yazdırdı.
 console.log(stringNumber)

 let newNumber = Number(stringNumber)
 console.log(newNumber)
 console.log("Number Constructor icine bilgi gonderildi:",Number("111"))
//arttırma, azaltma

let counter = 320
//counter = counter + 2 uzun yöntem
counter +=2
console.log(counter)

counter --;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter)

//aşağı yuvarlama -> Math.floor:

console.log("Aşagi Yuvarlama: ", Math.floor(1.9))//-> 1

console.log("Yukari Yuvarlama: ", Math.ceil(1.9))//-> 2

console.log("Yakina Yuvarlama: ", Math.round(1.2))//-> 1

console.log("Yakina Yuvarlama: ", Math.round(1.7))//-> 2
