import style from './App.module.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Inicio from './components/Inicio/Inicio';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import CardDetail from './components/cardDetail/CardDetail';


function App() {
  return (
    <div className={style.App}>
      <Route path={'/countries'} component ={NavBar}/>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/countries/inicio'} component={Inicio}/>
      <Route exact path = {'/countries/detail/:id'} component = {CardDetail}/>
      <Route exact path={'/countries/form'} component={Form}/>
    </div>
  );
}

export default App;
