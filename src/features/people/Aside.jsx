import React from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL_MEDIUM } from '../../app/urls';
import { Img } from '../movies/GridCard';

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
const Info = styled.h2`
  margin-top: 20px;
`;

const InfoDetails = styled.p`
  font-size: 20px;
`;

const genderDiffer = (num) => {
  if (num === 1) return 'Female';
  return 'Male';
};

export const Aside = ({
  profile_path,
  known_for_department,
  gender,
  birthday,
  place_of_birth,
  name,
}) => (
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
);
