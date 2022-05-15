
// Question 2. 

const gameContainer = document.querySelector(".games")

const key = "a013274ce30d4264a23ffccdb97edb3b";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

async function getGames() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        showGames(data);
        gameContainer.classList.remove("loading");

    } catch(error){
        console.error(error);
        gameContainer.classList.remove("loading");
        showError();
    }
}


function showGames(games) {
let list = document.createElement("ul");
let listItems = "";
for(let i = 0; i < 8 ; i++) {
    listItems += `<li>${games.results[i].name}</li>`
    listItems += `<li>${games.results[i].rating}</li>`
    listItems += `<li>${games.results[i].tags.length}</li>`

}
list.innerHTML = listItems;
gameContainer.appendChild(list);
}


function showError() {
    gameContainer.innerHTML = `<p>Failed to fetch data</p>`;
    gameContainer.classList.add("error");

}

getGames();
