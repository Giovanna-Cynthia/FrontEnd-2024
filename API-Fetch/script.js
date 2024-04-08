//fetch ->
//getPets()
/*
async function getPets() {
//comando fetch usando async/await
const reponse = await fetch("https://rickandmortyapi.com/api/character/?page=1")
const pets = await reponse.json();
console.log(pets.results)
}
*/

fetch("https://rickandmortyapi.com/api/character/?page=1")
//then => então
.then(rest => rest.json())
.then(data => console.log(data))

function cards(data) {

    console.log(data)

}