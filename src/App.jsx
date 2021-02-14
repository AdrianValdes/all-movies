import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './app/Footer';
import { MovieRoute } from './features/movies/MovieRoute';

import { Navbar } from './app/Navbar';
import { Home } from './app/Home';
import { Login } from './app/Login';
import { SignUp } from './app/SignUp';
import { ActionRoute } from './features/movies/ActionRoute';

export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path='/movie/:id' component={MovieRoute} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/action' component={ActionRoute} />
      <Route exact path='/' component={Home} />
    </Switch>
    <Footer />
  </Router>
);
