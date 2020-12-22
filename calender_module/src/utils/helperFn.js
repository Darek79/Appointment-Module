import moment from 'moment';
export const startEndTime = (start, end, offset, day) => {
  let timesArr = [];
  const s = moment(start, 'HH mm');
  const e = moment(end, 'HH mm');
  let interval = e.diff(s, 'minutes');
  console.log(interval);
  timesArr.push(s.format('HH:mm'));
  for (let i = 0; i <= interval - offset; i += offset) {
    timesArr.push(s.add(offset, 'minutes').format('HH:mm'));
  }
  console.log(timesArr);
  return timesArr;
};

