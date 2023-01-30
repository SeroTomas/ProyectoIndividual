//importamos css:
import './filters.css';

// importamos dependencias necesarias:
import {
    A_Z,
    Z_A,
    ASCENDENTE,
    DESCENDENTE,
} from '../../Const';
import { useDispatch } from 'react-redux';
import { filterByContinent, orderByName, orderByPopulation } from '../../redux/actions';
import { useState } from 'react';
import { useEffect } from 'react';



const Filters = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handlerContinent = (event) => {
        let eValue = event.target.value;
        dispatch(filterByContinent(eValue));
    }

    const handlerChange = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        if (value === A_Z || value === Z_A) dispatch(orderByName(value));
        if (value === ASCENDENTE || value === DESCENDENTE) dispatch(orderByPopulation(value))
    }, [dispatch, value])

    return (
        <div className="filters-container">

            <select onChange={handlerChange}>
                <option>Ordenar alfabeticamente</option>
                <option value={A_Z}>Ascendente</option>
                <option value={Z_A}>Descendente</option>
            </select>

            <select onChange={handlerChange}>
                <option>Ordenar por poblacion</option>
                <option value={ASCENDENTE}>De menor a mayor</option>
                <option value={DESCENDENTE}>De mayor a menor</option>
            </select>

            <select onChange={handlerContinent}>
                <option>Filtrar por continente</option>
                <option value="All">All</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctica">Antarctica</option>

            </select>

        </div>
    )
}

export default Filters;