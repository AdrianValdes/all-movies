import React from 'react';
import { useFetch } from '../../app/hooks/useFetch';

import {
  KEY,
  SINGLE_MOVIE_BASE_URL,
  IMAGE_BASE_URL_HIGH,
} from '../../app/urls';
import { Spinner } from '../../app/shared/components';
import { MovieBanner } from './MovieBanner';
import { RecommenSection } from './RecommenSection';
import { CastSection } from './CastSection';
import { ReviewSection } from './ReviewSection';
import { TrailerSection } from './TrailerSection';

export const MovieRoute = ({ location }) => {
  const {
    poster_path,
    title,
    id,
    release_date,
    backdrop_path,
    overview,
    vote_average,
  } = location.state.movie;

  const urlVideos = `${SINGLE_MOVIE_BASE_URL}/${id}/videos?api_key=${KEY}&language=en-US`;
  const urlCredits = `${SINGLE_MOVIE_BASE_URL}/${id}/credits?api_key=${KEY}`;
  const bannerImage = `${IMAGE_BASE_URL_HIGH}/${backdrop_path}`;

  const { dataApi } = useFetch(urlVideos);
  const { dataApi: credits, loadingApi, errorApi } = useFetch(urlCredits);

  let trailerKey;
  if (dataApi.results !== undefined && dataApi.results.length > 0) {
    const [trailer] = dataApi.results;
    trailerKey = trailer.key;
  }

  let cast = [];
  if (credits.cast && credits.cast.length > 0) {
    cast = credits.cast.slice(0, 10);
  }

  if (loadingApi) return <Spinner />;
  if (errorApi) return <p>There has been an error: {errorApi} </p>;
  return (
    <div>
      <MovieBanner
        imageUrl={bannerImage}
        poster_path={poster_path}
        title={title}
        release_date={release_date}
        vote_average={vote_average}
        overview={overview}
        trailerKey={trailerKey}
        bannerImage={bannerImage}
      />
      <div>
        <CastSection cast={cast} />
        <ReviewSection />
        <TrailerSection trailerKey={trailerKey} poster_path={poster_path} />
        {/* <RecommenSection results={results} /> */}
      </div>
    </div>
  );
};
