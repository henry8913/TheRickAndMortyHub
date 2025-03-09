import React from 'react';

function Header() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="https://rickandmortyapi.com/icons/icon-512x512.png" alt="Rick and Morty Logo" width="auto" />
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>
                    <a className="navbar-item" href="/about">
                        About
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;

