import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auxSortName, validate } from "../../Const";
import { getCountries, getActToState } from "../../redux/actions";
import ActivityCard from "../ActivityCard/ActivityCard";

const Form = () => {

    const dispatch = useDispatch();
    const dbCountries = useSelector(state => state.dbCountries).sort(auxSortName);
    const activities = useSelector(state => state.activities)

    const [form, setForm] = useState({
        name: '',
        difficulty: 0,
        duration: '',
        season: '',
        countries: []
    })

    const [error, setError] = useState({})

    const handlerInput = (event) => {

        let property = event.target.name;
        let value = event.target.value;
        
        // si property es countries agregamos el pais seleccionado al array.
        //sino se setea normalmente.

        property === "countries" ? setForm({
            ...form,
            countries: [...form.countries, value]
        }) : setForm({
            ...form,
            [property]: value
        })

        // implementamos las validaciones

        setError(validate({
            ...form,
            [property]: value
        }))

    }

    //generamos un filter para borrar algun pais.
    const handlerclick = (id) => {
        setForm({
            ...form,
            countries: [...form.countries].filter(country => country !== id)
        })
        // agregamos la validacion por si se borran todos los paises.
        setError(validate({
            ...form,
            countries: [...form.countries].filter(country => country !== id)
        }))
    }

    //cargamos la actividad al estado global
    const handlerSubmit = (event) => {
        event.preventDefault()
        //validamos que no haya nada sin completar
        if (form.name === "" ||
            form.duration === "" ||
            form.difficulty === "" ||
            form.season === "" ||
            form.countries.length === 0) {
            return alert('Debe llenar los campos')
        }
        //buscamos si se esta tratando de cargar una actividad con mismo nombre
        let repeat = activities.filter(activity => activity.name === form.name);

        if (!repeat.length) {
            dispatch(getActToState(form))
            setForm({
                name: '',
                difficulty: '-',
                duration: '-',
                season: '-',
                countries: []
            })

        } else {
            alert('la actividad esta repetida')
            setForm({
                name: '',
                difficulty: '-',
                duration: '-',
                season: '-',
                countries: []
            })
        }
    }

    useEffect(() => {
        dispatch(getCountries());
        setError(validate({ ...form }))
    }, [dispatch])

    return (
        <>
            <div>
                <form onSubmit={handlerSubmit}>
                    <label htmlFor="name">Nombre:
                        <input type="text" name="name" value={form.name} onChange={handlerInput} />
                        {error.name && <p>{error.name}</p>}
                    </label>

                    <label htmlFor="difficulty">Dificultad:
                        <select name="difficulty" onChange={handlerInput}>
                            <option value="-">Seleccione una Dificultad</option>
                            <option value="facil">Facil</option>
                            <option value="moderada">Moderada</option>
                            <option value="dificil">Dificil</option>
                        </select>
                        {error.difficulty && <p>{error.difficulty}</p>}
                    </label>

                    <label htmlFor="duration">Duracion:
                        <select name="duration" onChange={handlerInput}>
                            <option value="-" >Seleccione una duracion</option>
                            <option value="corta">Corta</option>
                            <option value="media">Media</option>
                            <option value="prolongada">Prolongada</option>
                        </select>
                        {error.duration && <p>{error.duration}</p>}
                    </label>

                    <label htmlFor="season">Temporada:
                        <select name="season" onChange={handlerInput}>
                            <option value="-">Seleccione una temporada</option>
                            <option value="verano">Verano</option>
                            <option value="primavera">Primavera</option>
                            <option value="otoño">Otoño</option>
                            <option value="invierno">Invierno</option>
                        </select>
                        {error.season && <p>{error.season}</p>}
                    </label>

                    <label htmlFor="countries">Paises:
                        <select name="countries" onChange={handlerInput}>
                            {dbCountries.map(country => <option key={country.id} value={country.id}>{country.name}</option>)}
                        </select>
                        {error.countries && <p>{error.countries}</p>}
                    </label>

                    {form.countries?.map(id => {
                        return (
                            <div key={id}>
                                <button onClick={() => { handlerclick(id) }}>X</button>
                                <h2>{id}</h2>
                            </div>
                        )
                    })}
                    <button type="submit">Crear Actividad</button>
                </form>
            </div>

            <div>
                <h2>actividades que quiere crear</h2>
                <ActivityCard />
            </div>


        </>
    )
}

export default Form;