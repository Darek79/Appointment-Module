import React, { useState, useRef, useEffect,memo } from 'react';
import { startEndTime } from './../utils/helperFn';
import moment from 'moment';
import { v4 } from 'uuid';

export default memo(({ day }) => {
  const [startH, setStartH] = useState('-');
  const [startM, setStartM] = useState('-');
  const [endH, setEndH] = useState('-');
  const [endM, setEndM] = useState('-');
  const [op, setOption] = useState('-');
  const [err, setErr] = useState(false);
  const [vo, setVo] = useState(true);
  const [send, onSend] = useState(false);

  useEffect(() => {
    const st = moment(`${startH} ${startM}`, 'HH mm');
    const en = moment(`${endH} ${endM}`, 'HH mm');
    if (en.diff(st, 'minutes') <= 0) {
      setErr(() => true);
    }
    if (en.diff(st, 'minutes') >= 0) {
      setErr(() => false);
    }
    if (
      startH !== '-' &&
      startM !== '-' &&
      endH !== '-' &&
      endM !== '-' &&
      op !== '-'
    ) {
      setVo(() => false);
      console.log('-', startH);
    } else {
      setVo(() => true);
    }
  }, [startH, startM, endH, endM, op]);
  useEffect(() => {
    if (send) {
      console.log('here');
      setStartH(() => '-');
      setStartM(() => '-');
      setEndH(() => '-');
      setEndM(() => '-');
      setOption(() => '-');
    }
  }, [send]);
  const onStartH = (e) => {
    const val = e.target.value;
    console.log(e.target);
    setStartH(() => val);
  };
  const onStartM = (e) => {
    const val = e.target.value;
    setStartM(() => val);
  };
  const onEndH = (e) => {
    const val = e.target.value;
    setEndH(() => val);
  };
  const onEndM = (e) => {
    const val = e.target.value;
    setEndM(() => val);
  };
  const onOption = (e) => {
    const val = e.target.value;
    setOption(() => val);
  };

  const onSub = (e) => {
    const dayObj = {
      start: { h: startH, m: startM },
      end: { h: endH, m: endM },
      offset: op,
    };
    localStorage.setItem(day, JSON.stringify(dayObj));
    onSend(() => true);
  };
  const onSkipDay = () => {
    localStorage.setItem(day, 'null');
    onSend(() => true);
  };
  const onResetDay = () => {
    localStorage.removeItem(day);
    onSend(() => true);
  };
  const closeModal = () => {
    if (send) {
      onSend(() => false);
    }
  };
  return (
    <section className='day_creator'>
      <h2 className='day_day'>{`Please choose a schedule for ${day}`}</h2>
      <div className={`day_Time day_Time_r2 ${err ? 'day_Time_r2_er' : ''}`}>
        <select
          className='day_Time_t'
          onChange={onStartH}
          value={!send ? startH : '-'}>
          <option value='-'>please select</option>
          <option value='06'>06</option>
          <option value='07'>07</option>
          <option value='08'>08</option>
          <option value='09'>09</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
        </select>
        <select
          className='day_Time_t'
          onChange={onStartM}
          value={!send ? startM : '-'}>
          <option value='-'>please select</option>
          <option value='00'>00</option>
          <option value='15'>15</option>
          <option value='30'>30</option>
          <option value='45'>45</option>
        </select>
        <p className='day_check'>{`Selected start time: ${startH}:${startM}`}</p>
      </div>
      <div className={`day_Time day_Time_r3 ${err ? 'day_Time_r2_er' : ''}`}>
        <select
          className='day_Time_t'
          onChange={onEndH}
          value={!send ? endH : '-'}>
          <option value='-'>please select</option>
          <option value='06'>06</option>
          <option value='07'>07</option>
          <option value='08'>08</option>
          <option value='09'>09</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
        </select>
        <select
          className='day_Time_t'
          onChange={onEndM}
          value={!send ? endM : '-'}>
          <option value='-'>please select</option>
          <option value='00'>00</option>
          <option value='15'>15</option>
          <option value='30'>30</option>
          <option value='45'>45</option>
        </select>
        <p className='day_check'>{`Selected end time: ${endH}:${endM}`}</p>
      </div>
      {err ? (
        <p className='day_check_m'>start time cant be bigger then end time</p>
      ) : undefined}
      {vo ? (
        <p className='day_check_m'>please select all fields or skip the day</p>
      ) : undefined}
      <div className='day_Time day_Time_r4'>
        <select
          className='day_Time_t'
          onChange={onOption}
          value={!send ? op : '-'}>
          <option value='-'>please select</option>
          <option value='15'>15</option>
          <option value='30'>30</option>
          <option value='45'>45</option>
          <option value='60'>60</option>
        </select>
        <p className='day_check'>{`Selected offset time: ${op} min`}</p>
      </div>
      <div className='day_btn_wraper'>
        <button
          disabled={err || vo ? true : false}
          className={`day_base_btn ${
            !err && !vo ? 'day_submit_con' : 'day_submit_e'
          }`}
          onClick={onSub}>
          sumbmit day
        </button>
        <button
          disabled={err && !vo ? true : false}
          className={!err && vo ? 'day_submit' : 'day_submit_s'}
          onClick={onSkipDay}>
          skip day
        </button>
        <button
          disabled={err && !vo ? true : false}
          className={!err && vo ? 'day_submit' : 'day_submit_s'}
          onClick={onResetDay}>
          reset day
        </button>
      </div>
      {send ? (
        <div className='day_saved day_ok'>
          <p>your entry was saved</p>
          <div onClick={closeModal} className='day_con'>
            ok
          </div>
        </div>
      ) : undefined}
    </section>
  );
});
