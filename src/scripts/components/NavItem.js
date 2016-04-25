import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from './Icon.js';

export default class NavItem extends Component {
  render() {
    const { name, url, icon, active } = this.props;
    const activeClassName = active ? 'active' : '';
    return (
      <Link className={`nav-link ${activeClassName}`} to={url} title={name}>
        <Icon symbol={icon} />
      </Link>
    );
  }
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
