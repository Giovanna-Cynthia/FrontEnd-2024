const container = document.getElementById("container");

// simular dados de um servidor

var array = [1,2,3,4,5];


var myCard =`
    <div class="card"><img src="relogio.png" alt=""> 
        <h3>Relogio</h3>
        <h5>Relogio Feminino <br> Produto otimo a Prova d'água</h5>
        <h2>R$60,78</h2>
        <button><a href="https://pt.aliexpress.com/item/4001192196690.html">COMPRAR</a></button>
    </div>
`;

for (let index = 0; index < array.length; index++) {
    container.innerHTML = container.innerHTML + myCard;
    
}




// nomes = ["Giovanna Cynthia"]
/*var nomes = new Array();
nomes[0] = "Gi";
nomes.push(1977);
nomes.push(1978);
nomes.push(1979);
nomes.push(1980);
//var nomesAll = ["Kevin", "Ana", "Joao", "Giovanna", "Amanda", "Raphael"];
//organizar caracteres de forma crescente
console.log(nomesAll.sort())
document.write(nomesAll)
for (let index = 0; index < nomesAll.length; index++) {
    const element = nomesAll[index];
    console.log(element);
}
nomesAll.forEach(element => {
    console.log(element);
});
container.innerHTML = "<h3 class='cor'> Deu certo! </h3>";
console.log(titulo);
var nums = [4,6,8,7,19,21,55,9,77,100];
document.write(nomes.indexOf[1970]);
var sorted = nums.sort();
console.log(nums.sort());
document.write();*/ 
