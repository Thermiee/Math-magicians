import React from 'react';
import '../index.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator__view__container">
        <div className="calculator__view">
          <h1 className="calculator__view__h1">0</h1>
        </div>
      </div>
      <div className="calculator__rows">
        <div className="calculator__row">
          <button type="button" className="calculator__greyButton">AC</button>
          <button type="button" className="calculator__greyButton">+/-</button>
          <button type="button" className="calculator__greyButton">%</button>
          <button type="button" className="calculator__orangeButton">÷</button>
        </div>
        <div className="calculator__row">
          <button type="button" className="calculator__greyButton">7</button>
          <button type="button" className="calculator__greyButton">8</button>
          <button type="button" className="calculator__greyButton">9</button>
          <button type="button" className="calculator__orangeButton">x</button>
        </div>
        <div className="calculator__row">
          <button type="button" className="calculator__greyButton">4</button>
          <button type="button" className="calculator__greyButton">5</button>
          <button type="button" className="calculator__greyButton">6</button>
          <button type="button" className="calculator__orangeButton ">—</button>
        </div>
        <div className="calculator__row">
          <button type="button" className="calculator__greyButton">1</button>
          <button type="button" className="calculator__greyButton">2</button>
          <button type="button" className="calculator__greyButton">3</button>
          <button type="button" className="calculator__orangeButton ">+</button>
        </div>
        <div className="calculator__row">
          <button type="button" className="calculator__greyButtonZero">0</button>
          <button type="button" className="calculator__greyButton">.</button>
          <button type="button" className="calculator__orangeButton">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
