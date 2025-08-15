
let items = [ 10, 20, 30, 40 ]

console.log("items-ilk hali: ",items)

//sona öge eklemek -> push()
items.push(50)
console.log(items)

//başa öge eklemek -> unshift()
items.unshift(5)
console.log(items)

//sondaki ögeyi çıkarmak -> pop()
let lastItem = items.pop() //son eleman lastItem içerisine eklendi
console.log("lastItem: ",lastItem ,", items: ",items)

//baştaki ögeyi çıkarmak ->shift()
let firstItem = items.shift() //ilk eleman firstItem içerisine eklendi
console.log("firstItem: ",firstItem ,", items: ",items)

//array içindeki bir ögenin bilgisinin değiştirilmesi

items[0] = 5 //ilk eleman değişti
console.log(items)

items[items.length-1] = "son"  //son eleman değişti
console.log(items)











