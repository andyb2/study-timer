export default function TimeLimit({ setTimeLimit }) {
  const handleSetTime = (time) => {
    const toNum = Number(time);
    setTimeLimit(toNum);
  };

  return (
    <select onChange={(e) => handleSetTime(e.target.value)}>
      <option default>Select Time Limit</option>
      <option value={5}>5 min</option>
      <option value={10}>10 min</option>
      <option value={15}>15 min</option>
      <option value={20}>20 min</option>
    </select>
  );
}
