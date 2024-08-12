import React from 'react'

export const CharactersByHero = ({ alter_ego, characters }) => {
    const charactersArray = characters.split(',');

    return charactersArray.filter(character => alter_ego !== character).map(character => (<span key={character} className="badge text-bg-secondary me-1">{character}</span>))
}
