// importamos css
import './cards.css';

//importamos dependencias necesarias

// importamos componentes necesarios
import Card from '../card/Card';

const Cards = ({renderCountries}) => {
    return (
        <>
            <h1>esto es cards</h1>

            <div className='cards-container'>
                {
                    renderCountries?.map((country) => {
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