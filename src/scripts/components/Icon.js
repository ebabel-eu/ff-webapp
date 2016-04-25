import React, { Component, PropTypes } from 'react';
import Battle from './icons/Battle.js';
import Backpack from './icons/Backpack.js';
import Dice from './icons/Dice.js';
import Setting from './icons/Setting.js';

const elems = {
  battle: (<Battle />),
  backpack: (<Backpack />),
  dice: (<Dice />),
  setting: (<Setting />),
};

export default class Icon extends Component {
  render() {
    const { fill, symbol } = this.props;
    return (
      <svg
        className="icon"
        width="35"
        height="35"
        role="img"
        version="1.1"
        viewBox="0 0 50 50"
        style={{ fill }}
      >
        {elems[symbol]}
      </svg>
    );
  }
}

Icon.propTypes = {
  fill: PropTypes.string,
  symbol: PropTypes.oneOf([
    'battle',
    'backpack',
    'dice',
    'setting',
  ]),
};
