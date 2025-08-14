
let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault()
    console.log("Islem Gerceklesti")

    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value)//.value diyerek değerini aldık

    localStorage.setItem('score', scoreInputDOM.value)

}
 