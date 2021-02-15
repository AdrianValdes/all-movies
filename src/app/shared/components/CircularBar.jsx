import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const selectColor = (vote_average) => {
  if (vote_average > 6.9) return '78,187,111';
  if (vote_average > 5) return '203,206,48';
  if (vote_average > 3) return '199,60,89';
  return '247,75,82';
};

export const CircularBar = ({ vote_average, className }) => (
  <CircularProgressbar
    background
    className={className}
    value={vote_average}
    maxValue={10}
    text={`${vote_average * 10}%`}
    styles={buildStyles({
      rotation: 0.03,
      strokeLinecap: 'butt',
      width: '30px',
      textSize: '30px',
      pathTransitionDuration: 0.5,
      pathColor: `rgb(${selectColor(vote_average)})`,
      textColor: 'white',
      trailColor: 'rgb(30,66,39)',
      backgroundColor: '#083052',
    })}
  />
);
