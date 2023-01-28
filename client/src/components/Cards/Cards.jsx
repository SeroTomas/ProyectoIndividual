// importamos css
import './cards.css';

//importamos dependencias necesarias
import { useSelector } from 'react-redux';

// importamos componentes necesarios
import Card from '../card/Card';

const Cards = () => {
    const countries = useSelector(state => state.countries)
    const continent = useSelector(state => state.continent);

    return (
        <>
            <h1>esto es cards</h1>

            <div className='cards-container'>
                {
                    continent.length ? continent?.map((country) => {
                        return (
                            <Card
                                key={country.id}
                                id={country.id}
                                name={country.name}
                                flag={country.flag}
                                continent={country.continent}
                            />
                        )}) 
                        : countries?.map((country) => {
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