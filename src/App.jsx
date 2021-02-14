import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Footer } from './app/Footer';
import { MovieRoute } from './features/movies/MovieRoute';

import { Navbar } from './app/Navbar';
import { Home } from './app/Home';
import { Login } from './app/Login';
import { SignUp } from './app/SignUp';
import { ActionRoute } from './features/movies/ActionRoute';
import {
  fetchAnimationsAction,
  fetchComediesAction,
  fetchPopularsAction,
} from './app/store/actions/moviesAction';

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
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/action' component={ActionRoute} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};
