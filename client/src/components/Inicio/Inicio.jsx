import Cards from '../Cards/Cards'
import Filters from '../Filters/Filters';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import style from './inicio.module.css';

const Inicio = (props) => {

    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    // generamos la logica para el paginado
    const [currentPage, setCurrentPage] = useState(1);
    const lastCountry = currentPage * 10;
    const firstCountry = lastCountry - 10;
    const currentCountry = countries.slice(firstCountry, lastCountry);

    return (
        <div className={style.inicio}>
            <div className={style.filters}>
                <Filters resetPagination={setCurrentPage} />
            </div>
            <div className={style.cards}>
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    countries={countries.length}
                />
                <Cards renderCountries={currentCountry} />
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    countries={countries.length}
                />
            </div>
        </div>
    )
}

export default Inicio;