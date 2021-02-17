import React from 'react';
import styled from 'styled-components';

import { MovieBannerStyle } from '../../../app/shared/components';
import { ImageWrapper } from '../RowCard';
import { IMAGE_BASE_URL_LOW } from '../../../app/urls';
import { Facts } from './Facts';
import { Crew } from './Crew';
import { BannerIcons } from './BannerIcons';
import { Img } from '../GridCard';

const IndividualPageCard = styled.div`
  width: 300px;
  min-width: 300px;
  margin: 0 40px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 50px;
  margin-right: 20px;
  max-width: 1600px;
`;

const MovieTitle = styled.h1`
  margin-bottom: 10px;
`;

const Overview = styled.h3`
  margin: 20px 0;
`;

const OverviewPara = styled.p`
  line-height: 22px;
  margin-bottom: 20px;
`;

const Tagline = styled.h3`
  margin-bottom: 0;
  margin-top: 30px;
  font-size: 1.1em;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;
`;

export const MovieBanner = ({
  bannerImage,
  poster_path,
  release_date,
  vote_average,
  title,
  overview,
  trailerKey,
  certification,
  genresString,
  runtime,
  tagline,
  crew,
}) => (
  <MovieBannerStyle imageUrl={bannerImage}>
    <IndividualPageCard>
      <ImageWrapper>
        <Img alt='movie' src={`${IMAGE_BASE_URL_LOW}${poster_path}`} />
      </ImageWrapper>
    </IndividualPageCard>
    <MovieInfo>
      <MovieTitle>
        {title} ({new Date(release_date).getFullYear()})
      </MovieTitle>
      <Facts
        certification={certification}
        release_date={release_date}
        genresString={genresString}
        runtime={runtime}
      />
      <BannerIcons vote_average={vote_average} trailerKey={trailerKey} />
      <Tagline>{tagline} </Tagline>
      <Overview>Overview</Overview>
      <OverviewPara>{overview}</OverviewPara>
      <Crew crew={crew} />
    </MovieInfo>
  </MovieBannerStyle>
);
