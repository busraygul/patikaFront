let email = "busra.aygul@medianova.com"
let firstName = "busra"
let lastName = "AYGUL"

//string karakter sayısı -> length
console.log(email.length)

//Ilk karakter bulmak-> [0]:

console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk harf/ kucuk harf:

firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//string içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search

console.log(email.search("@")) //kaçıncı karakter olduğunu gösterir.
console.log(email[11])//1. karakterin ne olduğunu gösterir.
email.search('olmayan') //-1

//belli bir yere kadar al -> slice

let DOMAIN = email.slice( email.search("@") +1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.')))// sadece medianova kismini aldık

//bilgiyi değiştir ->replace:
email = email.replace('medianova.com','gmail.com')
console.log(email)

//istediğim bilgi var mı? -> includes: 
email.includes('jffng') //false
email.includes('@') //true

//istediğim bilgiyle başladı mı bitti mi -> startsWidth, endsWidth :

console.log(email.endsWith('gmail.com'))

//ilk  harflerini büyük yapmak

firstName = "firstname"
lastName = "lastname"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0]
.toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)