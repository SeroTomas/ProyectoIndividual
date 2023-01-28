

import { useState } from "react";
import { Link } from "react-router-dom";
import './navBar.css';

const NavBar = (props) => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <div  className="brand-name">
                <Link to={'/countries/inicio'}> <h1>Countries</h1> </Link>
            </div>
            <div>
                <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="24px"
                        height="24px"><path
                            d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
                    </svg>
                </button>
            </div>
            <div className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
                <ul>
                    <li>
                        <Link to={'/countries/Inicio'}> <p>Inicio</p> </Link>
                    </li>
                    <li>
                        <Link to={'/countries/form'}> <p>Crear actividad</p> </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;