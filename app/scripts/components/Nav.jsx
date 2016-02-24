import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import NavItem from './NavItem.jsx';

export default class Nav extends Component {
  static propTypes = {
    appName: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    navSections: PropTypes.array.isRequired
  };

  createNavItem = (navSections) => {
    return navSections.map((item, index) => {
      const activeSection = this.props.history.isActive(item.url);
      return (
        <NavItem key={index}
          name={item.name}
          url={item.url}
          icon={item.icon}
          active={activeSection}/>
      );
    });
  };

  render () {
    const { appName, navSections } = this.props;
    const items = this.createNavItem(navSections);
    console.log(items);
    return (
      <header className='navbar navbar-fixed-bottom'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>{appName}</Link>
            <ul className='nav navbar-nav'>
              {items}
            </ul>
        </div>
      </header>
    );
  }
}
