const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const pokeName = document.getElementById('pokeName');
const butonSearch = document.getElementById('searchPokemon');
const appNode = document.getElementById('app');

butonSearch.addEventListener("click", insertPokemon);
butonSearch.addEventListener("click", deletePokemons);

butonSearch.addEventListener('touchstart', insertPokemon);
butonSearch.addEventListener("touchstart", deletePokemons);



async function insertPokemon(){
    
    const res = await fetch(`${baseURL}${pokeName.value.toLocaleLowerCase()}`)
    .then(res=>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("./Img/noExiste.gif");
            deletePokemons();
        } else{
            return res.json();
        }
    })
    .then(data=>{
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
    try {
        const res = await fetch(`${baseURL}${pokeName.value.toLocaleLowerCase()}`)
        const pokemonDataJSON = await res.json()
    
        const allItems = [];
        const result = [];
    
        for (let pokemonInfo in pokemonDataJSON) {
          result.push([pokemonInfo , pokemonDataJSON[pokemonInfo]]);
        }
    
        

    const pokemonType = document.createElement('h2');
    pokemonType.innerText = `Tipo: ${result[16][1][0].type.name}`;
    pokemonType.classList.add('pokedexP', 'text-4xl');

    const hp = document.createElement('p');
    hp.innerText = `HP: ${result[15][1][0].base_stat}`;
    hp.classList.add('pokedexP', 'text-2xl');

    const attack = document.createElement('p');
    attack.innerText = `Attack: ${result[15][1][1].base_stat}`;
    attack.classList.add('pokedexP', 'text-2xl');

    const defense = document.createElement('p');
    defense.innerText = `Defense: ${result[15][1][2].base_stat}`;
    defense.classList.add('pokedexP', 'text-2xl');

    const specialAttack = document.createElement('p');
    specialAttack.innerText = `Special Attack: ${result[15][1][3].base_stat}`;
    specialAttack.classList.add('pokedexP', 'text-2xl');

    const specialDefense = document.createElement('p');
    specialDefense.innerText = `Special Defense: ${result[15][1][4].base_stat}`; 
    specialDefense.classList.add('pokedexP', 'text-2xl');

    const speed = document.createElement('p');
    speed.innerText = `Speed: ${result[15][1][5].base_stat}`; 
    speed.classList.add('pokedexP', 'text-2xl');

    const stats = document.createElement('div');
    stats.append(hp, attack, defense, specialAttack, specialDefense, speed);
    stats.classList.add('pokedexP', 'text-2xl');

    const container = document.createElement('div');
    container.append(pokemonType, stats);
    container.classList.add('container');

    allItems.push(container);

    appNode.append(...allItems);
    
    }  catch {
        alert('Ambos campos son obligatorios');
    }
} 

const pokeImage = (baseURL) =>{
    const pokeImage = document.getElementById("pokeImg");
    console.log(pokeImage);
    pokeImage.src=baseURL;
}

function deletePokemons() {
    let allPokemon = appNode.childNodes;
    allPokemon = Array.from(allPokemon);
  
    allPokemon.forEach(pokeName => {
    pokeName.remove(pokeName);
    
    });
}
