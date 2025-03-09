import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import { fetchCharacters } from '../services/api';
import '../styles/CharacterList.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCharacters(page);
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getCharacters();
  }, [page]);

  const filteredCharacters = characters.filter(character => 
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="character-list-container">
      <div className="filter-container">
        <input 
          className="input is-rounded search-input" 
          type="text" 
          placeholder="Search characters..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="portal-loader"></div>
          <p>Opening a portal to fetch characters...</p>
        </div>
      ) : (
        <>
          <div className="characters-grid">
            {filteredCharacters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          <div className="pagination">
            <button 
              className="button is-primary is-rounded" 
              onClick={() => setPage(prev => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              Previous Page
            </button>
            <span className="current-page">Page {page}</span>
            <button 
              className="button is-primary is-rounded" 
              onClick={() => setPage(prev => prev + 1)}
            >
              Next Page
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CharacterList;