import React, { Component, PropTypes } from 'react';
import NavItem from './NavItem.js';

export default class Nav extends Component {
  createNavItem(navSections) {
    return navSections.map((item, index) => {
      const activeSection = this.props.history.isActive(item.url);
      return (
        <NavItem
          key={index}
          name={item.name}
          url={item.url}
          icon={item.icon}
          active={activeSection}
        />
      );
    });
  }

  render() {
    const { navSections } = this.props;
    const items = this.createNavItem(navSections);
    return (
      <footer className="nav">
        {items}
      </footer>
    );
  }
}

Nav.propTypes = {
  history: PropTypes.object.isRequired,
  navSections: PropTypes.array.isRequired,
};
