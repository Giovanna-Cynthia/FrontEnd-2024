//fetch ->
getPets()

async function getPets() {
//comando fetch usando async/await
const reponse = await fetch("https://petadopt.orender.com/pet/pets")
const pets = await reponse.json();
console.log(pets)
}