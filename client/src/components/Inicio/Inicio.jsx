import Cards from '../Cards/Cards'
import Filters from '../Filters/Filters';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import style from './inicio.module.css';

const Inicio = (props) => {

    const countries = useSelector((state)=> state.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const lastCountry = currentPage * 10;
    const firstCountry = lastCountry - 10;
    const currentCountry = countries.slice(firstCountry, lastCountry);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (


        <div className={style.inicio}>
            <SearchBar resetPagination = {setCurrentPage}/>
            <Filters resetPagination = {setCurrentPage}/>
            <Cards renderCountries = {currentCountry}/>
            <Pagination 
                countries = {countries.length}
                paginado = {paginado}
            />
        </div>
    )
}

export default Inicio;