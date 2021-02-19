import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../../app/hooks/useFetch';
import { IMAGE_BASE_URL_HIGH, getCertification } from '../../../app/shared';
import { Spinner } from '../../../app/shared/components';
import { MovieBanner } from './MovieBanner';
import { Recommendations } from './Recommendations';
import { Cast } from './Cast';
import { ReviewSection } from './ReviewSection';
import { Trailer } from './Trailer';
import { pickShowOrMovie } from '../../../app/shared/helpers/pickShowOrMovie';

export const MovieRoute = ({ location }) => {
  const { id, language } = location.state;
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
    vote_average,
  } = dataApi;

  const bannerImage = `${IMAGE_BASE_URL_HIGH}/${backdrop_path}`;
  const certification = getCertification(release_dates?.results);

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
      />
      <div>
        <Cast cast={cast} />
        <ReviewSection
          reviews={reviews.results}
          title={title}
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
