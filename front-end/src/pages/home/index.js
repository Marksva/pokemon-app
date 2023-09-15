import React from 'react';
import Header from '../../components/header/index';
import SearchPokemon from '../../components/searchPokemon/index';

export default function Home() {
    return (
        <section>
            <Header />
            <SearchPokemon />
        </section>
    );
}
