import { useEffect } from 'react';
import { getCountries } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../card/Card';

const Cards = (props) => {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])


    return (
        <div>
            <h3>esto es cards</h3>


            <Card
                id={countries[0].id}
                name={countries[0].name}
                flag={countries[0].flag}
                continent={countries[0].continent}
            />

            <Card
                id={countries[1].id}
                name={countries[1].name}
                flag={countries[1].flag}
                continent={countries[1].continent}
            />

            <Card
                id={countries[2].id}
                name={countries[2].name}
                flag={countries[2].flag}
                continent={countries[2].continent}
            />
        </div>
    )
}

export default Cards;