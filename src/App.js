import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, Illistrations, Photos, Vectors, Videos } from './pages';

import { Navbar, Overlay } from './components';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Overlay />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/illistrations">
            <Illistrations />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/vectors">
            <Vectors />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
