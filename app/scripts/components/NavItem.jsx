import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  };
  render () {
    const { name, url, icon, active } = this.props;
    const activeClassName = active ? 'active' : '';
    return (
      <li className={`nav-item ${activeClassName}`}>
        <Link className='nav-link' to={url}>{name}, {icon}</Link>
      </li>
    );
  }
}
