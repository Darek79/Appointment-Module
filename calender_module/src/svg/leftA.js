import React from 'react';

export const LeftA = ({ clSvg, clSvgD, clPath, fill, stroke, fn, state }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    className={clSvg}
    onClick={fn}>
    <path
      className={clPath}
      d='M15.293 20.707L6.586 12l8.707-8.707 1.414 1.414L9.414 12l7.293 7.293z'
    />
  </svg>
);
// className={state === 4 ? clSvgD : clSvg}
// onClick={state === 4 ? undefined : fn}>
