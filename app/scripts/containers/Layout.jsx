import config from '../../config/default';
import React, { Component, PropTypes } from 'react';
import Nav from '../components/Nav.jsx';
import TopBar from '../components/TopBar.jsx';
import { connect } from 'react-redux';

class Layout extends Component {
  static defaultProps = {
    appName: config.appName,
    navSections: config.navSections
  };

  static propTypes = {
    appName: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    navSections: PropTypes.array.isRequired
  };

  render () {
    const { appName, children, history, navSections } = this.props;
    return (
      <div>
        <TopBar text={appName}/>
        <div className='container-fluid'>
          {children}
        </div>
        <Nav history={history} navSections={navSections}/>
      </div>
    );
  }
}

export default connect(state => ({
  main: state.main
}))(Layout);
