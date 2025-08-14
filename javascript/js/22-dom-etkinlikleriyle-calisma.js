

let greeting = document.querySelector("#greeting") //idsi greeting olanı tuttuk.
greeting.addEventListener("click", domClick //click komutunu dinledik.
)

function domClick(){
    console.log("Tiklandi.")
    //console.log(this.innerHTML = "tiklandigi icin bilgi degisti.") //texti değiştirdik.
    //this.style.color = "red" //style verdik.
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
} 