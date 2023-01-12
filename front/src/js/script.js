const PokeApi = 'https://pokeapi.co/api/v2/pokemon';

function SearchPokemon() {
    let numero_sorteado = Math.floor(Math.random() * 151);

    fetch(PokeApi + `/${numero_sorteado}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const pokemon = {
                name: data['name'],
                img: data['sprites']['front_default'],
                types: data['types'],
                hp: data['stats'][0]['base_stat'],
                attack: data['stats'][1]['base_stat'],
                defense: data['stats'][2]['base_stat'],
                speed: data['stats'][5]['base_stat'],
            }
            ShowPokemon(pokemon);
        });

}

function ShowPokemon(pokemon) {
    const img = document.querySelector('.img')
    const name = document.querySelector('.name');
    const type = document.querySelector('.types');
    const hp = document.querySelector('.hp');
    const attack = document.querySelector('.attack');
    const defense = document.querySelector('.defense');
    const speed = document.querySelector('.speed');

    img.src = pokemon.img;
    name.innerHTML = pokemon['name'];
    const arrayTypes = pokemon['types'].map(e => e['type']['name']);
    type.innerHTML = arrayTypes.join('  ');
    hp.innerHTML = pokemon['hp'];
    attack.innerHTML = pokemon['attack'];
    defense.innerHTML = pokemon['defense'];
    speed.innerHTML = pokemon['speed'];


}















