import React from 'react'
import { useForm } from '../../common'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'
import { HeroCard } from '../components'

export const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search)

    const heroes = getHeroesByName(q)

    const showSearch = q.length === 0;

    const showError = (q.length !== 0 && heroes.length === 0);

    const { searchText, onInputChange } = useForm({
        searchText: ''
    })

    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${searchText.trim()}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr />
            <section className="row">
                <section className='col-5'>
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder='Search a Hero' name="searchText" aria-describedby="button-addon2" value={searchText} onChange={onInputChange} />
                            <button className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
                        </div>
                    </form>
                </section>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    <div className='alert alert-primary animate__animated animate__bounce animate__fadeIn' style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>
                    <div className='alert alert-danger animate__animated animate__bounce animate__fadeIn' style={{ display: showError ? '' : 'none' }}>
                        Any Hero match with the <b>{q}</b> query
                    </div>

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}
