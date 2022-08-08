import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, Illistrations, Photos, Vectors, Videos, Collection, Download } from './pages';
import { Navbar, Overlay, Pagination, PushArrow } from './components';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Overlay />
            <Main />
            <Pagination />
          </Route>
          <Route path="/illistrations">
            <Overlay />
            <Illistrations />
            <Pagination />
          </Route>
          <Route path="/photos">
            <Overlay />
            <Photos />
            <Pagination />
          </Route>
          <Route path="/vectors">
            <Overlay />
            <Vectors />
            <Pagination />
          </Route>
          <Route path="/videos">
            <Overlay />
            <Videos />
            <Pagination />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/download/:imageId">
            <Download />
          </Route>
        </Switch>
        <PushArrow />
      </Router>
    </div>
  );
};
export default App;
