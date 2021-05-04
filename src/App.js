
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {Login} from './pages/login/Login'
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Policies } from './pages/policy/Policies';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

        <Route exact path="/">
            <Home />
          </Route>


          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/policy">
            <Policies />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
