import { heroes } from "../data/heroes"

export const getHeroesByName = (name = '') => {
    if (name.length === 0) return [];
    const result = heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    return result !== undefined ? result : [];
}