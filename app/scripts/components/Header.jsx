import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  static propTypes = {
    appName: PropTypes.string,
    history: PropTypes.object
  };
  render () {
    const { appName, history } = this.props;
    return (
      <header className='navbar navbar-default'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>{appName}</Link>
            <ul className='nav navbar-nav'>
              <li className={history.isActive('articles') ? 'active' : ''}>
                <Link to='/articles'>Articles</Link>
              </li>
              <li className={history.isActive('articles/A Random Post') ? 'active' : ''}>
                <Link to='/articles/A Random Post'>A post</Link>
              </li>
            </ul>
        </div>
      </header>
    );
  }
}
