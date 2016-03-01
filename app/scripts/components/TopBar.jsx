import React, { Component, PropTypes } from 'react';

export default class TopBar extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render () {
    const { text } = this.props;
    return (
      <header className='topbar'>
        {text}
      </header>
    );
  }
}
