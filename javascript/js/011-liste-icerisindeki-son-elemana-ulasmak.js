
let lastChild =document.querySelector("ul#list>li:last-child")
//console.log(lastChild)

lastChild.innerHTML = "son oge degisti"

let firstChild = document.querySelector("ul#list>li:first-child")

firstChild.innerHTML = "ilk oge"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi olusturdugumuz oge"

ulDOM.append(liDOM) //en sona ekler.

ulDOM.prepend(liDOM) //en basa ekler.

//html deki 012 islemlerini yorumdan çıkarınca hata kaybolacak. 
