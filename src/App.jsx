import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MoviesProvider } from './app/context/movies/movies';
import { Footer } from './app/Footer';

import { Navbar } from './app/Navbar';
import { MoviesDashboard } from './features/movies/MoviesDashboard';

export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <MoviesProvider>
        <Route exact path='/'>
          <MoviesDashboard />
        </Route>
      </MoviesProvider>
    </Switch>
    <Footer />
  </Router>
);
