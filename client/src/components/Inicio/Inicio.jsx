import Cards from '../Cards/Cards'
import Filters from '../Filters/Filters';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import style from './inicio.module.css';

const Inicio = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


    return (


        <div className={style.inicio}>
            <SearchBar/>
            <Filters />
            <Cards />
        </div>
    )
}

export default Inicio;