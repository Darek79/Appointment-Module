import React from 'react';

export const RightA = ({ clSvg, clPath, fill, stroke, fn }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    onClick={fn}
    viewBox='0 0 24 24'
    className={clSvg}>
    <path
      className={clPath}
      d='M8.707 20.707l-1.414-1.414L14.586 12 7.293 4.707l1.414-1.414L17.414 12z'
    />
  </svg>
);
