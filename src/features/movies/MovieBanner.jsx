import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { BsFlagFill, BsListTask, BsFillPlayFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CircularBar, MovieBannerStyle } from '../../app/shared/components';
import { ImageWrapper, Img } from './RowCard';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';
import { Facts } from './Facts';
import { Crew } from './Crew';

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

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const Icons = styled.div`
  width: 45px;
  height: 45px;
  background-color: rgb(3, 37, 65);
  border-radius: 50%;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  cursor: pointer;
`;

const Score = styled.div`
  margin-top: 10px;
  font-weight: 600;
`;

const Overview = styled.h3`
  margin: 20px 0;
`;

const OverviewPara = styled.p`
  line-height: 22px;
  margin-bottom: 20px;
`;
const Trailer = styled(Link)`
  color: white;
  font-weight: 600;
  margin-left: 10px;
  display: flex;
  align-items: center;

  &:hover {
    color: lightgreen;
  }
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
      <IconContainer>
        <CircularBar vote_average={vote_average} widthF='60px' />
        <Score>
          User <br />
          Score
        </Score>
        <Icons>
          <BsListTask />
        </Icons>
        <Icons>
          <FaHeart />
        </Icons>
        <Icons>
          <BsFlagFill />
        </Icons>
        <Icons>
          <AiFillStar />
        </Icons>
        <Trailer
          to={{
            pathname: `https://www.youtube.com/embed/${trailerKey}`,
            target: 'trailer',
          }}
        >
          <BsFillPlayFill size={25} />
          <div>Play Trailer</div>
        </Trailer>
      </IconContainer>
      <Tagline>{tagline} </Tagline>
      <Overview>Overview</Overview>
      <OverviewPara>{overview}</OverviewPara>
      <Crew crew={crew} />
    </MovieInfo>
  </MovieBannerStyle>
);
