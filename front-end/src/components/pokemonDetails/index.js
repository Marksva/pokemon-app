import React from 'react';
import './styles.css';
import pokebola from '../../assets/pokebola.png';

export default function PokemonDetails({ pokemonData }) {

    return (
        <div className='box-card'>
            <div className="conteudo">
                <img src={pokemonData.img || pokebola} alt="pokemon-img" className="img" />
                <h1><span className="name">{pokemonData.name}</span></h1>
                <h2><span>Seed Pokémon</span></h2>
                <p className="types"><span className="types">{pokemonData.types}</span></p>
                <p>#<span className="pokemon_api">{pokemonData.id}</span></p>

                <div className="conteudo-sobre">
                    <div>
                        <p><span className="hp habilidades">{pokemonData.stats?.hp || 'n/a'}</span></p>
                        <p><span>HP</span></p>
                    </div>
                    <div>
                        <p><span className="attack habilidades">{pokemonData.stats?.attack || 'n/a'}</span></p>
                        <p><span>Attack</span></p>
                    </div>
                    <div>
                        <p><span className="defense habilidades">{pokemonData.stats?.defense || 'n/a'}</span></p>
                        <p><span>Defense</span></p>
                    </div>
                    <div>
                        <p><span className="speed habilidades">{pokemonData.stats?.speed || 'n/a'}</span></p>
                        <p><span>Speed</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
