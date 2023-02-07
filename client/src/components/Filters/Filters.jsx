//importamos css:
import style from './filters.module.css';

// importamos dependencias necesarias:
import {
    A_Z,
    Z_A,
    ASCENDENTE,
    DESCENDENTE,
} from '../../Const';
import { useDispatch } from 'react-redux';
import { filterByContinent, orderByName, orderByPopulation, filterByActivities } from '../../redux/actions';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';



const Filters = ({ resetPagination }) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handlerContinent = (event) => {
        let eValue = event.target.value;
        dispatch(filterByContinent(eValue));
        resetPagination(1);
    }

    const handlerActivities = (event) => {
        let eValue = event.target.value;
        dispatch(filterByActivities(eValue));
        resetPagination(1);
    }

    const handlerChange = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        if (value === A_Z || value === Z_A) dispatch(orderByName(value));
        if (value === ASCENDENTE || value === DESCENDENTE) dispatch(orderByPopulation(value))
    }, [dispatch, value])

    return (
        <div className={style.container}>
            <div className={style.search}>
                <SearchBar resetPagination={resetPagination} />
            </div>
            <div className={style.filterContainer}>
                <div className={style.filter}>
                    <label>Ordenar por nombre: </label>
                    <select onChange={handlerChange}>
                        <option selected={true} disabled={true}>Seleccione una opcion</option>
                        <option value={A_Z}>Ascendente</option>
                        <option value={Z_A}>Descendente</option>
                    </select>
                </div>
                <div className={style.filter}>
                    <label>Ordenar por poblacion: </label>
                    <select onChange={handlerChange}>
                        <option selected={true} disabled={true}>Seleccione una opcion</option>
                        <option value={ASCENDENTE}>De menor a mayor</option>
                        <option value={DESCENDENTE}>De mayor a menor</option>
                    </select>
                </div>
                <div className={style.filter}>
                    <label>Filtrar por continente:</label>
                    <select onChange={handlerContinent}>
                        <option selected={true} disabled={true}>Seleccione una opcion</option>
                        <option value="All">Todos</option>
                        <option value="North America">Norteamerica</option>
                        <option value="South America">Sudamerica</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europa</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antartida</option>
                    </select>
                </div>
                <div className={style.filter}>
                    <label>Filtrar por actividades</label>
                    <select onChange={handlerActivities}>
                        <option selected={true} disabled={true}>Seleccione una opcion</option>
                        <option value="all">Todos los paises</option>
                        <option value="withActivities">Con actividades</option>
                        <option value="withOutActivities">Sin actividades</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters;