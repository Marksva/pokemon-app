import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';
import PokemonDetails from '../pokemonDetails';

export default function SearchPokemon() {
    const [pokemonData, setPokemonData] = useState({});

    const GeneratePokemon = async () => {

        try {
            const randomPokemonId = Math.floor(Math.random() * 898) + 1;

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);

            const { name, types, id, stats, sprites } = response.data;


            setPokemonData({
                name,
                types: types.map(type => type.type.name).join(', '),
                id,
                img: sprites.front_default,
                stats: {
                    hp: stats.find(stat => stat.stat.name === 'hp').base_stat,
                    attack: stats.find(stat => stat.stat.name === 'attack').base_stat,
                    defense: stats.find(stat => stat.stat.name === 'defense').base_stat,
                    speed: stats.find(stat => stat.stat.name === 'speed').base_stat,
                },
            });

        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };


    return (

        <main className='limitar-conteudo'>
            <PokemonDetails pokemonData={pokemonData} />
            <div>
                <button className="button" onClick={GeneratePokemon}>Generate</button>
            </div>
        </main>
    );
}
