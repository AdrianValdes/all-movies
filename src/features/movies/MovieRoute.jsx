import React from 'react';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import { Row } from './MoviesRow';
import { useFetch } from '../../app/hooks/useFetch';
import { Card, ImageWrapper, Img } from './RowCard';

import {
  KEY,
  IMAGE_BASE_URL_LOW,
  SINGLE_MOVIE_BASE_URL,
  IMAGE_BASE_URL_HIGH,
} from '../../app/urls';
import { Spinner } from '../../app/shared/components';
import { MovieBanner } from './MovieBanner';

const Notice = styled.p`
  text-align: center;
  padding: 20px 0;
`;

const CharacterName = styled.p`
  font-weight: 700;
`;

const TrailerContainer = styled.div`
  padding-bottom: 100px;
`;
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
        {cast.length > 0 ? (
          <Row style={{ maxWidth: '1200px' }}>
            {cast.map((person) => (
              <Card key={person.id}>
                <ImageWrapper>
                  {person.profile_path ? (
                    <Img
                      src={`${IMAGE_BASE_URL_LOW}${person.profile_path}`}
                      alt={person.name}
                    />
                  ) : (
                    <Img
                      src='https://via.placeholder.com/150x225?text=no+image'
                      alt={person.name}
                    />
                  )}
                </ImageWrapper>
                <CharacterName>{person.original_name}</CharacterName>
                <p>{person.character}</p>
              </Card>
            ))}
          </Row>
        ) : (
          <Notice>
            We do not have any cast added to this movie. You can help by adding
            some!
          </Notice>
        )}
      </div>
      <TrailerContainer>
        {trailerKey ? (
          <iframe
            title='trailer'
            name='trailer'
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${trailerKey}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
        ) : (
          <Notice>There is no trailer for this movie yet, sorry :(</Notice>
        )}
      </TrailerContainer>
    </div>
  );
};
