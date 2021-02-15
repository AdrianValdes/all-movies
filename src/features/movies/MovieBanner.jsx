import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { BsFlagFill, BsListTask, BsFillPlayFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CircularBar, MovieBannerStyle } from '../../app/shared/components';
import { ImageWrapper, Img } from './RowCard';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';

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
  margin-top: 10px;
  display: flex;
  &:hover {
    color: lightgreen;
  }
`;

export const MovieBanner = ({
  bannerImage,
  poster_path,
  release_date,
  vote_average,
  title,
  overview,
  trailerKey,
}) => {
  console.log('hee');
  return (
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
            <div>
              Play <br />
              Trailer
            </div>
          </Trailer>
        </IconContainer>
        <Overview>Overview</Overview>
        <OverviewPara>{overview}</OverviewPara>
        {/* <h4>Director</h4> */}
      </MovieInfo>
    </MovieBannerStyle>
  );
};
