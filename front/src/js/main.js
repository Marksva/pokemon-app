
const PokeApi = 'https://pokeapi.co/api/v2/pokemon';

function SearchRandomPokemon() {
    let random = Math.floor(Math.random() * 151);

    fetch(PokeApi + `/${random}`)
        .then((response) => response.json())
        .then((data) => {
            let types = data.types.map(e => e.type.name);
            types = types.join(' ');
            let pokemon = {
                pokemon_api: data['id'],
                name: data['name'],
                img: data['sprites']['front_default'],
                types: types,
                hp: data['stats'][0]['base_stat'],
                attack: data['stats'][1]['base_stat'],
                defense: data['stats'][2]['base_stat'],
                speed: data['stats'][5]['base_stat'],
            }
            ShowRandomPokemon(pokemon);
            PostPokemon(pokemon)
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
    const dados = {name: 'mark'}
    const api = 'http://localhost:3333/pokemons'
    const response = await fetch(api, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon),

    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}














