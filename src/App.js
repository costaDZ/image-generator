import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, Illistrations, Photos, Vectors, Videos, Collection } from './pages';

import { Navbar, Overlay, Pagination, PushArrow } from './components';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Overlay />
        <Switch>
          <Route exact path="/">
            <Main />
            <Pagination />
          </Route>
          <Route path="/illistrations">
            <Illistrations />
            <Pagination />
          </Route>
          <Route path="/photos">
            <Photos />
            <Pagination />
          </Route>
          <Route path="/vectors">
            <Vectors />
            <Pagination />
          </Route>
          <Route path="/videos">
            <Videos />
            <Pagination />
          </Route>
          <Route>
            <Collection path="/collection" />
          </Route>
        </Switch>
        <PushArrow />
      </Router>
    </div>
  );
}

export default App;
