//First of all I have to get the data using the Fetch() method
function fetchData() {
    fetch('http://localhost:3000/characters')
      .then(res => res.json())
      .then(data => data.forEach(character => createCard(character)));
  }
  
  //Now that I have the data I have to put It in the DOM
  function createCard(character) {
    const li = document.createElement('li');
    li.className = "card";
    li.innerHTML = `
      <p>${character.name}</p>
      <div>
        <img src="${character.image}">
        <p>ID: ${character.id}</p>
        <p>Votes: <span class="votes">${character.votes}</span></p>
        <button class="voting">Vote</button>
      </div>
      <br>
    `;
  
    const button = li.querySelector('button');
    button.addEventListener('click', () => {
      voteForCharacter(button, character);
    });
  
    document.querySelector('ul').appendChild(li);
  }
  
  function voteForCharacter(button, character) {
    button.removeEventListener('click', voteForCharacter);
    button.disabled = true;
  
    // Simulating the voting by incrementing the votes count
    character.votes++;
    const votesElement = button.parentNode.querySelector('.votes');
    votesElement.textContent = character.votes;
  }
  
  fetchData();
  
//Here I have to prevent the Submit Input from refreshing while being clicked

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        trial(e.target.input.value)
        form.reset()
    })
})
