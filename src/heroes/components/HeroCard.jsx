import React from 'react'
import { Link } from 'react-router-dom'
import { CharactersByHero } from './CharactersByHero'




export const HeroCard = ({
    id
    , superhero
    , publisher
    , alter_ego
    , first_appearance
    , characters
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`

    return (
        <>
            <section className="col animate__animated animate__bounce animate__fadeInLeft">
                <aside className="card shadow-sm">
                    <div className="row no-gutters">
                        <div className="col-4"><img src={heroImageUrl} className='card-img ' alt={superhero} /></div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>

                                <CharactersByHero alter_ego={alter_ego} characters={characters} />
                                <p className="card-text">
                                    <small className="text-muted">
                                        {first_appearance}
                                    </small>
                                </p>

                                <Link to={`/hero/${id}`}>
                                    Más información
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </>
    )
}
