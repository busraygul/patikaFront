
let firstName = prompt("Hoş Geldiniz! İsminizi Giriniz: ")
let companyDOM = document.querySelector("#company")
let greetingDOM = document.querySelector("#greeting")
let timeDOM = document.querySelector("#time")
let dayDOM = document.querySelector("#day")
let infoDOM = document.querySelector("#info")
let myInterval = null

if(companyDOM){
    companyDOM.innerHTML = `MEDIANOVA`
}
if(greetingDOM){
    greetingDOM.innerHTML = `Merhaba ${firstName}! Hoş Geldin!`
}


function updateClock() {
    
    const now = new Date();
    
    const time = now.toLocaleTimeString('tr-TR');

    const day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
    
    if(timeDOM){
        timeDOM.innerHTML = time
    }
    
    if(dayDOM){
        dayDOM.innerHTML = day
    }
    
    
}
    if(myInterval){
        clearInterval(myInterval)
    }
    myInterval = setInterval(updateClock, 1000);

    updateClock();

if(infoDOM){
    infoDOM.innerHTML = `tarihinde <strong>PatikaDev</strong>'de JavaScript bölümü 1.ödevindesiniz!`

}




