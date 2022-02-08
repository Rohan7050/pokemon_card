
const imgLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const nameLink = "https://pokeapi.co/api/v2/pokemon/"

const main = document.querySelector("#main-container")
const numbersOfCards = document.querySelector("#number")


// div
//     div
//         img
//     /div
//     div
//         h1
//     /div
// /div

//total nunber of pokemon 898
const getName = async (num) => {

    for (let i = 1; i <= num; i++) {
        const divs = document.createElement("div")
        divs.classList.add("pokemon")

        const imgDiv = document.createElement("div")
        imgDiv.classList.add("img-container")

        const newImg = document.createElement("img")
        newImg.src = `${imgLink}${i}.png`

        const infoDiv = document.createElement("div")
        infoDiv.classList.add("info")
    
        const spans = document.createElement("span")
        spans.classList.add("number")
        spans.append(`#${i}`)
    
        const h3s = document.createElement("h3")
        h3s.classList.add("name")

        const res = await axios.get(`${nameLink}${i}/`)
        const pokemonName = res.data.forms[0].name;
        h3s.append(pokemonName)

        const infoLink = document.createElement("a")
        infoLink.href = `https://www.google.com/search?q=${pokemonName}`
        infoLink.target = "_blank"
        infoLink.textContent = "info"

        divs.appendChild(imgDiv)
        imgDiv.appendChild(newImg)
        divs.appendChild(infoDiv)
        infoDiv.appendChild(spans)
        infoDiv.appendChild(h3s)
        infoDiv.appendChild(infoLink)
        main.appendChild(divs)

    }
}

function toRemove(){
    const pokemonDiv = document.querySelectorAll(".pokemon")
    for (let div of pokemonDiv){
        div.remove();
    }
}

numbersOfCards.addEventListener("change", function(){
    toRemove();
    getName(parseInt(this.value));
})