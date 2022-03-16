import React from 'react';

export default function Calculator() {
  const numbers = () => {
    const digits = [];

    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button type="button" key={i}>{i}</button>,
      );
    }
  };

  return (
    <div className="App">
      <div className="Calculator">
        <div className="Answers">
          <span>0</span>
        </div>

        <div className="operators">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button">/</button>
        </div>

        <div className="digits">
          { numbers() }
          <button type="button">0</button>
          <button type="button">0</button>
        </div>
      </div>
    </div>
  );
}
