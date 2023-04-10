import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Toolbar from './components/Toolbar';
import Home from './containers/Home';
import Search from './containers/Search';



function App() {
  

  return (
    <Router>
      <Toolbar />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
