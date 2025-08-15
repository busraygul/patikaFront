
let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector("#alert")

// let clearDOM = document.querySelector("#clear")

// clearDOM.addEventListener('click',clear())

// function clear (){
//     userFormDOM.innerHTML = "" 
// }

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event) {
    event.preventDefault()
    //console.log("gonderildi")

    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {
        //bilgiler doğruysa uyarıyı kapatıyor.
        const alertBox = document.querySelector('.alert');
        if (alertBox) {
            alertBox.style.display = 'none';
        }


        addItem(USER_NAME.value, SCORE.value)

        if (!document.querySelector("#clearListBtn")) {
            addClearButton();
        }

        USER_NAME.value = ""//Gönderdikten sonra sıfırladık.
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction(
            "Başlık Bilgisi",
            "Eksik Bilgi Girdiniz!",
            "danger")
    }
}

let userListDOM = document.querySelector("#userList")

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName}
    <span class="badge text-bg-primary rounded-pill">${score}</span>
     `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}
function addClearButton(){
    const btn = document.createElement("button")
    btn.id = "clearListBtn"
    btn.className = "btn btn-danger mt-3"
    btn.textContent = "Listeyi Temizle"

    btn.addEventListener("click", function(){
        userListDOM.innerHTML = ""
        btn.remove()
    })
    userListDOM.parentElement.appendChild(btn);
}