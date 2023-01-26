//importamos css:
import './filters.css';

// importamos dependencias necesarias:
import { A_Z, Z_A } from '../../Const';
import { useDispatch, useSelector } from 'react-redux';
import { orderByName } from '../../redux/actions';
import { useState } from 'react';
import { useEffect } from 'react';



const Filters = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handlerChange = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        if (value === A_Z || value === Z_A) dispatch(orderByName(value));
    }, [dispatch, value])

    return (
        <div className="filters-container">

            <select onChange={handlerChange}>
                <option>Ordenar alfabeticamente</option>
                <option value={A_Z}>Ascendente</option>
                <option value={Z_A}>Descendente</option>
            </select>

        </div>
    )
}

export default Filters;