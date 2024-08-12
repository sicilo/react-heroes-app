import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';
import { CharactersByHero } from '../components';

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(hero.publisher.includes('DC') ? '/dc' : '/marvel')
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <b>Alter ego: <span className='text-muted'>{hero.alter_ego}</span> </b>

            </li>
            <li className='list-group-item'>
              <b>Publisher: <span className='text-muted'>{hero.publisher}</span> </b>
            </li>
            <li className='list-group-item'>
              <b>First appearance: <span className='text-muted'>{hero.first_appearance}</span>  </b>
            </li>
          </ul>
          <h3>Characters</h3>
          <h3><CharactersByHero alter_ego={hero.alter_ego} characters={hero.characters} /></h3>
          <hr />
          <button className='btn btn-primary' onClick={onNavigateBack}>Regresar</button>
        </div>
      </div>
    </>
  )
}
