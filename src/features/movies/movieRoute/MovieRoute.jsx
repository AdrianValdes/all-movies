import React, { useEffect } from 'react';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../../../app/hooks/useFetch';
import {
  IMAGE_BASE_URL_HIGH,
  getCertificationMovie,
  getCertificationShow,
  getGenresString,
  getTrailerKey,
  getCast,
} from '../../../app/shared';
import { Spinner } from '../../../app/shared/components';
import { MovieBanner } from './MovieBanner';
import { Recommendations } from './Recommendations';
import { Cast } from './Cast';
import { ReviewSection } from './ReviewSection';
import { Trailer } from './Trailer';
import { pickShowOrMovie } from '../../../app/shared/helpers/pickShowOrMovie';

export const MovieRoute = ({ location }) => {
  const language = location?.state?.language
    ? location?.state?.language
    : 'language=en-US';
  const { id } = useParams();
  const { pathname } = useLocation();

  const urLSingleMovieWithAll = pickShowOrMovie({ pathname, id, language });

  const { dataApi, loadingApi, errorApi } = useFetch(urLSingleMovieWithAll);
  const {
    genres,
    credits,
    recommendations,
    videos,
    release_dates,
    runtime,
    first_air_date,
    tagline,
    reviews,
    poster_path,
    title,
    release_date,
    backdrop_path,
    overview,
    name,
    vote_average,
    content_ratings,
    episode_run_time,
  } = dataApi;

  const bannerImage = `${IMAGE_BASE_URL_HIGH}/${backdrop_path}`;

  const certification = content_ratings
    ? getCertificationShow(content_ratings?.results)
    : getCertificationMovie(release_dates?.results);

  const genresString = getGenresString(genres);

  const trailerKey = getTrailerKey(videos?.results);

  const crew = credits && credits.crew.slice(0, 50);

  const cast = getCast(credits?.cast);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [urLSingleMovieWithAll]);

  if (loadingApi) return <Spinner />;
  if (errorApi || dataApi.success === false) return <Redirect to='/404' />;

  return (
    <main>
      <MovieBanner
        movieId={id}
        imageUrl={bannerImage}
        poster_path={poster_path}
        title={title || name}
        release_date={release_date || first_air_date}
        vote_average={vote_average}
        overview={overview}
        trailerKey={trailerKey}
        bannerImage={bannerImage}
        certification={certification}
        genresString={genresString}
        runtime={runtime}
        tagline={tagline}
        crew={crew}
        episode_run_time={episode_run_time}
      />
      <div>
        <Cast cast={cast} />
        <ReviewSection
          reviews={reviews.results}
          title={title || name}
          release_date={release_date || first_air_date}
          poster_path={poster_path}
        />
        <Trailer trailerKey={trailerKey} poster_path={poster_path} />
        <Recommendations
          language={language}
          recommendations={recommendations.results}
        />
      </div>
    </main>
  );
};
