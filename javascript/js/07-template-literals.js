let username = "Busra"
const DOMAIN = "medianova.com"

let email = username + "@" + DOMAIN

//console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresin: ",email)

//bu şekilde de virgül kullanmadan yazılabilir.
let info = `Merhaba ${username} sitemize hoş geldin. 
Mail Adresin: ${email}

kisa isminiz: ${username[0]}.

Mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2+3)*10} TL 
gunun saat bilgisi: ${new Date().getHours()}
`

console.log(info)