import style from './cardDetail.module.css'

import { useSelector } from "react-redux";


const CardDetail = (props) => {
    const { id,
        name,
        flag,
        continent,
        population,
        area,
        capital,
        subregion,
        activities } = useSelector((state) => state.detail)

    return (
        <>
            <div className={style.detailContainer}>
                <div className={style.country}>
                    <div className= {style.flag}>
                        <img src={flag} alt={`Bandera de ${name}`} />
                    </div>
                    <div className={style.info}>
                        <h1>{id}</h1>
                        <p>Pais: {name}</p>
                        <p>Capital: {capital}</p>
                        <p>Continente: {continent}</p>
                        <p>Subrregion: {subregion}</p>
                        <p>Poblacion: {population}</p>
                        <p>Area: {area} km2</p>
                    </div>
                </div>
                <div className={style.activities}>
                    {activities?.map(activity => {
                        return (
                            <div className={style.activityContainer}>
                                <p>Actividad: {activity.name}</p>
                                <p>Dificultad: {activity.difficulty}</p>
                                <p>Duracion: {activity.duration}</p>
                                <p>Temporada: {activity.season}</p>
                            </div>
                        )
                    })}
                </div>


            </div>
        </>
    )
}

export default CardDetail;