import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './app/Footer';
import { Navbar } from './app/Navbar';
import { Example } from './features/example/Example';

export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <Example />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
