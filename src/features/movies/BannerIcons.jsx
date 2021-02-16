import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFlagFill, BsListTask, BsFillPlayFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';

import styled from 'styled-components';
import { CircularBar } from '../../app/shared/components';

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
export const BannerIcons = ({ vote_average, trailerKey }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const url = isPlaying
    ? `https://www.youtube.com/embed/${trailerKey}?autoplay=1`
    : `https://www.youtube.com/embed/${trailerKey}`;

  return (
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
      <Trailer>
        <BsFillPlayFill size={25} />
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
