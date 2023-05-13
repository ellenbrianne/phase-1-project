const form1 = document.getElementById("text-input")

form1.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = form1.querySelector("#habit").value
    let newItem = document.createElement("li")
    let list = document.querySelector("ul").appendChild(newItem)
    newItem.textContent = input
    
    form1.reset()
})



function renderCard (habit) {
    let card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
        <h3>${habit.activity}</h3>
            <p>Category: ${habit.type}</p>
            <p>Difficulty level: ${habit.difficulty}</p>
    `

    document.querySelector(".prompts").appendChild(card)
}

function getHabits () {
    fetch("http://localhost:3000/habits")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach(habit => renderCard(habit))
    })
}