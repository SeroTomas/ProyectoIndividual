import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './home.css';


const Home = (props) => {

    useEffect(() => {
        axios.get('http://localhost:3001/countries/load').then(
            res => console.log(res.data)
        )
    }, [])

    return (
        <div className="contenedor">
            <h1>Estoy en Home</h1>
            <Link to={'/countries/inicio'}><button>Inicio</button></Link>
        </div>
    )
}

export default Home;