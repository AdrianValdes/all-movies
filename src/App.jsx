import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MoviesProvider } from './app/context/movies/movies';
import { Footer } from './app/Footer';

import { Navbar } from './app/Navbar';
import { Example } from './features/example/Example';
import { MoviesDashboard } from './features/movies/MoviesDashboard';

export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <MoviesProvider>
        <Route>
          <MoviesDashboard />
        </Route>
      </MoviesProvider>
      <Route exact path='/'>
        <Example />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
