import React from 'react';
import styled from 'styled-components';
import { usePalette } from 'react-palette';

import { Img, MovieBannerStyle } from '../../../app/shared/components';
import { ImageWrapper } from '../RowCard';
import { IMAGE_BASE_URL_LOW } from '../../../app/shared';
import { Facts } from './Facts';
import { Crew } from './Crew';
import { BannerIcons } from './BannerIcons';

const IndividualPageCard = styled.div`
  width: 300px;
  min-width: 300px;
  margin: 0 40px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  margin-right: 20px;
  max-width: 1600px;
`;

const MovieTitle = styled.h1`
  margin-bottom: 10px;
`;

const Overview = styled.h3`
  margin-bottom: 20px;
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
  episode_run_time,
  movieId,
}) => {
  const { data: filterColor, loading, error } = usePalette(
    `${IMAGE_BASE_URL_LOW}${poster_path}`
  );
  return (
    <MovieBannerStyle
      filterColor={filterColor.darkVibrant}
      imageUrl={bannerImage}
    >
      <IndividualPageCard>
        <ImageWrapper>
          <Img
            alt='movie'
            src={
              poster_path
                ? `${IMAGE_BASE_URL_LOW}${poster_path}`
                : 'https://via.placeholder.com/250x350/1cb8da/000000?text=No+Image'
            }
          />
        </ImageWrapper>
      </IndividualPageCard>
      <MovieInfo>
        <MovieTitle>
          {title}{' '}
          {release_date ? `(${new Date(release_date).getFullYear()})` : ''}
        </MovieTitle>
        <Facts
          certification={certification}
          release_date={release_date}
          genresString={genresString}
          runtime={runtime}
          episode_run_time={episode_run_time}
        />
        <BannerIcons
          vote_average={vote_average}
          trailerKey={trailerKey}
          movieId={movieId}
        />
        <Tagline>{tagline} </Tagline>
        <Overview>Overview</Overview>
        <OverviewPara>{overview}</OverviewPara>
        <Crew crew={crew} />
      </MovieInfo>
    </MovieBannerStyle>
  );
};
