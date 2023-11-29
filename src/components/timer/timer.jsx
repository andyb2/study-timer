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
  //   const [breakTime, setBreakTime] = useState(0);
  const timerRef = useRef(null);
  //   const breakTimerRef = useRef(null);

  const handleStartTimer = () => {
    if (timeLimit) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          const stateCopy = { ...prev };

          if (prev.minuteTwo === 9) {
            stateCopy.minuteOne += 1;
            stateCopy.minuteTwo = 0;
            return stateCopy;
          }

          if (prev.secondOne === 5 && prev.secondTwo === 9) {
            stateCopy.minuteTwo += 1;
            stateCopy.secondOne = 0;
            stateCopy.secondTwo = 0;
            return stateCopy;
          }

          if (prev.secondTwo === 9) {
            stateCopy.secondTwo = 0;
            stateCopy.secondOne += 1;
            return stateCopy;
          }

          stateCopy.secondTwo += 1;
          return stateCopy;
        });
      }, 10);
    }
  };

  const handleStopTimer = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    const checkForFinishTime = () => {
      const { minuteOne, minuteTwo } = timer;
      let totalMin = Number(minuteOne.toString() + minuteTwo.toString());

      if (timeLimit && totalMin === timeLimit) {
        //     breakTimerRef.current = setInterval(() => {});
        handleStopTimer();
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
