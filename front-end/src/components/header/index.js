import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    return (
        <header>
            <div className="topo-conteudo">
                <Link to="/" className="topo-logo-box">
                    <p className="topo-nome-empresa">Pokemon</p>
                </Link>

                <nav className="topo-links">
                    <Link to="/" className="topo-link">Criar Conta</Link>
                    <Link to="/login" className="topo-link">Login</Link>
                </nav>

            </div>
        </header>
    );
}

