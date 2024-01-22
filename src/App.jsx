import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTargetNumber, guessNumber, resetGame } from './actions/actions';
import './style.css';

const App = ({ targetNumber, guessedNumber, feedback, setTargetNumber, guessNumber, resetGame }) => {
  const [inputValue, setInputValue] = useState('');

  const handleStartGame = () => {
    const targetNumber = Math.floor(Math.random() * 101);
    setTargetNumber(targetNumber);
  };

  const handleGuess = () => {
    if (inputValue !== '') {
      guessNumber(parseInt(inputValue, 10));
    }
  };

  const handleReset = () => {
    resetGame();
    setInputValue('');
  };

  return (
    <div className='block'>
      {targetNumber === null ? (
        <button className="button-42" role="button" onClick={handleStartGame}>Начать игру</button>
      ) : (
        <>
        <div className="blockk">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="button-55" role="button" onClick={handleGuess}>Отгадать</button>
          </div>
          <div>{feedback}</div>
          {guessedNumber === targetNumber && (
            <>
              <button className="button-89" role="button" onClick={handleReset}>Заново</button>
              <div>Поздравляем! Вы отгадали число!</div>
            </>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  targetNumber: state.targetNumber,
  guessedNumber: state.guessedNumber,
  feedback: state.feedback,
});

const mapDispatchToProps = {
  setTargetNumber,
  guessNumber,
  resetGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
