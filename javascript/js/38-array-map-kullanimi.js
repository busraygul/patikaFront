
const USERS = ["AYSE","MehMet","TugCE","AkSEL"]

//userName içinde orijinal isim kalsin
//shortName içinde ilk harf büyük (A.)
//newName içinde ilk harf büyük olsun

const NEW_USERS = USERS.map( user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item => 
//     {
//         return {
//             userName: item, shortName: `${item[0]}.`, 
//             newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//         }
//     }

// )
const USERS_OBJ = USERS.map( item => (// Parantez içerisinde sadece bir obje girdiğim için () kullanarak return yazmasam da oluyor.
    {userName: item, shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`})
)
console.log(USERS_OBJ)