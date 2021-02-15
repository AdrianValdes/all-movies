import React from 'react';
import styled from 'styled-components';
import { Row } from './MoviesRow';
import { useFetch } from '../../app/hooks/useFetch';
import { Card, ImageWrapper, Img } from './RowCard';
import {
  KEY,
  IMAGE_BASE_URL_LOW,
  SINGLE_MOVIE_BASE_URL,
  IMAGE_BASE_URL_HIGH,
} from '../../app/urls';

const PageBanner = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.8) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${(props) => props.imageUrl});
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  background-color: rgb(214, 225, 227);
  color: #fff;
  height: 570px;
`;

const IndividualPageCard = styled.div`
  width: 300px;
  min-width: 300px;
  margin: 0 40px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  max-width: 1600px;
`;

const MovieTitle = styled.h1`
  margin-bottom: 10px;
`;

const Overview = styled.h3`
  margin: 20px 0;
`;

const Notice = styled.p`
  text-align: center;
  padding: 20px 0;
`;

const CharacterName = styled.p`
  font-weight: 700;
`;

export const MovieRoute = ({ location }) => {
  const {
    poster_path,
    title,
    id,
    release_date,
    backdrop_path,
    overview,
  } = location.state;

  const urlVideos = `${SINGLE_MOVIE_BASE_URL}/${id}/videos?api_key=${KEY}&language=en-US`;
  const urlCredits = `${SINGLE_MOVIE_BASE_URL}/${id}/credits?api_key=${KEY}`;
  const bannerImage = `${IMAGE_BASE_URL_HIGH}/${backdrop_path}`;

  const { dataApi } = useFetch(urlVideos);
  const { dataApi: credits } = useFetch(urlCredits);

  let trailerKey;
  if (dataApi.results !== undefined && dataApi.results.length > 0) {
    const [trailer] = dataApi.results;
    trailerKey = trailer.key;
  }

  let cast = [];
  if (credits.cast && credits.cast.length > 0) {
    cast = credits.cast.slice(0, 10);
  }

  return (
    <div>
      <PageBanner imageUrl={bannerImage}>
        <IndividualPageCard>
          <ImageWrapper>
            <Img alt='movie' src={`${IMAGE_BASE_URL_LOW}${poster_path}`} />
          </ImageWrapper>
        </IndividualPageCard>
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <p>Released: {new Date(release_date).toDateString().slice(4)}</p>
          <p>Genres: </p>
          {/* <p>Rating: {vote_average}</p> */}
          <Overview>Overview</Overview>
          <p>{overview}</p>
          {/* <h4>{director}</h4> */}
          <p>Director</p>
        </MovieInfo>
      </PageBanner>
      <div>
        {cast.length > 0 ? (
          <Row style={{ maxWidth: '1200px' }}>
            {cast.map((person) => (
              <Card key={person.id}>
                <ImageWrapper>
                  <Img
                    src={`${IMAGE_BASE_URL_LOW}${person.profile_path}`}
                    alt={person.name}
                  />
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
          <Notice>There is no trailer for this movie yet, sorry :(</Notice>
        )}
      </div>
    </div>
  );
};
