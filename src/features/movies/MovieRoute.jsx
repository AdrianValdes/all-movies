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
  const urLSingleMovieWithAll = `${SINGLE_MOVIE_BASE_URL}/${id}?api_key=${KEY}&append_to_response=videos,credits,similar_movies,recommendations,release_dates`;

  const urlVideos = `${SINGLE_MOVIE_BASE_URL}/${id}/videos?api_key=${KEY}&language=en-US`;
  const urlCredits = `${SINGLE_MOVIE_BASE_URL}/${id}/credits?api_key=${KEY}`;
  const bannerImage = `${IMAGE_BASE_URL_HIGH}/${backdrop_path}`;

  const { dataApi, loadingApi, errorApi } = useFetch(urLSingleMovieWithAll);
  const {
    genres,
    credits,
    recommendations,
    videos,
    similar_movies,
    release_dates,
    runtime,
    tagline,
  } = dataApi;

  console.log(dataApi);

  const certification =
    release_dates?.results[0]?.release_dates[0]?.certification;

  let genresString;
  if (genres !== undefined) {
    genresString = genres.map((genre) => genre.name).join(', ');
  }

  let trailerKey;
  if (videos !== undefined) {
    if (videos.results !== undefined && videos.results.length > 0) {
      const [trailer] = videos.results;
      trailerKey = trailer.key;
    }
  }

  let crew;
  if (credits !== undefined) {
    crew = credits.crew.slice(0, 50);
  }

  let cast = [];
  if (credits !== undefined) {
    if (credits.cast && credits.cast.length > 0) {
      cast = credits.cast.slice(0, 10);
    }
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
        certification={certification}
        genresString={genresString}
        runtime={runtime}
        tagline={tagline}
        crew={crew}
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
