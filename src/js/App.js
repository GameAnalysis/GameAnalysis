import Home from './routes/Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Libreria from "./routes/Libreria";
import Proprietari from "./routes/Proprietari";
import Salva from "./routes/Salva";
import Corridoio from "./routes/Corridoio";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/libreria" component={Libreria}/>
        <Route exact path="/proprietari" component={Proprietari}/>
        <Route exact path="/salva" component={Salva}/>
        <Route exact path="/corridoio" component={Corridoio}/>
      </Switch>
    </Router>
  );
}

export default App;
