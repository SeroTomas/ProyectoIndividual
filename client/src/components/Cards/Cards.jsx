// importamos css
import style from'./cards.module.css';

//importamos dependencias necesarias
import { Link } from 'react-router-dom';

// importamos componentes necesarios
import Card from '../card/Card';

const Cards = ({ renderCountries }) => {
    return (
        <>
            <div className={style.cardsContainer}>
                {
                    renderCountries?.map((country) => {
                        return (

                            <Card
                                key={country.id}
                                id={country.id}
                                name={country.name}
                                flag={country.flag}
                                continent={country.continent}
                                capital={country.capital}
                            />

                        )
                    })
                }
            </div>
        </>

    )
}

export default Cards;