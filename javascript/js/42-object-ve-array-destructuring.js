
//Object Destructuring

let settings = {
    userName: "lorem",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "medianova.com"
}

//obje içindeki bilgilerin tek seferde çıkarılması

// let userName = settings.userName//bu şekilde ulaşabiliyorduk
// console.log(userName)

// let { userName, password, isActive, ip, serverName } = settings  //destructuring yaptık.yani hepsini normal bir dğeişkenmiş giib kullandık.
//{} kullandık çünkü bizim settings objemizi {} kullanarak oluşturduk
// console.log(userName, password, isActive, ip, serverName) //settings. koymadan direkt ulaşabiliyoruz
// console.log(settings)
// console.log(userName) //direkt ulaşabildim

 //RENAME YAPTIK. let içerisinde isim değişikliği yapabildik.
let { userName: user, password, isActive, ip: serverIP, serverName } = settings
console.log(user, password, isActive, serverIP, serverName) //settings. koymadan direkt ulaşabiliyoruz
console.log(settings)
console.log(user)



//obje içindeki bazi bilgilerin çıkarılması

let {userName: userName2, password: password2, isActive: isActive2 , ...newSettings} = settings//... nokta kullanınca geri kalan değişkenler newSettingse aktarıldı
//daha önce değişken olarak tanımladığımız için yeni değişken isimlerine atadık 
console.log(userName2, password2, isActive2, newSettings )


//objenin destructuring ile kopyalanması

//HATALI!!
// let settings2 = settings
// settings2.userName= "degisen bilgi"
// console.log("settings: ",settings)
// console.log("settings2: ",settings2)

//DOĞRUSU!!

let settings2 = {...settings}//settingsin içinden hepsini çıkartıp settings2 ye ekledik
settings2.userName= "degisen bilgi"
console.log("settings: ",settings)
console.log("settings2: ",settings2)

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score //score arrayini [] bununla oluşturduğumuz için destructuring işlemini de [] bununla yaptık.

console.log(score1, score2, otherScore)


//ARRAY KOPYALAMA

let copyOfScore = [...score] 
console.log(copyOfScore)


