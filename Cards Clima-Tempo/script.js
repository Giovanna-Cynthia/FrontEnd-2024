const main = document.getElementById("main");

const cities = [
{
    name: "/imagens/Bahamas",
    temp: 30,
    wheather: [
        {
            day: "SEG",
            icon: "imagens/iconeSolNuvens.png"

        },
        {
            day: "TER",
            icon: "imagens/iconeChuva.png"
        },
        {
            day: "QUA",
            icon: "imagens/iconeSol.png"
        },
    ]
},
{
    name: "Canada",
    temp: -5,
    wheather: [
        {
            day: "SEG",
            icon: "imagens/iconeSol.png"
        },
        {
            day: "TER",
            icon: "imagens/iconeSolNuvens.png"
        },
        {
            day: "QUA",
            icon: "imagens/iconeChuva.png"
        },
    ]
},
{
    name: "Cancun",
    temp: 28,
    wheather: [
        {
            day: "SEG",
            icon: "imagens/iconeChuva.png"
        },
        {
            day: "TER",
            icon: "imagens/iconeSol.png"
        },
        {
            day: "QUA",
            icon: "imagens/iconeSolNuvens.png"
        },
    ]
},
{
    name: "dubai",
    temp: 26,
    wheather: [
        {
            day: "SEG",
            icon: "imagens/iconeSol.png"
        },
        {
            day: "TER",
            icon: "imagens/iconeSolNuvens.png"
        },
        {
            day: "QUA",
            icon: "imagens/iconeChuva.png"
        },
    ]
},
{
    name: "Paris",
    temp: 21,
    wheather: [
        {
            day: "SEG",
            icon: "imagens/iconeSolNuvens.png"
        },
        {
            day: "TER",
            icon: "imagens/iconeChuva.png"
        },
        {
            day: "QUA",
            icon: "imagens/iconeSol.png"
        },
    ]
},
{
    name: "Portugal",
    temp: 10,
    wheather: [
        {
            day: "SEG",
            icon: "imagens/iconeChuva.png"
        },
        {
            day: "TER",
            icon: "imagens/iconeSol.png"
        },
        {
            day: "QUA",
            icon: "imagens/iconeSolNuvens.png"
        },
    ]
},
{
    name: "novaYork",
    temp: 23,
    wheather: [
        {
            day: "SEG",
            icon: "imagens/iconeSolNuvens.png"
        },
        {
            day: "TER",
            icon: "imagens/iconeSol.png"
        },
        {
            day: "QUA",
            icon: "imagens/iconeChuva.png"
        },
    ]
},
]
cities.forEach(city => {
    const w3Card = document.createElement("div");
    w3Card.className = "w3-card-4 w3-margin";
    
    //Para o card ficar do mesmo tam, independente da imagem
    w3Card.style.maxWidth = "350px";

    const weatherCard = `
<div class="w3-display-container w3-text-white">
    <img src="assets/images/${city.name}.png" alt="Lights" style="width:100%">
    <div class="w3-xlarge w3-display-bottomleft w3-padding">${city.name.toUpperCase()} ${city.temp}&deg; C</div>
</div>
<div class="w3-row">
    <div class="w3-third w3-center">
    <h3>${city.wheather[0].day}</h3>
    <img src="${city.wheather[0].icon}" alt="sun" style="width:80px">
    </div>
    <div class="w3-third w3-center">
    <h3>${city.wheather[1].day}</h3>
    <img src="${city.wheather[1].icon}" alt="sun" style="width:80px">
    </div>
    <div class="w3-third w3-center w3-margin-bottom">
    <h3>${city.wheather[2].day}</h3>
    <img src="${city.wheather[2].icon}" alt="sun" style="width:80px">
    </div>
</div>
`
    w3Card.innerHTML = weatherCard;

    main.appendChild(w3Card);
});