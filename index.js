function fetchData() {
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(data => data.forEach((characters) => theInfo(characters)))
}

function theInfo(characters) {
    const li = document.createElement('li')
    li.className ="card"
    li.innerHTML =
    `<p>${characters.name}</p>
    <div>
    <img src="${characters.image}">
    <p>${characters.id}</p>
    <p>Votes: ${characters.votes}</p>
    </div>
    <br>
    `
    document.querySelector('ul').appendChild(li)
}

fetchData()

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        trial(e.target.input.value)
        form.reset()
    })
})

function trial (){
    const list = document.createElement('li')
    list.className = 'list'
    list.innerHTML = `
    <p>${characters.name}</p>
    <div>
    <img src="${characters.image}">
    <p>${characters.id}</p>
    <p>Votes: ${characters.votes}</p>
    </div>
    `
}