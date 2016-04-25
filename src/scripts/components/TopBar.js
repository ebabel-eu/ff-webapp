import React, { Component, PropTypes } from 'react';

export default class TopBar extends Component {
  render() {
    const { text } = this.props;
    return (
      <header className="topbar">
        {text}
      </header>
    );
  }
}

TopBar.propTypes = {
  text: PropTypes.string.isRequired,
};
