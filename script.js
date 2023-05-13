const form1 = document.getElementById("text-input")

form1.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = form1.querySelector("#habit").value
    let newItem = document.createElement("li")
    let list = document.querySelector("ul").appendChild(newItem)
    newItem.textContent = input
    
    form1.reset()
})