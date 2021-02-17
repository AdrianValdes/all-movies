import React, { useEffect } from 'react';
import { useFetch } from '../../../app/hooks/useFetch';

import {
  KEY,
  SINGLE_MOVIE_BASE_URL,
  IMAGE_BASE_URL_HIGH,
} from '../../../app/urls';
import { Spinner } from '../../../app/shared/components';
import { MovieBanner } from './MovieBanner';
import { Recommendations } from './Recommendations';
import { Cast } from './Cast';
import { ReviewSection } from './ReviewSection';
import { Trailer } from './Trailer';

export const MovieRoute = ({ location }) => {
  const { id } = location.state;

  const urLSingleMovieWithAll = `${SINGLE_MOVIE_BASE_URL}/${id}?api_key=${KEY}&append_to_response=videos,credits,similar_movies,recommendations,release_dates,reviews,keywords`;

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
    reviews,
    poster_path,
    title,
    release_date,
    backdrop_path,
    overview,
    vote_average,
  } = dataApi;

  const bannerImage = `${IMAGE_BASE_URL_HIGH}/${backdrop_path}`;
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [urLSingleMovieWithAll]);

  if (loadingApi) return <Spinner />;

  if (errorApi || dataApi.success === false) {
    return (
      <main>
        <p>There has been an error: {errorApi || dataApi.status_message} </p>
      </main>
    );
  }
  return (
    <main>
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
        <Cast cast={cast} />
        <ReviewSection reviews={reviews.results} />
        <Trailer trailerKey={trailerKey} poster_path={poster_path} />
        <Recommendations recommendations={recommendations.results} />
      </div>
    </main>
  );
};
