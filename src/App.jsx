import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './app/Footer';
import { MovieRoute } from './features/movies/MovieRoute';

import { Navbar } from './app/Navbar';
import { Home } from './app/Home';
import { Login } from './app/Login';
import { SignUp } from './app/SignUp';

export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path='/movie/:id' component={MovieRoute} />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </Switch>
    <Footer />
  </Router>
);
