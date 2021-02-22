import React from 'react';
import styled from 'styled-components';
// import { CircularBar, Img } from '../../app/shared/components';
import { prettifyDate } from '../../app/shared/helpers/prettifyDate';
// import { ImageWrapper } from '../movies/RowCard';
// import { IMAGE_BASE_URL_LOW } from '../../app/shared';

const Container = styled.div`
  width: 100%;
`;

const UserInfo = styled.div`
  height: 100px;
  background-color: rgb(22, 31, 55);
  color: white;
`;

// const MovieContainer = styled.div`
//   display: flex.;
// `;

// const ListInfo = styled.div`
//   border: 1px solid lightgrey;
// `;

// const MovieInfo = styled.div``;

export const Watchlist = ({ location }) => {
  const { displayName, creationTime } = location.state;

  return (
    <Container>
      <UserInfo>
        <h1>{displayName}</h1>
        <h3>Member since {prettifyDate(creationTime)}</h3>
      </UserInfo>
      {/* <ListInfo>
      <h1>My Watchlist{list.length}</h1> */}
      {/* {list.length > 0 ? (
        list.map(movie => (
          <MovieContainer>
          <ImageWrapper>
            <Img
              alt='movie'
              src={
                poster_path
                  ? `${IMAGE_BASE_URL_LOW}${movie.poster_path}`
                  : 'https://via.placeholder.com/250x350/1cb8da/000000?text=No+Image'
              }
            />
          </ImageWrapper>

          <MovieInfo>
            <CircularBar vote_average={movie.vote_average} widthF='60px' />
            {movie.title}{' '}
            {movie.release_date ? `(${new Date(release_date).getFullYear()})` : ''}
            <p>{movie.overview}</p>
          </MovieInfo>
          </MovieContainer>)) : (
        <p>You do not have anything on your watchlist.</p>
      )} */}
      {/* </ListInfo> */}
    </Container>
  );
};
