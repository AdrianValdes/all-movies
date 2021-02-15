import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Footer } from './app/Footer';
import { MovieRoute } from './features/movies/MovieRoute';

import { Navbar } from './app/Navbar';
import { Home } from './app/Home';
import { Login } from './app/Login';
import { SignUp } from './app/SignUp';
/* import { PopularRoute } from './features/movies/Routes/PopularRoute'; */

import {
  fetchAnimationsAction,
  fetchComediesAction,
  fetchPopularsAction,
} from './app/store/actions/moviesAction';

import { GenreRoute } from './features/movies/GenreRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComediesAction());
    dispatch(fetchAnimationsAction());
    dispatch(fetchPopularsAction());
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/movie/:id' component={MovieRoute} />
        <Route path='/genre/:genre' component={GenreRoute} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};
