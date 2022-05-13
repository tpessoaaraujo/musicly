function greetingmessage() {
    let greeting = document.getElementById("greeting")
    let data = new Date()
    let hours = data.getHours()

    if (hours >= 0 && hours < 12) {
        greeting.innerText = `Bom dia!`
    } else if (hours >= 12 && hours <= 18) {
        greeting.innerHTML = `Boa tarde!`
    } else {
        greeting.innerHTML = `Boa noite!`
    }
}