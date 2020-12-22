import React, { useState, useRef, useEffect, memo, Fragment } from 'react';
import { LeftA } from './../svg/leftA';
import { RightA } from './../svg/rightA';
import SumDay from './AppointmentSummary';
import Day from './AppointmentDay';
import AppointmentOverview from './AppointmentOverview';
import { v1 } from 'uuid';
const days = [
  <Day day='Monday' />,
  <Day day='Tuesday' />,
  <Day day='Wednesday' />,
  <Day day='Thursday' />,
  <Day day='Friday' />,
  <Day day='Saturday' />,
];

export const AppointmentMain = memo(() => {
  const [ind, setInd] = useState(0);
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!mon && localStorage.getItem('Monday')) {
      console.log('here');
      setMon(() => true);
    }
    if (mon && localStorage.getItem('Monday') === null) {
      console.log('here');
      setMon(() => false);
    }
    if (!tue && localStorage.getItem('Tuesday')) {
      setTue(() => true);
    }
    if (tue && localStorage.getItem('Tuesday') === null) {
      console.log('here');
      setTue(() => false);
    }
    if (!wed && localStorage.getItem('Wednesday')) {
      setWed(() => true);
    }
    if (wed && localStorage.getItem('Wednesday') === null) {
      console.log('here');
      setWed(() => false);
    }
    if (!thu && localStorage.getItem('Thursday')) {
      setThu(() => true);
    }
    if (thu && localStorage.getItem('Thursday') === null) {
      console.log('here');
      setThu(() => false);
    }
    if (!fri && localStorage.getItem('Friday')) {
      setFri(() => true);
    }
    if (fri && localStorage.getItem('Friday') === null) {
      setFri(() => false);
    }
    if (!sat && localStorage.getItem('Saturday')) {
      setSat(() => true);
    }
    if (sat && localStorage.getItem('Saturday') === null) {
      setSat(() => false);
    }
  });

  const moveRight = () => {
    setInd((p) => (p === 5 ? 0 : p + 1));
  };
  const moveLeft = () => {
    setInd((p) => (p - 1 === -1 ? 5 : p - 1));
  };
  const submitWeek = () => {
    setSubmit(() => true);
  };
  return (
    <Fragment>
      {!submit ? (
        <section className='week_generator'>
          <div className='week_leftA' onClick={moveLeft}>
            <LeftA clSvg='week_leftSvg' />
          </div>
          <div className='week_summary'>
            {days.map((el, i) => (
              <SumDay
                sub={[mon, tue, wed, thu, fri, sat]}
                state={ind}
                ind={i}
                clName={'day_sub'}
                clSub={'day_act'}
                day={el.props.day}
                key={v1()}
              />
            ))}
          </div>
          <div className='week_day'>{days[ind]}</div>
          <div className='week_rightA' onClick={moveRight}>
            <RightA clSvg='week_rightSvg' />
          </div>
          <button
            className='week_confirm'
            onClick={submitWeek}
            disabled={mon || tue || wed || thu || fri || sat ? false : true}>
            submit week
          </button>
        </section>
      ) : undefined}

      {submit ? (
        <AppointmentOverview
          submit={[
            { s: mon, day: 'Monday' },
            { s: tue, day: 'Tuesday' },
            { s: wed, day: 'Wednesday' },
            { s: thu, day: 'Thursday' },
            { s: fri, day: 'Friday' },
            { s: sat, day: 'Saturday' },
          ]}
        />
      ) : undefined}
    </Fragment>
  );
});
