import React, { Component, PropTypes } from 'react';
import Battle from './icons/Battle.jsx';
import Backpack from './icons/Backpack.jsx';
import Dice from './icons/Dice.jsx';
import Setting from './icons/Setting.jsx';

const elems = {
  battle: (<Battle/>),
  backpack: (<Backpack/>),
  dice: (<Dice/>),
  setting: (<Setting/>)
};

export default class Icon extends Component {
  static propTypes = {
    fill: PropTypes.string,
    symbol: PropTypes.oneOf([
      'battle',
      'backpack',
      'dice',
      'setting'
    ])
  };

  render () {
    const { fill, symbol } = this.props;
    return (
      <svg className='icon'
        width='35'
        height='35'
        role='img'
        version='1.1'
        viewBox='0 0 50 50'
        style={{ fill }}>
        { elems[symbol] }
      </svg>
    );
  }
}
