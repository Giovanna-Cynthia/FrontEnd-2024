/*criando variavel */
const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

//Array
const allPs = document.querySelectorAll("p.select");

//Para acesssar uma array usar (for ou index)

allPs.forEach(item => console.log(item.innerHTML));

/* Eventos de javaScript */
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputValue = nome.value;
    const templateHtml = `
    <li>${inputValue}</li>`;

    lista.innerHTML += templateHtml;

    /*limpandp campo */
    nome.value = "";
})