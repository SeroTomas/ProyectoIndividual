import style from './card.module.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

//import { restarDetail } from '../../redux/actions';
import { getDetail } from '../../redux/actions';

const Card = ({ id, name, flag, continent, capital }) => {

    const dispatch = useDispatch()

    const handlerDetail = () => {
        //dispatch(restartDetail())
        dispatch(getDetail(id))
    }

    return (
        <div className={style.cardContainer}>
            <Link to={`/countries/detail/${id}`} onClick={handlerDetail}>
                <div className={style.imgContainer}>
                    <img src={flag} alt={`Bandera de ${name}`} />
                </div>
                <div className={style.infoContainer}>
                    <div className={style.infoSup}>
                        <h2>{name}</h2>
                        <h5>{id}</h5>
                    </div>
                    <div className={style.infoInf}>
                        <h3>{capital}</h3>
                        <h4>{continent}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;