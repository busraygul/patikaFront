
let user = {userName: 'busraygul', isActive:true}

localStorage.setItem('userInfo',JSON.stringify(user))//stringe çevirdik.

let userInfo = localStorage.getItem('userInfo')//bilgi alındı.string içerisinde
userInfo = JSON.parse(userInfo)//string ifadeyi parse ettik ve içindeki bilgiye ulaştık.

console.log(userInfo)