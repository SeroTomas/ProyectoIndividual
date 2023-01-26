// importamos css
import './cards.css';

//importamos dependencias necesarias
import { useSelector } from 'react-redux';

// importamos componentes necesarios
import Card from '../card/Card';

const Cards = () => {
    const countries = useSelector(state => state.countries)

    return (
        <>
            <h1>esto es cards</h1>

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