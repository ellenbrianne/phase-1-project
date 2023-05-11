const form1 = document.getElementById("text-input")

form1.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = form1.querySelector("#habit").value
    let newItem = document.createElement("li")
    let list = document.querySelector("ul")
    newItem.textContent = input
    list.appendChild(newItem)
    
    form1.reset()
})