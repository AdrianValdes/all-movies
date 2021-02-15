import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';

export const Card = styled.div`
  width: 150px;
  min-width: 150px;
  margin-left: 40px;
  color: black;
`;

export const ImageWrapper = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background: #dbdbdb;
  width: 100%;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const CardTitle = styled.h2`
  margin-top: 20px;
  font-weight: 700;
  font-size: 1em;
  padding-top: 10px;
`;

const CardDate = styled.p`
  font-size: 1em;
  color: rgba(0, 0, 0, 0.6);
  padding: 5px 0;
`;

const CardContent = styled.div`
  padding: 2px 0;
  position: relative;
`;

const RatingCircle = styled.div`
  position: absolute;
  top: -20px;
  left: 10px;
`;




export const RowCard = ({ movie }) => (
  <Link
    to={{
      pathname: `/movie/${movie.id}`,
      state: { movie },
    }}
  >
    <Card>
      <ImageWrapper>
        <Img alt='movie' src={`${IMAGE_BASE_URL_LOW}${movie.poster_path}`} />
      </ImageWrapper>
      <CardContent>
        <CardTitle>{movie.title}</CardTitle>
        <CardDate>
          {new Date(movie.release_date).toDateString().slice(4)}
        </CardDate>
      <RatingCircle>
          <CircularProgressbar
            className='row-card-icon'
          maxValue={10}
            rotation: 0.25,
          value={vote_average}
          background
          text={`${movie.vote_average * 10}%`}
          styles={buildStyles({
            strokeLinecap: 'butt',
            width: '50px',
            pathTransitionDuration: 0.5,
            pathColor: `rgba(28,210,175, ${(vote_average * 10) / 100})`,
            textSize: '30px',
            textColor: 'white',
            backgroundColor: '#083052',
          })}
            trailColor: '#d6d6d6',
        />
         </RatingCircle>
      </CardContent>
    </Card>
  </Link>
  
     
);
