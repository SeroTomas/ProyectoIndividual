// importamos css
import './cards.css';

//importamos dependencias necesarias
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../../redux/actions';


// importamos componentes necesarios
import SearchBar from '../SearchBar/SearchBar';
import Card from '../card/Card';


const Cards = (props) => {

    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);


    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


    return (
        <>
            <h1>esto es cards</h1>
            <SearchBar />

            <div className='cards-container'>
                {
                    countries?.map((country) => {
                        return (
                            <Card
                                key={country.id}
                                id={country.id}
                                name={country.name}
                                flag={country.flag}
                                continent={country.continent}
                            />
                        )
                    })

                }

            </div>
        </>

    )
}

export default Cards;