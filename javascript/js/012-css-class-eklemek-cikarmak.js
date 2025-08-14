

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")//tek tek de class eklenebilir.

greeting.classList.add("new-info","second-class","third-class") //birden fazla eklemek

greeting.classList.remove("text-primary") //bu classı sildik.

greeting.classList.remove("title","second-class","thied-class") //birden fazla silmek

console.log(greeting.classList)

