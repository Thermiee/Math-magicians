import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttons } = this.props;
    return (
      <div className={buttons.length <= 5 ? 'calculator-operators' : 'calculator-digits'}>
        { buttons.map((btn) => <button type="button" key={btn}>{ btn }</button>) }
      </div>
    );
  }
}

Button.propTypes = {
  buttons: PropTypes.string.isRequired,
};

export default Button;
