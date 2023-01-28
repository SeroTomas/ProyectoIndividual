import './card.css';

const Card = ({id, name, flag, continent, population}) => {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={flag} alt={`Bandera de ${name}`}/>
            </div>
            <div className="info-container">
                <h2>{id}</h2>
                <h3>{name}</h3>
                <h3>{continent}</h3>
            </div>
        </div>
    )
}

export default Card;