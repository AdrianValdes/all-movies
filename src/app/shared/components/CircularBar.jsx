import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export const CircularBar = ({ vote_average, className }) => (
  <CircularProgressbar
    background
    className={className}
    value={vote_average}
    maxValue={10}
    text={`${vote_average * 10}%`}
    styles={buildStyles({
      rotation: 0.25,
      strokeLinecap: 'butt',
      width: '30px',
      textSize: '30px',
      pathTransitionDuration: 0.5,
      pathColor: `rgba(28,210,175, ${(vote_average * 10) / 100})`,
      textColor: 'white',
      trailColor: '#d6d6d6',
      backgroundColor: '#083052',
    })}
  />
);
