import React, { useState } from 'react';
import calculate from '../logic/calculate';
import math from '../images/download.gif';

const operators = ['÷', 'x', '-', '+', '='];
const digits = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

const Calculator = () => {
  const [obj, calcObj] = useState({
    next: '',
    total: '',
    operation: '',
  });

  const handleClick = (btn) => {
    const { total, next, operation } = calculate(obj, btn);
    if (next === null && total === null) {
      calcObj({ next, total: '', operation });
    } else {
      calcObj({ next, total, operation });
    }
  };

  return (
    <div className="calc-group">
      <div className="calc-text">
        <p> Let&apos;s do some math! </p>
        <img src={math} alt="math" />
      </div>
      <div>
        <ul className="calculator-body">
          <li className="calculator-screen">
            {obj.next || obj.total || '0'}
          </li>
          <li className="calculator-keyboard">
            <div className="calculator-digits">
              {digits.map((btn) => <button onClick={() => handleClick(btn)} type="button" key={btn}>{ btn }</button>) }
            </div>
            <div className="calculator-operators">
              {operators.map((btn) => <button onClick={() => handleClick(btn)} type="button" key={btn}>{ btn }</button>) }
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Calculator;
