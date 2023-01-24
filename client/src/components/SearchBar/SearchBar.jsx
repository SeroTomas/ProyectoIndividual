//dependencias 
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { getNamedCountry } from "../../redux/actions";


const SearchBar = (props) => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState("");


    const handlerSearch = (event) => {
        event.preventDefault();
    }

    const handlerInput = (event) => {
        let value = event.target.value;
        setSearch(value);
    }

    useEffect(()=>{
        dispatch(getNamedCountry(search));
    }, [dispatch, search])


    return (
        <>
            <div className="search-container">
                <form onSubmit={handlerSearch}>
                    <input type="text" placeholder="Buscar..." onChange={handlerInput} value={search} />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </>
    )
}

export default SearchBar;