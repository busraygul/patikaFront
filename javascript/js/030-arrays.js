

let domain = "medianova"

let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] //boş liste

console.log(items.length)//konsolda gözükür
//document.querySelector("#info").innerHTML = items.length //ekranda gözükür

console.log( items[0] )

console.log( items[items.length-1]) //son eleman

console.log(
    typeof(items) //object olarak çıktı verdi
)

console.log(
    Array.isArray(items)
)
//hangileri isArray -> true verir
//yapının array olup olmadığını kontrol eder

console.log( "[] : ", Array.isArray( [] ) )
console.log( "1 : ", Array.isArray( 1 ) )
console.log( "true : ", Array.isArray( true ) )

console.log(items[Math.floor(items.length/2)])
