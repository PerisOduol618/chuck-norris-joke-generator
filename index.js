const jokeForm = document.getElementById('jokeForm')
const jokeOutput= document.getElementById('jokeOutput')
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')

jokeForm.addEventListener ( 'submit', (e) => {
   e.preventDefault()

   const firstName = firstNameInput.value === '' ? 'Chuck': firstNameInput.value;
   const lastName = lastNameInput.value === '' ? 'Norris': lastNameInput.value;

    const url = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    

    
    fetch(url)
        .then( res => {
            return res.json()
        }).then( data => {
            console.log(data.value.joke)
            jokeOutput.innerText = data.value.joke
        });
    
});