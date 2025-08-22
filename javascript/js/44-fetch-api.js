
//JSON dosyadan veri çektik

fetch("data/settings.json").then( 
    response => {
        return response.json()
    }
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)

})

//API üzerinden veri çektik

let userListDOM = document.querySelector("#userList")

fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json() //response u jsona dönüştürdü
).then(
    responseJson => {
        responseJson.forEach(item => {
            let liDOM = document.createElement('li')
            liDOM.innerHTML = item.title
            userListDOM.appendChild(liDOM)
        })
    }
)