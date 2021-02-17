import React from 'react';
import styled from 'styled-components';
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom';
import { useFetch } from '../../app/hooks';
import { KEY, IMAGE_BASE_URL_LOW, IMAGE_BASE_URL_MEDIUM } from '../../app/urls';
import { Row } from '../movies/MoviesRow';
import { Img } from '../movies/GridCard';

const Profile = styled.div`
  display: flex;
  margin: 40px;
`;

const ProfileSide = styled.div`
  margin: 20px;
`;

const ImageProfile = styled.div`
  width: 400px;
  height: 550px;
`;

const Personal = styled.h1`
  margin: 20px 0;
`;

const ProfileMain = styled.div`
  margin: 20px;
`;

const Info = styled.h2`
  margin-top: 20px;
`;

const InfoDetails = styled.p`
  font-size: 20px;
`;

const MoviesRow = styled(Row)`
  height: 450px;
`;

const Name = styled.h1`
  font-size: 55px;
  margin-bottom: 40px;
`;

const Bio = styled.div`
  margin: 20px 0;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 30px;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 350px;
  margin-right: 20px;
`;

const Title = styled.p`
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
  color: black;
`;

export const ProfileRoute = ({ location }) => {
  const { id, known_for } = location.state;

  const personUrl = `https://api.themoviedb.org/3/person/${id}?api_key=${KEY}&language=en-US`;

  const { dataApi } = useFetch(personUrl);
  const {
    name,
    biography,
    birthday,
    gender,
    known_for_department,
    place_of_birth,
    profile_path,
  } = dataApi;

  const genderDiffer = (num) => {
    if (num === 1) return 'Female';
    return 'Male';
  };

  return (
    <Profile>
      <ProfileSide>
        <ImageProfile>
          <Img src={`${IMAGE_BASE_URL_MEDIUM}${profile_path}`} alt={name} />
        </ImageProfile>
        <Personal>Personal Info</Personal>
        <Info>Known for</Info>
        <InfoDetails>{known_for_department}</InfoDetails>
        <Info>Gender</Info>
        <InfoDetails>{genderDiffer(gender)}</InfoDetails>
        <Info>Birthday</Info>
        <InfoDetails>{new Date(birthday).toDateString().slice(4)}</InfoDetails>
        <Info>Place of Birth</Info>
        <InfoDetails>{place_of_birth}</InfoDetails>
      </ProfileSide>
      <ProfileMain>
        <Name>{name}</Name>
        {biography && (
          <>
            <h1>Biography</h1>
            <Bio>
              <ShowMoreText
                lines={8}
                more='Read more'
                less='Show Less'
                expanded={false}
              >
                {biography}
              </ShowMoreText>
            </Bio>
          </>
        )}
        <h1>Known For</h1>
        <MoviesRow>
          {known_for.map((movie) => (
            <Link
              key={movie.id}
              to={{
                pathname: `/movie/${movie.id}`,
                state: { id: movie.id },
              }}
            >
              <ImageWrapper>
                <Img
                  src={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL_LOW}${movie?.poster_path}`
                      : 'https://via.placeholder.com/200x300?text=no+image'
                  }
                  alt={movie.original_title}
                />
                <Title>{movie.original_title}</Title>
              </ImageWrapper>
            </Link>
          ))}
        </MoviesRow>
      </ProfileMain>
    </Profile>
  );
};
