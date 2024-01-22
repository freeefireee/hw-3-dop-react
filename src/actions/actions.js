export const SET_TARGET_NUMBER = 'SET_TARGET_NUMBER';
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const RESET_GAME = 'RESET_GAME';

export const setTargetNumber = (targetNumber) => ({
  type: SET_TARGET_NUMBER,
  payload: targetNumber,
});

export const guessNumber = (guessedNumber) => ({
  type: GUESS_NUMBER,
  payload: guessedNumber,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
