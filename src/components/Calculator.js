import React, { Component } from 'react';
import calculate from '../logic/calculate';

const operators = ['÷', 'x', '-', '+', '='];
const digits = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: '',
      total: '',
      operation: '',
    };
  }

  handleClick = (btn) => {
    this.setState((state) => calculate(
      {
        next: state.next,
        total: state.total,
        operation: state.operation,
      },
      btn,
    ));
  }

  render() {
    const { total, next } = this.state;
    return (
      <ul className="calculator-body">
        <li className="calculator-screen">
          {next || total || '0'}
        </li>
        <li className="calculator-keyboard">
          <div className="calculator-digits">
            {digits.map((btn) => <button onClick={() => this.handleClick(btn)} type="button" key={btn}>{ btn }</button>) }
          </div>
          <div className="calculator-operators">
            {operators.map((btn) => <button onClick={() => this.handleClick(btn)} type="button" key={btn}>{ btn }</button>) }
          </div>
        </li>
      </ul>
    );
  }
}

export default Calculator;
