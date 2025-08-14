

let firstName = "busra" //dışardan parametre almayı azaltmak daha iyi

function greetings(firstName="", lastName=""){//dışa bağımlılığı azaltmak için parametre olarak yazdık.default parametre alıyor
    //console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName}${lastName}`)
}
greetings("Busra")//parametre gonderdik
console.log(firstName) //degisken
greetings() //fonksiyona parametre gondermedik


function greetings2(firstName, lastName){
    let info = `Merhaba ${firstName} ${lastName}`//buradaki info bu bloğun içinde kalır
    return info //dışarıya bilgi gönderir.
}
let greetingsInfo = greetings2("Ad", " Soyad")
console.log(greetingsInfo)


function domIdWriteInfo(id,info){

    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info

}

let htmlInfo = `<span style="color:red">Color REEDD</span>`

domIdWriteInfo('greeting',htmlInfo) //idsi greetings olana uygulandı
domIdWriteInfo('info',htmlInfo)//idsi info olana uygulandı

domIdWriteInfo('info',greetings2("Ad", " Soyad"))