import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  static propTypes = {
    appName: PropTypes.string
  };
  render () {
    const { appName } = this.props;
    return (
      <footer className='footer navbar navbar-default navbar-fixed-bottom'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>{appName}</Link>
        </div>
      </footer>
    );
  }
}
