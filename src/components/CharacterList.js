import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/api';
import CharacterCard from './CharacterCard';

function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCharacters().then(data => setCharacters(data));
    }, []);

    return (
        <div className="columns is-multiline">
            {characters.map(character => (
                <div className="column is-one-quarter" key={character.id}>
                    <CharacterCard character={character} />
                </div>
            ))}
        </div>
    );
}

export default CharacterList;
