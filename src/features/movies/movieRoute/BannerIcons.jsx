/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { db } from '../../../firebase';

import {
  CircularBar,
  IconFlag,
  IconHeart,
  IconList,
  IconPlay,
  Icons,
  IconStar,
  IconContainer,
} from '../../../app/shared/components';
import { addToFavorites } from '../../../app/shared/helpers/firebaseHelpers';

const Score = styled.div`
  margin-top: 10px;
  font-weight: 600;
`;

const Trailer = styled.div`
  color: white;
  font-weight: 600;
  margin-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: lightgreen;
  }
`;
const IFrameWrapper = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  background-color: black;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  height: 900px;

  transform: translate(-50%, -50%);
`;

const Close = styled.p`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1001;
`;

const IFrame = styled.iframe`
  border: none;
  margin-top: 100px;
`;

export const BannerIcons = ({ vote_average, trailerKey, movieId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const user = useSelector((state) => state.user.user);

  const url = isPlaying
    ? `https://www.youtube.com/embed/${trailerKey}?autoplay=1`
    : `https://www.youtube.com/embed/${trailerKey}`;

  const handleAddToFavorites = () => {
    addToFavorites({
      isFavorite,
      setIsFavorite,
      user,
      movieId,
    });
  };

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user.uid)
        .collection('favorites')
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((movie) => {
            if (movie.id === movieId) {
              setIsFavorite(true);
            }
          });
        });
    }
  }, [isFavorite, user]);

  return (
    <IconContainer>
      <CircularBar vote_average={vote_average} widthF='60px' />
      <Score>
        User <br />
        Score
      </Score>
      <Icons>
        <IconList />
      </Icons>
      <Icons onClick={handleAddToFavorites}>
        <IconHeart
          className={isFavorite ? 'favorite' : ''}
          onClick={handleAddToFavorites}
        />
      </Icons>
      <Icons>
        <IconFlag />
      </Icons>
      <Icons>
        <IconStar />
      </Icons>
      <Trailer>
        <IconPlay />
        <div
          aria-hidden='true'
          role='button'
          tabIndex={0}
          onClick={() => {
            setIsVisible(true);
            setIsPlaying(true);
          }}
        >
          Play Trailer
        </div>
        <IFrameWrapper isVisible={isVisible}>
          <Close
            onClick={() => {
              setIsPlaying(false);
              setIsVisible(false);
            }}
          >
            X
          </Close>
          <IFrame
            title='trailer'
            name='trailer'
            width='1376'
            height='675'
            src={url}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
        </IFrameWrapper>
      </Trailer>
    </IconContainer>
  );
};
