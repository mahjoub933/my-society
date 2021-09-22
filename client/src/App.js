
import Accueil from './components/accueil';
import Apropos from './components/apropos';
import ListDeparts from './components/listDeparts';
import Photos from './components/photos';
import HitDetails from './components/hitDetails';
//import Presentation from './components/presentation';
import {Switch, Link, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    /*<div>
      <Accueil/>
      <Apropos/>
      <ListDeparts/>
    </div>*/
    <Router>
        <nav>
            <ul>
                <li>
                    <Link to="/accueil">Accueil</Link>
                </li>
                <li>
                    <Link to="/apropos">A propos</Link>
                </li>
                <li>
                    <Link to="/listDeparts">Départements</Link>
                </li>
                <li>
                    <Link to="/photos">Photos</Link>
                </li>
            </ul>
        </nav>

      <div>
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
