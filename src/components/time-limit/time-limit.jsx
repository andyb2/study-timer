import styles from './time-limit.module.css';

export default function TimeLimit({ setTimeLimit, setBreakTimeLimit, label }) {
  const handleSetTime = (time) => {
    const toNum = Number(time);
    setTimeLimit ? setTimeLimit(toNum) : setBreakTimeLimit(toNum);
  };

  return (
    <div className={styles.container}>
      <p className={styles.label}>{label.toUpperCase()}</p>
      <select
        className={styles.select}
        onChange={(e) => handleSetTime(e.target.value)}
      >
        <option default>Select Time Limit</option>
        <option value={5}>5 min</option>
        <option value={10}>10 min</option>
        <option value={15}>15 min</option>
        <option value={20}>20 min</option>
        <option value={25}>15 min</option>
        <option value={30}>20 min</option>
      </select>
    </div>
  );
}
