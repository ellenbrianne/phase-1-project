const title = document.getElementById("title")
const hidden = document.getElementById("hide")
title.addEventListener("mouseenter", (e) => {
    hidden.id = ""
    setTimeout(() => {
        hidden.id = "hide"
    }, 1000)
})

const form1 = document.getElementById("text-input")

form1.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = form1.querySelector("#habit").value
    const newItem = document.createElement("li")
    const list = document.querySelector("ul").appendChild(newItem)
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

const promptBtn = document.getElementById("prompt-button")
promptBtn.addEventListener("click", (e) => {
   getHabits() 

   const finalList = document.getElementById("final")
   const finalForm = document.createElement("form")
   finalForm.id = "final-form"
   finalList.appendChild(finalForm)
   finalForm.innerHTML = `
    <p id="closing">Finally, create a new list with your previous habits you'd like to save, and include whichever replacements you chose. Don't exceed 6 total, and try to keep to 2 habits from each difficulty level. :)</p>
    <input 
        type="text" 
        id="last"
        name="last"
    </input>
    <input type="submit" value="List Final Habits">
   `
   finalForm.addEventListener("submit", (e) => {
    e.preventDefault()
        const input = finalForm.querySelector("#last").value
        const lastOne = document.createElement("li")
        lastOne.textContent = input
        const ul = document.createElement("ul").appendChild(lastOne)
        const finalArea = document.getElementById("final").appendChild(ul)

        finalForm.reset()
   })
})

function getHabits () {
    fetch("http://localhost:3000/habits")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach(habit => renderCard(habit))
    })
}