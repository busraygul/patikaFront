
let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault()//default işlemi engellendi.yani url de girdiğimiz score yazılmıyor.
    console.log("Islem Gerceklesti")
}
 