import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './app/Footer';
import { MovieRoute } from './app/MovieRoute';

import { Navbar } from './app/Navbar';
import { MoviesDashboard } from './features/movies/MoviesDashboard';

export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path='/movie/:id' component={MovieRoute} />

      <Route exact path='/'>
        <MoviesDashboard />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
