import { formatTimer } from '../../utils/utilFunctions';
import TimeLimit from '../time-limit/time-limit';
import styles from './timer.module.css';
import { useState, useRef, useEffect } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState({
    minuteOne: 0,
    minuteTwo: 0,
    secondOne: 0,
    secondTwo: 0,
  });
  const [timeLimit, setTimeLimit] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const timerRef = useRef(null);

  const handleStartTimer = () => {
    if (timeLimit) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => formatTimer(prev));
      });
    }
  };

  const handleStopTimer = () => {
    clearInterval(timerRef.current);
  };

  const breakTime = () => {
    setTimer((prev) => {
      const stateCopy = { ...prev };

      for (const time in stateCopy) {
        stateCopy[time] = 0;
      }

      return stateCopy;
    });
    setIsBreak(true);
  };

  useEffect(() => {
    const checkForFinishTime = () => {
      const { minuteOne, minuteTwo } = timer;

      // calculate total time to compare to time limit
      let totalMin = Number(minuteOne.toString() + minuteTwo.toString());

      if (timeLimit && totalMin === timeLimit) {
        handleStopTimer();
        breakTime();
      }
    };

    checkForFinishTime();
  }, [timer, timeLimit]);

  return (
    <div className={styles.container}>
      <TimeLimit setTimeLimit={setTimeLimit} />
      <div className={styles.timer}>
        {timer.minuteOne}
        {timer.minuteTwo}:{timer.secondOne}
        {timer.secondTwo}
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={() => handleStartTimer()} className={styles.button}>
          Start
        </button>
        <button onClick={() => handleStopTimer()} className={styles.button}>
          Stop
        </button>
      </div>
    </div>
  );
}
