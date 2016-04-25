import config from '../../config/default';
import React, { Component, PropTypes } from 'react';
import Nav from '../components/Nav.js';
import TopBar from '../components/TopBar.js';

export default class Layout extends Component {
  render() {
    const { appName, children, history, navSections } = this.props;
    return (
      <div>
        <TopBar text={appName} />
        <div className="container-fluid">
          {children}
        </div>
        <Nav history={history} navSections={navSections} />
      </div>
    );
  }
}

Layout.defaultProps = {
  appName: config.appName,
  navSections: config.navSections,
};

Layout.propTypes = {
  appName: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  navSections: PropTypes.array.isRequired,
};
