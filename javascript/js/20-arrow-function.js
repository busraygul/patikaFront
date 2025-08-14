
function hello(firstName){
    console.log(`Merhaba ${firstName}`)
}
hello("JavaScript")

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`)}
//const fonk.ismi = (parametresi) => {fonk.işlemleri} böyle kullanılır.

helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName =>  console.log(`Merhaba ${firstName}`) //parametre ve işlem 1 tane olduğu için parantezlere gerek yok
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName,lastName) => { console.log(`Merhaba ${firstName} ${lastName}`)}
helloFuncV3("helloFuncV3","Last Name info")

const helloFuncV4 = (firstName,lastName) => { 
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4","Other info")


