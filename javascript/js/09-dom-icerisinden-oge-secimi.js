

// let h2 = document.getElementsByTagName('h2')     bu çok işe yaramaz.
// console.log(h2.title.innerHTML)


let title = document.getElementById('title')
console.log(title.innerHTML)

title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("#medianova")// ul#list>li>a böyle de ulaşabilirim id yle de
console.log(link.innerHTML)

//link.innerHTML = "link bilgisi degisti"
link.innerHTML += " degisti" //bu şekilde de ekleyebilirim.
link.style.color = "red"
link.classList.add('btn') //link degiskenine bir class bilgisi ekledik.

//html deki 010 islemlerini yorumdan çıkarınca hata kaybolacak. 
