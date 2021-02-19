import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Footer } from './app/Footer';
import { PeopleRoute } from './features/people/PeopleRoute';
import { MovieRoute } from './features/movies/movieRoute/MovieRoute';
import { ReviewRoute } from './features/movies/movieRoute/ReviewRoute';
import { AddReview } from './features/movies/movieRoute/AddReview';
import { Navbar } from './app/Navbar';
import { Home } from './app/Home';
import { Login } from './app/Login';
import { SignUp } from './app/SignUp';
import {
  fetchAnimationsAction,
  fetchComediesAction,
  fetchPopularsAction,
} from './app/store/actions/moviesAction';

import { GenreRoute } from './features/movies/GenreRoute';

import { ProfileRoute } from './features/people/ProfileRoute';

import { SearchResults } from './features/search/SearchResults';
import { NotFound404 } from './app/NotFound404';

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
        <Route path='/search/:query' component={SearchResults} />
        <Route exact path='/movie/:id' component={MovieRoute} />
        <Route exact path='/show/:id' component={MovieRoute} />
        <Route path='/genre/:genre' component={GenreRoute} />
        <Route exact path='/people' component={PeopleRoute} />
        <Route path='/profile/:id' component={ProfileRoute} />
        <Route exact path='/reviews' component={ReviewRoute} />
        <Route exact path='/addReview' component={AddReview} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound404} />
      </Switch>
      <Footer />
    </Router>
  );
};
