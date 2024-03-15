//pegar dados do formulairo
const nome = document.getElementById("nome");
const endereco = document.getElementById("endereco");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");

const btnSubmit = document.getElementById("btn");

//criar uma lista fazia
const data = [];

//para ouvir o click do botão, usamos o addEventListener 
btnSubmit.addEventListener('click', function (event){

//não deixa o formulario se comportar como padrão, ou seja, enviar os dadps para próxima página/requisição
    event.preventDefault();
    console.log(nome.value);
    console.log(endereco.value);
    console.log(email.value);
    console.log(telefone.value);

//criando objeto
    const pessoa = {
        nome:  nome.value,
        endereco: endereco.value,
        email: email.value,
        telefone: telefone.value,

// [] - define que é uma lista
        favoritos: [
            {
                titulo: "A nova casa",
                autor: "juca bala",
                ano: 2025,
                genero: "Aventura"
            }
        ]
    }

    data.push(pessoa);
    console.log(pessoa.favoritos);
    console.log(data);
    
})
