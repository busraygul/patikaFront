

let fullName = prompt("Lutfen adinizi giriniz: ")
console.log(fullName)

let greeting = document.querySelector("#greeting") //id olduğu için başına # konmalı

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`