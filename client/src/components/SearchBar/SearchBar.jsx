//dependencias 
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { getNamedCountry } from "../../redux/actions";


const SearchBar = ({resetPagination}) => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState("");



    const handlerSearch = (event) => {
        event.preventDefault();

    }

    const handlerInput = (event) => {
        let value = event.target.value;
        setSearch(value);
        resetPagination(1)
    }


    useEffect(() => {
        dispatch(getNamedCountry(search))
    }, [dispatch, search])


    return (
        <>
            <div className="search-container">
                <form onChange={handlerSearch} onSubmit={(event) => { event.preventDefault() }}>
                    <input type="text" placeholder="Buscar..." onChange={handlerInput} value={search} />
                </form>
            </div>
        </>
    )
}

export default SearchBar;