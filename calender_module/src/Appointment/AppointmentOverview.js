import React, { useEffect, useState } from 'react';
import { startEndTime } from './../utils/helperFn';

export default ({ submit }) => {
  const [days, setDays] = useState([]);
  useEffect(() => {
    // let week = [];
    // week = submit.map((el) => {
    //   if (el.s) {
    //     const day = JSON.parse(localStorage.getItem(el.day));
    //     return startEndTime(
    //       `${day.start.h} ${day.start.m}`,
    //       `${day.end.h} ${day.end.m}`,
    //       day.offset,
    //       el.day
    //     );
    //   }
    //   console.log(week);
    // });
    let day = JSON.parse(localStorage.getItem('Monday'));
    console.log(day);
    let time = startEndTime(
      `${day.start.h} ${day.start.m}`,
      `${day.end.h} ${day.end.m}`,
      day.offset * 1
    );
    console.log(time);
  }, [submit]);
  return <section className='overview_cont'>test</section>;
};
