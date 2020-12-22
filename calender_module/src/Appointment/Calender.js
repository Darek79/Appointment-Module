import React, { useState, useEffect, useRef } from 'react';
import Moment from 'moment';
import { v4 } from 'uuid';
import 'moment/locale/pl';
import { extendMoment } from 'moment-range';
import 'react-calendar/dist/Calendar.css';
import { LeftA } from './../svg/leftA';
import { RightA } from './../svg/rightA';
let moment = extendMoment(Moment);
const weekdays = ['pon', 'wt', 'śr', 'czw', 'pt', 'sob', 'ndz'];
const d = [0, 0, 0, 0];

export const Calender = ({ year }) => {
  const [week, setWeek] = useState([]);
  const [off, setOff] = useState(4);
  useEffect(() => {
    setWeek(() =>
      d.map((el, i) => {
        return {
          day: moment().add(i, 'd').format('ddd'),
          nr: moment().add(i, 'd').format('D'),
        };
      })
    );
  }, []);
  useEffect(() => {
    console.log(off, 'offset');
  }, [off]);
  const offsetPlus = () => {
    setWeek(() =>
      d.map((el, i) => {
        return {
          day: moment()
            .add(i + off, 'd')
            .format('ddd'),
          nr: moment()
            .add(i + off, 'd')
            .format('D'),
        };
      })
    );
    setOff((p) => p + 4);
  };
  const offsetMinus = () => {
    console.log(off);
    setWeek(() =>
      d.map((el, i) => {
        return {
          day: moment()
            .add(i + off, 'd')
            .format('ddd'),
          nr: moment()
            .add(i + off, 'd')
            .format('D'),
        };
      })
    );
    setOff((p) => p - 4);
  };
  return (
    <div className='calender_wrapper'>
      <h2>{moment().year()}</h2>
      <h2>{moment().format('E')}</h2>
      <h2>{moment().format('D')}</h2>
      <h2>{moment().add(off, 'd').format('MMMM')}</h2>
      <section className='calender_month'>
        <h2>{moment().add(off, 'd').format('MMMM').toUpperCase()}</h2>
      </section>
      <section className='calender_week'>
        <LeftA
          clSvg='calender_left'
          clSvgD='calender_left_d'
          fn={offsetMinus}
          state={off}
        />
        {week.map((el) => {
          return (
            <div className='day' key={v4()}>
              <p>{`${el.day[0].toUpperCase()}${el.day[1]}`}</p>
              <p>{el.nr}</p>
            </div>
          );
        })}
        <RightA clSvg='calender_right' fn={offsetPlus} />
      </section>
    </div>
  );
};
