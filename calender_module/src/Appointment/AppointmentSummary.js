import React from 'react';

export default ({ day, fn, ref, state, ind, clName, clSub, sub }) => (
  <div
    className={`sum_day ${state === ind ? clName : ''} ${
      sub[ind] ? clSub : ''
    }`}
    ref={ref}
    onClick={fn}>
    <p>{day}</p>
  </div>
);
