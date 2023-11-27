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

  const handleSetTime = (time) => {
    const toNum = Number(time);
    setTimeLimit(toNum);
  };

  const handleStartTimer = () => {
    if (timeLimit) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          const stateCopy = { ...prev };

          if (prev.secondOne === 5 && prev.secondTwo === 9) {
            stateCopy.minute += 1;
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
      if (timeLimit && timer.minute === timeLimit) {
        //     breakTimerRef.current = setInterval(() => {});
        handleStopTimer();
      }
    };

    checkForFinishTime();
  }, [timer, timeLimit]);

  return (
    <div>
      <select onChange={(e) => handleSetTime(e.target.value)}>
        <option default>Select Time Limit</option>
        <option value={5}>5 min</option>
        <option value={10}>10 min</option>
        <option value={15}>15 min</option>
        <option value={20}>20 min</option>
      </select>

      <div>
        {timer.minuteOne}
        {timer.minuteTwo}:{timer.secondOne}
        {timer.secondTwo}
      </div>

      <div>
        <button onClick={() => handleStartTimer()}>Start</button>
        <button onClick={() => handleStopTimer()}>Stop</button>
      </div>
    </div>
  );
}
