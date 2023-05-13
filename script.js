let title = document.getElementById("title")
let hidden = document.getElementById("hide")
title.addEventListener("mouseenter", (e) => {
    hidden.id = ""
    setTimeout(() => {
        hidden.id = "hide"
    }, 2000)
})

const form1 = document.getElementById("text-input")

form1.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = form1.querySelector("#habit").value
    let newItem = document.createElement("li")
    let list = document.querySelector("ul").appendChild(newItem)
    newItem.innerHTML = `
        ${input}
        <select name="rank" id="drop-btn">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <br></br>
        `
    
    form1.reset()
})

function renderCard (habit) {
    let card = document.createElement("p")
    card.className = "cards"
    card.id = `${habit.id}`

    card.innerHTML = `
        <h3>${habit.activity}</h3>
            <p>Category: ${habit.type}</p>
            <p>Difficulty level: ${habit.difficulty}</p>
    `

    document.querySelector(".prompts").appendChild(card)
}

let promptBtn = document.getElementById("prompt-button")
promptBtn.addEventListener("click", (e) => {
   getHabits() 
})

function getHabits () {
    fetch("http://localhost:3000/habits")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach(habit => renderCard(habit))
    })
}