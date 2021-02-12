import React from 'react';
import styled from 'styled-components';
import { Row } from './MoviesRow';
import { useFetch } from '../../app/hooks/useFetch';
import { ImageWrapper, Img, RowCard } from './MovieCard';
import { KEY, IMAGE_BASE_URL_LOW, SINGLE_MOVIE_BASE_URL } from '../../app/urls';

const IndividualPageCard = styled.div`
  width: 300px;
  min-width: 300px;
  margin-left: 40px;
`;

export const MovieRoute = ({ location }) => {
  const { poster_path, title, id } = location.state;

  const urlSingleMovieWithALL = `${SINGLE_MOVIE_BASE_URL}/${id}?api_key=${KEY}&append_to_response=videos,credit`;
  const urlVideos = `${SINGLE_MOVIE_BASE_URL}/${id}/videos?api_key=${KEY}&language=en-US`;
  const urlCredits = `${SINGLE_MOVIE_BASE_URL}/${id}/credits?api_key=${KEY}`;

  const { dataApi, loadingApi, errorApi } = useFetch(urlVideos);

  let trailerKey;
  if (dataApi.results !== undefined && dataApi.results.length > 0) {
    const [trailer] = dataApi.results;
    trailerKey = trailer.key;
  }

  const { dataApi: credits } = useFetch(urlCredits);
  let cast = [];
  if (credits.cast && credits.cast.length > 0) {
    cast = credits.cast.slice(0, 10);
  }

  return (
    <div>
      <h1>Movie:{title}</h1>
      <IndividualPageCard>
        <ImageWrapper>
          <Img alt='movie' src={`${IMAGE_BASE_URL_LOW}${poster_path}`} />
        </ImageWrapper>
      </IndividualPageCard>
      <div>
        {cast.length > 0 ? (
          <Row style={{ maxWidth: '1200px' }}>
            {cast.map((person) => (
              <RowCard key={person.id}>
                <ImageWrapper>
                  <Img
                    src={`${IMAGE_BASE_URL_LOW}${person.profile_path}`}
                    alt={person.name}
                  />
                </ImageWrapper>
              </RowCard>
            ))}
          </Row>
        ) : (
          <p>
            We do not have any cast added to this movie. You can help by adding
            some!
          </p>
        )}
      </div>
      <div>
        {trailerKey ? (
          <iframe
            title='trailer'
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${trailerKey}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
        ) : (
          <p>There is no trailer for this movie yet, sorry :(</p>
        )}
      </div>
    </div>
  );
};
