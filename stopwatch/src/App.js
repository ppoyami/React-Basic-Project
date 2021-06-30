import classNames from 'classnames/bind';

import styles from './App.module.css';
import GlobalStyled from './GlobalStyled';
import Button from './components/Button';
import Pannel from './components/Pannel';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

// TODO: milliSeconds를 00:00:00 형태의 문자열로 리턴하기
const format = ms => {
  const minutes = Math.floor(ms / 600000); // mm
  const seconds = Math.floor((ms - 600000 * minutes) / 1000); // ss
  const tenMillis = Math.floor((ms - 600000 * minutes - 1000 * seconds) / 10); //mimi

  const prefixZero = time => (time <= 9 ? `0${time}` : time);

  return `${prefixZero(minutes)}:${prefixZero(seconds)}:${prefixZero(
    tenMillis
  )}`;
};

function App() {
  // 1. 초기 상태(initial..) -> start, reset(disable)
  // 2. 동작 중(running..) -> pause, reset(disable)
  // 3. 정지(pause..) -> start, reset
  const [state, setState] = useState({
    initial: true,
    running: false,
    pause: false,
  });

  const [milliSeconds, setMilliSeconds] = useState(0);

  const timerId = useRef(null);

  const onReset = () => {
    setState({
      initial: true,
      running: false,
      pause: false,
    });
  };

  const onRunning = () => {
    setState({
      initial: false,
      running: true,
      pause: false,
    });
  };

  const onPause = () => {
    setState({
      initial: false,
      running: false,
      pause: true,
    });
  };

  const { initial, running, pause } = state;

  useEffect(() => {
    if (running) {
      // setInterval 등록,
      timerId.current = setInterval(() => {
        setMilliSeconds(prev => prev + 10);
      }, 10);
    }
    if (initial) {
      // setInterval 해제
      clearInterval(timerId.current);
      // milliSeconds 초기화
      setMilliSeconds(0);
    }
    if (pause) {
      // setInterval 해제
      clearInterval(timerId.current);
    }
  }, [initial, running, pause]);

  return (
    <div className={cx('app')}>
      <GlobalStyled />
      <div className={cx('wrapper')}>
        <Pannel time={format(milliSeconds)} />
        <div className={cx('button-wrapper')}>
          {initial && (
            <>
              <Button text="start" onClick={onRunning} />
              <Button text="reset" disabled />
            </>
          )}
          {running && (
            <>
              <Button text="pause" onClick={onPause} />
              <Button text="reset" disabled />
            </>
          )}
          {pause && (
            <>
              <Button text="start" onClick={onRunning} />
              <Button text="reset" onClick={onReset} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
