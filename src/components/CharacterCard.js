import React, { useState, useEffect } from 'react';

function CharacterCard({ character }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={character.image} alt={character.name} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{character.name}</p>
                        <p className="subtitle is-6">{character.species}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
