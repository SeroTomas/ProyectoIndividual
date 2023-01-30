import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import style from './home.module.css';


const Home = (props) => {

    useEffect(() => {
        axios.get('http://localhost:3001/countries/load').then(
            res => console.log(res.data)
        )
    }, [])

    return (
        <div className={style.contenedor}>
            <div className={style.text}>
                <h1>Bienvenidos</h1>
                <h1>a CountryApp</h1>
                <h4>by Tomas Silverio</h4>
            </div>
            <Link to={'/countries/inicio'}><button className={style.button}>Iniciar aplicacion</button></Link>
        </div>
    )
}

export default Home;