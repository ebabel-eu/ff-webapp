import config from '../../config/default';
import React, { Component, PropTypes } from 'react';
import Nav from '../components/Nav.jsx';
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
    const { children, appName, history, navSections } = this.props;
    return (
      <div>
        <Nav appName={appName} history={history} navSections={navSections}/>
        <div className='container-fluid'>
          {children}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  main: state.main
}))(Layout);
