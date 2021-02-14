import React from 'react';
import styled from 'styled-components';
import { Row } from './MoviesRow';
import { useFetch } from '../../app/hooks/useFetch';
import { ImageWrapper, Img, RowCard } from './RowCard';
import { KEY, IMAGE_BASE_URL_LOW, SINGLE_MOVIE_BASE_URL } from '../../app/urls';

const PageBannerStyle = styled.div`
  display: flex;
  width: 100vw;
  padding: 30px 0;
  background-color: rgb(214, 225, 227);
`;

const IndividualPageCard = styled.div`
  width: 300px;
  min-width: 300px;
  margin: 0 40px;
`;

const MovieInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const MovieTitleStyle = styled.h1`
  margin-bottom: 10px;
`;

const OverviewStyle = styled.h3`
  margin: 20px 0;
`;

const NoticeStyle = styled.p`
  text-align: center;
  padding: 20px 0;
`;

export const MovieRoute = ({ location }) => {
  const { poster_path, title, id, release_date } = location.state;

  const urlVideos = `${SINGLE_MOVIE_BASE_URL}/${id}/videos?api_key=${KEY}&language=en-US`;
  const urlCredits = `${SINGLE_MOVIE_BASE_URL}/${id}/credits?api_key=${KEY}`;

  const { dataApi } = useFetch(urlVideos);

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
      <PageBannerStyle>
        <IndividualPageCard>
          <ImageWrapper>
            <Img alt='movie' src={`${IMAGE_BASE_URL_LOW}${poster_path}`} />
          </ImageWrapper>
        </IndividualPageCard>
        <MovieInfoStyle>
          <MovieTitleStyle>{title}</MovieTitleStyle>
          <p>Released: {new Date(release_date).toDateString().slice(4)}</p>
          <p>Genres: </p>
          {/* <p>Rating: {vote_average}</p> */}
          <OverviewStyle>Overview</OverviewStyle>
          {/* <p>{overview}</p> */}
          {/* <h4>{director}</h4> */}
          <p>Director</p>
        </MovieInfoStyle>
      </PageBannerStyle>
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
          <NoticeStyle>
            We do not have any cast added to this movie. You can help by adding
            some!
          </NoticeStyle>
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
          <NoticeStyle>
            There is no trailer for this movie yet, sorry :(
          </NoticeStyle>
        )}
      </div>
    </div>
  );
};
