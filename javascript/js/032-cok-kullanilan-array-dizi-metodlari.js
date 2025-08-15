

let items = [ 1, 2, 3, 4, 5 ]


//array içinde array
let femaleUsers = ["Büşra", "Serap", "Aygül"]
let maleUsers = ["Fatih", "Uğur", "Ali"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items[0][0]) //array içindeki arrayin ilk elemanı
console.log(items[0].length)


//array içerisinden öğe ayırmak -> splice(pos, item?)
let newItems = items.splice(1, 5) //indexi 1 olandan başladı 5 öğe sıraladı.
console.log("newItems: ",newItems)
console.log("items: ",items)//yukarıda ayırdı. o yüzden items da kalanlar var


//array içerisindeki öğenin index bilgisini bulamk -> indexOf('value)
items.unshift("lorem")
items.push("ipsum")

console.log(items)
console.log(items.indexOf("ipsum"))

//array kopyalamak ->slice, [...ES6]

let copyItems = items
console.log(items)

copyItems.pop()//son öğeyi çıkarttık ama ikisinden de silindi
console.log("copyItems: ",copyItems)
console.log("items: ",items)

console.log("kopyalandıktan sonra")
copyItems = items.slice()//sadece copy den gitti.
copyItems.pop()
console.log("copyItems: ",copyItems)
console.log("items: ",items)

let es6items = [...items]//es6 ile de kopyalanabilir.
console.log(es6items)

// 2 array bilgisini birleştirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers)


//array içerisindeki bilgiyi stringe çevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))//bu şekilde de string yapılabilir


// istediğimiz index bilgisine öğe eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length-1, 0, "Melisa")
allUsers.splice(Math.floor(allUsers.length/2), 0, "Zehra")

console.log(allUsers)







