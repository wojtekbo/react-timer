import {useEffect, useState} from 'react';
import styles from './Timer.module.scss';
import Button from '../Button/Button';

const Timer = (params) => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  function msToTime(s) {
    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
  }

  const startTime = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setTime((prevValue) => prevValue + 1);
        }, 1)
      );
    }
  };
  const stopTime = () => {
    clearInterval(timer);
    setTimer(null);
  };
  const resetTime = () => {
    clearInterval(timer);
    setTime(0);
    setTimer(null);
  };

  return (
    <div className={styles.timer}>
      <h1 className={styles.time}>{msToTime(time)}</h1>
      <Button action={startTime}>Start</Button>
      <Button action={stopTime}>Stop</Button>
      <Button action={resetTime}>Reset</Button>
    </div>
  );
};

export default Timer;
