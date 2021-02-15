import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { BsFlagFill, BsListTask, BsFillPlayFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
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
      rgba(3, 37, 65, 1) 0%,
      rgba(3, 37, 65, 0.8) 100%
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

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

const Overview = styled.h3`
  margin: 20px 0;
`;

const OverviewPara = styled.p`
  line-height: 22px;
  margin-bottom: 20px;
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
    vote_average
  } = location.state.movie;

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
          <MovieTitle>
            {title} ({new Date(release_date).getFullYear()})
          </MovieTitle>
          <IconContainer>
            <CircularProgressbar
              value={vote_average}
              maxValue={10}
              text={`${vote_average * 10}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: 'butt',
                width: '60px',
                textSize: '30px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(28,210,175, ${(vote_average * 10) / 100})`,
                textColor: 'white',
                trailColor: '#d6d6d6',
              })}
            />
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
            name='trailer'
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
