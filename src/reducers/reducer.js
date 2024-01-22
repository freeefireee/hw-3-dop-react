import { SET_TARGET_NUMBER, GUESS_NUMBER, RESET_GAME } from '../actions/actions';
const initialState = {
  targetNumber: null,
  guessedNumber: null,
  feedback: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TARGET_NUMBER:
      return {
        ...state,
        targetNumber: action.payload,
      };
    case GUESS_NUMBER:
      const guessedNumber = action.payload;
      let feedback = '';

      if (guessedNumber === state.targetNumber) {
        feedback = 'Поздравляем! Вы отгадали число!';
      } else if (guessedNumber < state.targetNumber) {
        feedback = 'Не правильно, берите выше.';
      } else {
        feedback = 'Не правильно, берите ниже.';
      }

      return {
        ...state,
        guessedNumber,
        feedback,
      };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
