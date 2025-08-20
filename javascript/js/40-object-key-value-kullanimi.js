
let laptop1 = {
    brand: "Apple", 
    model: "MacBook Air",
    "2kg": "2",//başına sayı koymak istersek "" içerisinde yazmak lazım
    modelName: "Mac" //iki kelimeli de camelCase kullanılır
}
console.log(laptop1)


//doğru anahtar bilgisi oluşturmak

console.log(laptop1.brand, laptop1["brand"]) //. yla değil [] bununla da çağırabiliriz
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])//başında rakam olduğu için böyle çağırdık


//anahtar bilgisine yeni değer eklemek

laptop1.brand = "Mac" //bilgi değişti
laptop1["brand"] = "Mac1" //bilgi değişti

console.log(laptop1)

//Yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

//anahtar bilgilerine ulaşmak -> Object.keys(item)

keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

//değer bilgilerine ulaşmak -> Object.values(item)

console.log(
    Object.values(laptop1)
)
let values = Object.values(laptop1)

values.forEach(value => {
    console.log("Value: ",value)
    
})

let settings = {
    password: 1234,
    userName: 'user1'
}