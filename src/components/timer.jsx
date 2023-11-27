import { useState, useRef } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const handleStartTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => (prev += 1));
    }, 1000);
  };

  const handleStopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <div>{timer}</div>
      <div>
        <button onClick={() => handleStartTimer()}>Start</button>
        <button onClick={() => handleStopTimer()}>Stop</button>
      </div>
    </div>
  );
}
