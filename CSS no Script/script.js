const main = document.getElementById("principal");

const myItems = [
{
    color: 'blue',
    text: 'Primeiro item'
},
{
    color: 'green',
    text: 'Primeiro item'
},
{
    color: 'brown',
    text: 'Primeiro item'
}
] 

myItems.forEach(item => {
    const meuH1 = document.createElement('h1');
    meuH1.innerText = item.text;

    meuH1.style.color = item.color;

    main.appendChild(meuH1);
})
