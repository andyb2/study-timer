export const formatTimer = (state) => {
  const stateCopy = { ...state };

  if (state.minuteTwo === 9) {
    stateCopy.minuteOne += 1;
    stateCopy.minuteTwo = 0;
    return stateCopy;
  }

  if (state.secondOne === 5 && state.secondTwo === 9) {
    stateCopy.minuteTwo += 1;
    stateCopy.secondOne = 0;
    stateCopy.secondTwo = 0;
    return stateCopy;
  }

  if (state.secondTwo === 9) {
    stateCopy.secondTwo = 0;
    stateCopy.secondOne += 1;
    return stateCopy;
  }

  stateCopy.secondTwo += 1;
  return stateCopy;
};
