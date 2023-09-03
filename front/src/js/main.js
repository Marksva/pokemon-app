const myApi = 'http://localhost:3333/pokemons';
const PokeApi = 'https://pokeapi.co/api/v2/pokemon';


getLastPokemon()






function SearchRandomPokemon() {
    let random = Math.floor(Math.random() * 151);

    fetch(PokeApi + `/${random}`)
        .then((response) => response.json())
        .then((data) => {
            let types = data.types.map(e => e.type.name);
            types = types.join(' ');
            let pokemon = {
                name: data['name'],
                img: data['sprites']['front_default'],
                types: types,
                hp: data['stats'][0]['base_stat'],
                attack: data['stats'][1]['base_stat'],
                defense: data['stats'][2]['base_stat'],
                speed: data['stats'][5]['base_stat'],
            }
            PostPokemon(pokemon)
            ShowRandomPokemon(pokemon);
        });

}


function ShowRandomPokemon(data) {

    let pokemon_api = document.querySelector('.pokemon_api');
    let img = document.querySelector('.img')
    let name = document.querySelector('.name');
    let type = document.querySelector('.types');
    let hp = document.querySelector('.hp');
    let attack = document.querySelector('.attack');
    let defense = document.querySelector('.defense');
    let speed = document.querySelector('.speed');

    pokemon_api.innerHTML = data.pokemon_api;
    img.src = data.img;
    name.innerHTML = data.name;
    type.innerHTML = data.types
    hp.innerHTML = data.hp;
    attack.innerHTML = data.attack;
    defense.innerHTML = data.defense;
    speed.innerHTML = data.speed;

}



async function PostPokemon(pokemon) {


    const response = await fetch(myApi, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon),

    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('LastPokemonId', data.pokemon_id);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    GetHistory();
}



function GetHistory() {
    fetch(myApi)
        .then((response) => response.json())
        .then((data) => {
            ShowHistoryPokemon(data);
        })

}
GetHistory();


function ShowHistoryPokemon(data) {

    let output = '';

    for (let pokemon of data) {
        output += `
        <div class="box-history">
        <img src="${pokemon.img}" alt="pokemon-img" class="h-img efeito-flutuante-infinito">
        <div class="h-conteudo">
            <div>
                <h1><span class="h-name">${pokemon.name}</span></h1>
                <span class="h-pokemon_api">#${pokemon.pokemon_api}</span>
                <p><span>Seed Pokémon</span></p>
                <p><span class="h-types">${pokemon.types}</span></p>
            </div>
        </div>
        <div class="h-sobre">
            <div>
                <p><span class="-h-hp">${pokemon.hp}</span></p>
                <p><span>HP</span></p>
            </div>
            <div>
                <p><span class="h-attack">${pokemon.attack}</span></p>
                <p><span>attack</span></p>
            </div>
            <div>
                <p><span class="h-defense">${pokemon.defense}</span></p>
                <p><span>defense</span></p>
            </div>
            <div>
                <p><span class="h-speed">${pokemon.speed}</span></p>
                <p><span>speed</span></p>
            </div>
        </div>
    </div> `;

        document.querySelector('.secao-2').innerHTML = output;
    }


}


function UpdateName() {
    let name = document.querySelector('.name');
    let input = document.querySelector('.input-nickname');
    const data = {
        name: input.value,
    }
    const id = localStorage.getItem('LastPokemonId');
    fetch(myApi + `/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {

            name.innerHTML = data.name
            GetHistory();
        }).catch((error) => {
            console.error('Error:', error);
        })

}


function openModal() {


    const modal = document.getElementById('modal-container');
    modal.classList.add('mostrar');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'modal-container' || e.target.id == "fechar") {
            modal.classList.remove('mostrar');
            localStorage.fechaModal = 'modal-container';
        }
    })
}


function getLastPokemon() {
    const route = 'http://localhost:3333/last-pokemon';
    fetch(route)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            ShowRandomPokemon(data);
            return data;
        })

}












