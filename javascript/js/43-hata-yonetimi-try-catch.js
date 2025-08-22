

//bilmediğimiz dışarıdan alacağımız bilgiler varsa try catch in içerisinde hata yönetimi yapabiliriz.
let products;

try { //bir hata var mı dene
    products.forEach(item => console.log(item))
}
catch (error) { //hata yakalarsan bildir.
    console.log("error: ",error)
}


console.log("hata yönetimi düzgün çalışıyor")

let info = "medianova"
console.log(info)