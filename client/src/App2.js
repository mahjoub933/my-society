
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './components/accueil';
import Apropos from './components/apropos2';
import ListDeparts from './components/listDeparts2';
import HitDetails from './components/hitDetails2';
import Photos from './components/photos2';
//import Presentation from './components/presentation2';
import {Switch, Link, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    /*
    <div>
      <Accueil/>
      <Apropos/>
      <ListDeparts/>
    </div>
    */
    <Router>
        <nav className="navbar navbar-expand navbar-brand m-2">
            <ul className="navbar-nav">
                <li>
                    <Link className="nav-link" to="/accueil">Accueil</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/apropos">A propos</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/listDeparts">Départements</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/photos">Photos</Link>
                </li>
            </ul>
        </nav>

        <div className="m-4">
            <Switch>
                <Route path="/accueil" component={Accueil}></Route>
                <Route path="/apropos" component={Apropos}></Route>
                <Route path="/listDeparts" component={ListDeparts}></Route>
                <Route path="/photos" component={Photos}></Route>
                <Route path="/hitDetails/:id" component={HitDetails}></Route>
            </Switch>

        </div>
    </Router>
  );
}

export default App;
