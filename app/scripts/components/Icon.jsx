import React, { Component, PropTypes } from 'react';
import Battle from './icons/Battle.jsx';
import Backpack from './icons/Backpack.jsx';
import Dice from './icons/Dice.jsx';
import Setting from './icons/Setting.jsx';

export default class Icon extends Component {
  static propTypes = {
    fill: PropTypes.string,
    symbol: PropTypes.string.isRequired
  };

  getAppropriateIcon = (symbol) => {
    let elem;
    switch (symbol) {
      case 'battle':
        elem = (<Battle/>);
        break;
      case 'backpack':
        elem = (<Backpack/>);
        break;
      case 'dice':
        elem = (<Dice/>);
        break;
      case 'setting':
        elem = (<Setting/>);
        break;
    }
    return elem;
  };

  render () {
    const { fill, symbol } = this.props;
    return (
      <svg className='icon'
        width='15'
        height='15'
        role='img'
        version='1.1'
        viewBox='0 0 50 50'
        style={{
          fill: fill
        }}>
        {this.getAppropriateIcon(symbol)}
      </svg>
    );
  }
}
